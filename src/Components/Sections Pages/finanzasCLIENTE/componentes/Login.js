import React, { useEffect, useState } from "react";
import "./Login.css";
import { Icon } from "semantic-ui-react";
import LoadingCobros from "./LoadingCobros.js";
import { CobrosAPI } from "../../../../api/Cobros.js";

const cobrosController = new CobrosAPI();
export default function Login({ state, valor }) {
  const [activo, setActivo] = useState("login");
  const [errorPassword, setErrorPassword] = useState("");
  const textUsername = "Usuario No Disponible!";
  const [loading, setLoading] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errorUsername, setErrorUsername] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const verificarUsernameRepetido = async (e) => {
    e.preventDefault();
    const users = await fetch(
      "https://paderlcrown-server.onrender.com/admin/cobros"
    );
    const usersData = await users.json();
    const user = usersData.find((item) => item.username === e.target.value);

    if (user) {
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
      setFormRegister({ ...formRegister, username: e.target.value });
    }
  };

  const [formRegister, setFormRegister] = useState({
    username: "",
    nombre: "",
    apellido: "",
    dni: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeRegister = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const register = async () => {
    if (formRegister.password !== formRegister.confirmPassword) {
      setErrorPassword("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    const response = await cobrosController.registrarCliente({
      username: formRegister.username,
      nombre: formRegister.nombre,
      dni: formRegister.dni,
      email: formRegister.email,
      password: formRegister.password,
    });

    localStorage.setItem("usuarioFinanciero", JSON.stringify(response));
    localStorage.setItem("idUserFinanciero", response._id);

    state(!valor);
    setLoading(false);
  };

  const login = async () => {
    setLoading(true);
    const response = await cobrosController.loginClient({
      username: formLogin.email,
      password: formLogin.password,
    });

    if (response.error) {
      console.log("Error al iniciar sesion");
    } else {
      localStorage.setItem("usuarioFinanciero", JSON.stringify(response));
      localStorage.setItem("idUserFinanciero", response._id);
      state(true);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      {activo === "login" ? (
        <div className="login">
          {loading ? (
            <LoadingCobros />
          ) : (
            <>
              <div className="login-title">Iniciar Sesión</div>
              <div className="icons-socials">
                <Icon
                  className="i-socials"
                  name="facebook"
                  size="big"
                  color="blue"
                />
                <Icon
                  name="instagram"
                  className="i-socials"
                  size="big"
                  color="purple"
                />
                <Icon
                  name="whatsapp"
                  size="big"
                  className="i-socials"
                  color="green"
                />
              </div>
              <div className="login-form">
                <input
                  type="text"
                  placeholder="Correo"
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Contraseña"
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, password: e.target.value })
                  }
                />
                <button
                  onClick={() => {
                    login();
                  }}
                >
                  Iniciar Sesión
                </button>
              </div>
              <div className="login-footer">
                <h5>¿No tenes cuenta?</h5>
                <div
                  className="iniciar-sesion-footer"
                  onClick={() => setActivo("register")}
                >
                  Registrarse
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="register">
          <div className="register-title">Registrarse</div>
          <div className="icons-socials">
            <Icon
              className="i-socials"
              name="facebook"
              size="big"
              color="blue"
            />
            <Icon
              name="instagram"
              className="i-socials"
              size="big"
              color="purple"
            />
            <Icon
              name="whatsapp"
              size="big"
              className="i-socials"
              color="green"
            />
          </div>
          <div class="register-form">
            <input
              type="text"
              placeholder="Usuario"
              onChange={(e) => verificarUsernameRepetido(e)}
            />
            <p className="error-user">
              {errorUsername ? textUsername : "Usuario diponible"}
            </p>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={(e) => handleChangeRegister(e)}
            />
            <input
              type="text"
              placeholder="DNI"
              name="dni"
              onChange={(e) => handleChangeRegister(e)}
            />
            <input
              type="text"
              placeholder="Correo"
              name="email"
              onChange={(e) => handleChangeRegister(e)}
            />
            <input
              type="text"
              placeholder="Contraseña"
              name="password"
              onChange={(e) => handleChangeRegister(e)}
            />
            <input
              type="text"
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              onChange={(e) => handleChangeRegister(e)}
            />
            <p className="error-password">{errorPassword}</p>
            <button
              onClick={() => {
                register();
              }}
              disabled={errorUsername}
            >
              {loading ? "Registrando..." : "Registrarse"}
            </button>
          </div>
          <div className="login-footer">
            <h5>¿Ya tenes cuenta?</h5>
            <div
              className="iniciar-sesion-footer"
              onClick={() => setActivo("login")}
            >
              Iniciar Sesion
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

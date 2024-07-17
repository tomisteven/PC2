import React from "react";
import "./LoginPage.css";
import { Image, Input} from "semantic-ui-react";
import logo from "../../../../assets/LOGO ACTUAL.webp";

export default function LoginPage() {

    const validateAdmin = (password ) => {
        if(password === "sara2139") {
            localStorage.setItem("admin", true);
            window.location.reload();
        }
    }


  return (
    <div className="login-page">
      <div className="box-log">
        <Image src={logo} size="small" circular />
        <h1>Inicio de Sesion</h1>
        <form>
        <Input action='Ingresar' onChange={
            (e) => {
                validateAdmin(e.target.value);
            }
        } placeholder='Contraseña' />
        </form>
      </div>
    </div>
  );
}

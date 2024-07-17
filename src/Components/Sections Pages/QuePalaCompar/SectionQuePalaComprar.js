import React, { useState } from "react";
import "./SectionQuePalaComprar.css";
import { Radio, Button } from "semantic-ui-react";
import logo from "../../../assets/LOGO ACTUAL.webp";
import { useEffect } from "react";
import ModalVer from "./ModalVer";
export default function SectionQuePalaComprar() {
  const [step, setStep] = useState(0);

  const [open, setOpen] = useState(false);

  const [paletaElegida, setPaletaElegida] = useState([]);
  const questions = [
    {
      key: "tipoJugador",
      title: "HACE CUANTO JUGAS AL PADEL?",
      options: ["PROFESIONAL (4-6 AÑOS)", "AVANZADO (2-3 AÑOS)", " INICIANTE (0-1 AÑO)"],
    },
    {
      key: "posicionJuego",
      title: "POSICION DONDE JUGAS MAS?",
      options: ["IZQUIERDA", "DERECHA", "AMBAS"],
    },
    {
      key: "modoJuego",
      title: "QUE TIPO DE PALA USAS ? ",
      options: ["Ataque/Potencia", "Mixto/Hibrido", "Defensa/Control"],
    },
    {
      key: "golpeFavorito",
      title: "CUAL ES TU GOLPE FAVORITO?",
      options: ["Voleas", "Bandeja/Vibora", "Smash", "X3", "Todas las anteriores"],
    },
    {
      key: "fijasCompra",
      title: "QUE ES LO QUE MAS TE IMPORTA AL COMPRAR UNA PALA?",
      options: ["Peso", "Calidad Materiales", "Balance", "Precio", "Todas las anteriores"],
    },
    {
      key: "tipoPaleta",
      title: "¿Que tipo de Forma te gusta?",
      options: [
        "Redonda (Control)",
      "Gota (Control / Potencia)",
        "Diamante (Potencia)",
      ],
    },
    {
      key: "balance",
      title: "QUE TIPO DE BALANCE TE GUSTA?",
      options: ["Bajo", "Medio", "Alto"],
    },
    {
      key: "goma",
      title: "QUE TIPO DE GOMA TE GUSTA?",
      options: ["Blanda", "Dura", "Media"],
    },
    {
      title:
        "Listo! Ya tenemos tu paleta ideal, ahora solo elige una! al finalizar te mostraremos las paletas que mas se adaptan a tu juego!",
      options: [],
    },
  ];

  useEffect(() => {
    localStorage.setItem("tipoJugador", "");
    localStorage.setItem("posicionJuego", "");
    localStorage.setItem("modoJuego", "");
    localStorage.setItem("golpeFavorito", "");
    localStorage.setItem("fijasCompra", "");
    localStorage.setItem("tipoPaleta", "");
    localStorage.setItem("balance", "");
    localStorage.setItem("goma", "");
  }, []);

  const variantes = [
    {
      producto: "Fg Atos FOAM - Control",
      link: "https://padelcrown.com.ar/productos/fg-atos-full-carbono-nucleo-foam/",
    },
    {
      producto: "Fg Atos EVA - Potencia",
      link: "https://padelcrown.com.ar/productos/fg-atos-full-carbono-eva-soft/",
    },
    {
      producto: "Full Carbono REDONDA -FOAM - Control",
      link: "https://padelcrown.com.ar/productos/paleta-sin-ploteo-full-carbono/",
    },
    {
      producto: "Full Carbono - Lagrima - EVA - Control",
      link: "https://padelcrown.com.ar/productos/paleta-sin-ploteo-full-carbono/",
    },
    {
      producto: "Full Carbono EVA - Diamante - POTENCIA",
      link: "https://padelcrown.com.ar/productos/paleta-sin-ploteo-full-carbono/",
    },
    {
      producto: "Full Carbono FOAM - Diamante - Control",
      link: "https://padelcrown.com.ar/productos/paleta-sin-ploteo-full-carbono/",
    },
    {
      producto: "Fibra de Vidrio EVA - Diamante - Potencia", //ss 6
      link: "https://padelcrown.com.ar/productos/paletas-fibra-de-vidrio-sin-ploteo/",
    },
    {
      producto: "Fibra de Vidrio - Redonda - Control", //ss 7
      link: "https://padelcrown.com.ar/productos/paletas-fibra-de-vidrio-sin-ploteo/",
    },
    {
      producto: "Fibra de Vidrio - Gota - Control/Potencia", //ss 8
      link: "https://padelcrown.com.ar/productos/paletas-fibra-de-vidrio-sin-ploteo/",
    },
    {
      producto: "Fg Kripton - Redonda - Foam - Control", //ss 9
      link: "https://padelcrown.com.ar/productos/fg-kripton-fibra-de-vidrio-foam/",
    },
    {
      producto: "Fg Horus - Redonda - EvaSoft - Potencia", //ss 10
      link: "https://padelcrown.com.ar/productos/fg-horus-fibra-de-vidrio-evasoft/",
    },
    {
      producto: "12k Importado - Eva - Lagrima - Control/Potencia",
      link: "https://padelcrown.com.ar/productos/fg-edicion-limitada-carbono-12k-importado/",
    },
    {
      producto: "12k Importado - Foam - Lagrima - Control",
      link: "https://padelcrown.com.ar/productos/fg-edicion-limitada-carbono-12k-importado/",
    },
    {
      producto: "12k Importado - Foam - Redonda - Control",
      link: "https://padelcrown.com.ar/productos/fg-edicion-limitada-carbono-12k-importado/",
    },
  ];
  const chooseVariant = (values) => {
    //console.log(values);
    if (
      values.tipoJugador === "Principiante" &&
      values.modoJuego === "Defensa/Control" &&
      (values.tipoPaleta === "Redonda (Control)" ||
        values.tipoPaleta === "Lagrima (Hibrido)")
    ) {
      return [variantes[7], variantes[9]];
    } else if (
      values.tipoJugador === "Principiante" &&
      values.modoJuego === "Ataque/Potencia" &&
      (values.tipoPaleta === "Diamante (Potencia)" ||
        values.tipoPaleta === "Lagrima (Hibrido)")
    ) {
      return [variantes[6], variantes[10]];
    } else if (
      values.tipoJugador === "Principiante" &&
      values.modoJuego === "Mixto/Hibrido" &&
      (values.tipoPaleta === "Redonda (Control)" ||
        values.tipoPaleta === "Lagrima (Hibrido)")
    ) {
      return [variantes[8]];
    } else if (
      values.tipoJugador === "Amateur" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Defensa/Control") &&
      values.tipoPaleta === "Redonda (Control)"
    ) {
      return [variantes[2], variantes[12]];
    } else if (
      values.tipoJugador === "Amateur" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Ataque/Potencia") &&
      values.tipoPaleta === "Diamante (Potencia)"
    ) {
      return [variantes[4], variantes[1], variantes[13]];
    } else if (
      values.tipoJugador === "Amateur" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Defensa/Control") &&
      values.tipoPaleta === "Redonda (Control)"
    ) {
      return [variantes[2], variantes[12]];
    } else if (
      values.tipoJugador === "Amateur" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Defensa/Control") &&
      values.tipoPaleta === "Lagrima (Hibrido)"
    ) {
      return [variantes[5], variantes[0], variantes[12]];
    } else if (
      values.tipoJugador === "Profesional" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Defensa/Control") &&
      values.tipoPaleta === "Lagrima (Hibrido)"
    ) {
      return [variantes[12], variantes[13]];
    } else if (
      values.tipoJugador === "Profesional" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Ataque/Potencia") &&
      values.tipoPaleta === "Redonda (Control)"
    ) {
      return [variantes[12], variantes[13], variantes[0]];
    } else if (
      values.tipoJugador === "Profesional" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Ataque/Potencia") &&
      values.tipoPaleta === "Diamante (Potencia)"
    ) {
      return [variantes[12], variantes[13], variantes[1]];
    } else if (
      values.tipoJugador === "Profesional" &&
      (values.modoJuego === "Mixto/Hibrido" ||
        values.modoJuego === "Defensa/Control") &&
      values.tipoPaleta === "Redonda (Control)"
    ) {
      return [variantes[12], variantes[13], variantes[1]];
    }

    return [variantes[0], variantes[4], variantes[3], variantes[12]];
  };

  const form = {
    tipoJugador: localStorage.getItem("tipoJugador"),
    posicionJuego: localStorage.getItem("posicionJuego"),
    modoJuego: localStorage.getItem("modoJuego"),
    golpeFavorito: localStorage.getItem("golpeFavorito"),
    fijasCompra: localStorage.getItem("fijasCompra"),
    tipoPaleta: localStorage.getItem("tipoPaleta"),
    balance: localStorage.getItem("balance"),
    goma: localStorage.getItem("goma"),
  };

  const renderOptions = () => {
    const options = questions;

    return options.map((option, i) => {
      return (
        step === i && (
          <div className="cont-question">
            <h2>{option.title}</h2>
            <div className="cont-options">
              {option.options.map((option, index) => {
                return (
                  <div className="cont-option">
                    <Radio
                      label={option}
                      checked={form[questions[step].key] === option}
                      onChange={() => {
                        localStorage.setItem(questions[step].key, option);
                        setStep(step + 1);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )
      );
    });
  };

  return (
    <div className="cont-test">
      <div className="cont-questions">
        <div class="cont-img">
          <img src={logo} alt="" />
        </div>
        <div class="cont-titles">
          <h1>¿Qué pala comprar?</h1>
          <p>Encuentra tu pala ideal</p>
        </div>
        <div className="cont-questions-options">{renderOptions()}</div>
      </div>
      <div class="cont-nuttons">
        {step === 0 ? null : (
          <button class="button-s" onClick={() => setStep(step - 1)}>
            <div class="button-box">
              <span class="button-elem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span class="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
        )}
        {step === questions.length - 1 ? null : (
          <button
            class="button-s"
            style={{
              transform: "rotate(180deg)",
            }}
            onClick={() => setStep(step + 1)}
          >
            <div class="button-box">
              <span class="button-elem">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span class="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
        )}
        {step === questions.length - 1 && (
          <div class="cont-button">
            <Button
              color="red"
              size="mini"
              onClick={() => {
                window.location.reload();
              }}
            >
              Reiniciar
            </Button>
            <Button
              color="green"
              onClick={() => {
                setPaletaElegida(chooseVariant(form));
                setOpen(true);
              }}
            >
              Ver paletas
            </Button>
          </div>
        )}
      </div>
      <ModalVer open={open} setOpen={setOpen} paletas={paletaElegida} />
    </div>
  );
}

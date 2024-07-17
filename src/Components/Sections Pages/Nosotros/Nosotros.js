import React from "react";
import "./Nosotros.css";
import padelcrown from "../../../assets/LOGO ACTUAL.webp";
import fg from "../../../assets/fglogo.webp";

export default function Nosotros() {
  return (
    <>
      <div className="nosotros-content">
        <div class="imgs-logos">
          <img className="img-nosotros" src={padelcrown} alt="" />
          <img className="img-nosotros" src={fg} alt="" />
        </div>
        <div class="content-info">
          <h2 className="title-nosotros">
            Bienvenido a Padel Crown: Tu Puerta al Éxito en el Pádel Profesional
          </h2>
          <p>
            <span>Tu Puerta al Éxito en el Pádel Profesional:</span> En Padel
            Crown nos enorgullecemos de ofrecer una experiencia única en el
            mundo del pádel. Somos una empresa dedicada a la venta de paletas de
            la más alta calidad, diseñadas y fabricadas por la prestigiosa
            empresa "FG", reconocida por su compromiso con la excelencia y la
            innovación en el mundo del pádel.
          </p>
          <p>
            <span>Nuestra Pasión por el Pádel En Padel Crown:</span>,
            compartimos tu pasión por el pádel. Entendemos que este deporte es
            mucho más que una actividad física; es una forma de vida que
            promueve la competencia sana, el compañerismo y la superación
            personal. Por eso, nos esforzamos por ofrecerte las herramientas
            adecuadas para alcanzar tus metas y llevar tu juego al siguiente
            nivel.
          </p>{" "}
          <p>
            <span>Calidad Premium, Desarrollada por FG:</span> Colaboramos
            estrechamente con la reconocida empresa "FG", líder en la
            fabricación de paletas de pádel de la más alta calidad. Cada paleta
            que ofrecemos ha sido meticulosamente diseñada y construida con
            materiales de primera clase para brindarte un rendimiento
            inigualable en la cancha.
          </p>{" "}
          <p>
            <span>Nuestro Compromiso con la Excelencia:</span> En Padel Crown,
            no solo vendemos paletas; ofrecemos una experiencia de juego que
            refleja nuestra dedicación a la excelencia. Nuestro equipo está
            compuesto por apasionados del pádel que están aquí para asesorarte y
            ayudarte a encontrar la paleta perfecta que se adapte a tu estilo de
            juego y necesidades individuales.
          </p>{" "}
          <p>
            <span>Un Impulso Hacia el Juego Profesional:</span> Nos
            enorgullecemos de ser una plataforma para aquellos que buscan llevar
            su juego al más alto nivel. Nuestras paletas están diseñadas
            pensando en los jugadores profesionales y aspirantes a
            profesionales, brindándote la confianza y el rendimiento que
            necesitas para enfrentarte a cualquier desafío en la cancha.
          </p>{" "}
          <p>
            <span>Únete a la Familia Padel Crown:</span> Te invitamos a explorar
            nuestra selección de paletas premium y unirte a la comunidad de
            jugadores apasionados que confían en Padel Crown para alcanzar sus
            metas en el pádel. Juntos, podemos hacer que cada partido sea una
            experiencia inolvidable. ¡Descubre la diferencia Padel Crown hoy!
          </p>
        </div>
      </div>
      <button onClick={
        () => {
          window.location.href = "https://www.padelcrown.com.ar/";
        }
      } className="button-nosotros">Visitar Tienda Web</button>
    </>
  );
}

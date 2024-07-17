import React from "react";
import  "./ClockPromocion.css";

export default function ClockPromocion() {
  const [horas, setHoras] = React.useState(0);
  const [minutos, setMinutos] = React.useState(Math.floor(Math.random()*15));
  const [segundos, setSegundos] = React.useState(59);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (segundos === 0) {
        if (minutos === 0) {
          if (horas === 0) {
            document.querySelector(".clock-container").innerHTML = "Tiempo Finalizado";
            clearInterval(interval);
          } else {
            setHoras(horas);
            setMinutos(59);
            setSegundos(59);
          }
        } else {
          setMinutos(minutos - 1);
          setSegundos(59);
        }
      } else {
        setSegundos(segundos - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [horas, minutos, segundos]);

  return (
    <div className="clock-container">
        <img src="https://cdn.pixabay.com/animation/2023/04/28/18/34/18-34-10-554_512.gif" alt=""/>
      <h1 className="clock-hour">{`${horas.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`}</h1>

        <h5 className="clock-promocion">Tiempo limitado para Envios Gratis</h5>
        <img src="https://cdn-icons-png.flaticon.com/512/6831/6831000.png" alt=""/>
    </div>
  );
}

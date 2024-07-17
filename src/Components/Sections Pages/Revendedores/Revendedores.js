import React from "react";
import "./Revendedores.css";
import { Card, Typography } from "@material-tailwind/react";
import { Icon } from "semantic-ui-react";
import CardResponsive from "./CardResponsive";

const TABLE_HEAD = ["Name", "Contacto", "Email", "Direccion", "Localidad", "Redes Sociales", "Mapa"];

const TABLE_ROWS = [
  {
    name: "Contra Pared Paletas",
    email: "contraparedpaletas@gmail.com",
    direccion: "Av. Mosconi 2847",
    localidad: "Quilmes",
    contacto: "1121869068",
instagram: "https://www.instagram.com/contraparedpaletas/",
    mapa: "https://maps.app.goo.gl/bTxxeTM9awoX5dEAA",
  },
  {
    name: "Paletas Neuquen",
    email: "cdcneuquen@hotmail.com",
    direccion: "Metan 919",
    localidad: "Neuquén Capital",
    contacto: "2994015912",
instagram: "https://www.instagram.com/paletasneuquen/",
    mapa: "https://maps.app.goo.gl/uWaEStfzTy4hzmnFA",
  },
  {
    name: "Set Padel House",
    email: "set.padelhouse@gmail.com",
    direccion: "Tribulato 540",
    localidad: "San Miguel",
    contacto: "1141644488",
instagram: "https://www.instagram.com/set.padelhouse/",
    mapa: "https://maps.app.goo.gl/M9QL1Z8sWXsFjULHA",

  },
  {
    name: "Tomas Steven",
    email: "tomsteven22@hotmail.com",
    direccion: "Adolfo Sourdeaux",
    localidad: "Malvinas Argentinas",
    contacto: "1134750981",
    mapa: "https://maps.app.goo.gl/qEgsJMQ9TDJsHhz8A",
  },
  {
    name: "Insumos Padel",
    email: "",
    direccion: "Av. San Martin 1440",
    localidad: "Don Torcuato",
    contacto: "5491141946315",
    mapa: "https://maps.app.goo.gl/9Z4qK2Ym3q8d2b3e8",
    instagram: "https://www.instagram.com/insumos_de.padel/",
  }
];

export default function Revendedores() {
  //const $revendedores = React.useContext(GlobalContext)[1]

  return (
    <div class={
      window.innerWidth < 768 ? "cont-card-revendedores-r" : "cont-card-revendedores"
    }>
      <h3>Revendedores Oficiales de Padel Crown</h3>
      {
        window.innerWidth < 768 ? (
          <CardResponsive datosH={TABLE_HEAD} datosV={TABLE_ROWS} />
        ) : (
          <Card className="card h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ name, email, localidad, direccion, mapa, contacto, instagram }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contacto}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {direccion}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {localidad}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <a href={instagram}><Icon size="big" name="instagram" /></a>
                        <a href={instagram}><Icon size="big" name="whatsapp" /></a>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <a href={mapa}><Icon size="big" name="map marker alternate" /></a>
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
        )
      }
    </div>
  );
}

import React from "react";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import "./CondicionesFinanciacion.css";

export default function CondicionesFinanciacion() {
  const [activeIndex, setActiveIndex] = React.useState({ activeIndex: 0 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <div className="cont-list-condiciones">
        <h5>
            Condiciones de Financiacion de Padel Crown
        </h5>
      <Accordion styled fluid className="acordeon-cont">
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
          className="acordeon-title"
        >
          <Icon name="dropdown" />
          Que es el sistema de financiacion de Padel Crown ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
            El sistema de financiacion de Padel Crown es un sistema de
            financiacion que permite a los usuarios financiar la compra de
            productos de la tienda de Padel Crown. Nosotros nos encargamos de la
            gestion de la financiacion y de la gestion de los pagos de los
            usuarios. Se da la posibilidad a aquellos clientes que no tiene en
            su poder una tarjeta de credito o debito de poder financiar sus
            compras a traves de la tienda Web.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Como se pueden abonar las cuotas ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
            Las cuotas se pueden abonar a traves de Transferencia mediante
            Mercado pago o tu billetera virtual. Tambien se puede mediante
            RapiPago, PagoFacil o cualquier otro medio de pago que se encuentre
            disponible para el ingreso del dinero en nuestra cuenta.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Como es la Financiacion segun el modo ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>
            Hay 3 modos de financiacion: Semanal, Quincenal y Mensual. La tasa
            de interes es del 10%, solo en pagos de manera mensual. Los pagos de
            manera semanal y quincenal no tienen tasa de interes. La
            financiacion es de un 100% del valor del producto.
          </p>
          <p>
            <strong>SEMANAL</strong>: 4 cuotas, es decir, el producto se paga en
            4 cuotas semanales. Un total de 30 dias.
          </p>
          <p>
            <strong>QUINCENAL</strong>: 3 cuotas, es decir, el producto se paga
            en 2 cuotas quincenales. Un total de 45 dias.
          </p>

          <p>
            <strong>MENSUAL</strong>: 2 cuotas, es decir, el producto se paga en
            2 cuotas mensuales. Un total de 60 dias.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Como es el tema de la Produccion y envio de mi producto ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 3}>
          <p>
            El producto se enviara unicamente al cumplir con la mitad de los
            pagos, Una vez que se complete el 70% del valor del producto se
            enviara al domicilio del cliente. El cliente debera abonar el costo
            de envio del producto.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Que pasa si no abono una cuota y se vence el plazo ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 4}>
          <p>
            Pasados 5 dias de la fecha de vencimiento de la cuota, se le sumara
            un interes del 10% sobre el valor de la cuota. Pasados 10 dias de la
            fecha de vencimiento de la cuota, se le sumara un interes del 30%
            sobre el valor de la cuota. Pasados 15 dias de la fecha de
            vencimiento de la cuota, se le cancelara el plan de financiacion y
            no se le devolvera el dinero abonado hasta el momento.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Puedo cancelar mi financiacion ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 5}>
          <p>
            Una vez abonada la segunda cuota de la financiacion, se podra dar de
            baja la financiacion pero no se le devolvera el dinero abonado hasta
            el momento. Si no abono la segunda cuota de la financiacion, se le
            cancelara el plan de financiacion y se le devolvera el dinero
            abonado de la primera cuota.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 6}
          index={6}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Que pasa si una vez abonado el 60% del producto y me envian el
          producto y no abono las ultimas cuota ?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 6}>
          <p>
            Una vez abonada la segunda cuota de la financiacion, se podra dar de
            baja la financiacion pero no se le devolvera el dinero abonado hasta
            el momento. Si no abono la segunda cuota de la financiacion, se le
            cancelara el plan de financiacion y se le devolvera el dinero
            abonado de la primera cuota.
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  );
}

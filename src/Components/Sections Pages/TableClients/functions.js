export class Functions {

    calcularGanancia = (precio, costo, envio) => {
        const ganancia = envio ? precio - costo - envio : precio - costo;
        return ganancia;
      };


      filterClients = (search, clientesState, setClientesState, clientes) => {
        const filteredClients = clientesState.filter((cliente) => {
          return cliente.nombre.toLowerCase().includes(search.toLowerCase());
        });

        if (search === "") {
          setClientesState(clientes);
          return;
        }
        setClientesState(filteredClients);
      };

      colorState = (estado) => {
    if (estado === "Pendiente") {
      return "span-estado-pendiente";
    } else if (estado === "Confirmado") {
      return "span-estado-confirmado";
    } else if (estado === "Fabricacion") {
      return "span-estado-fabricacion";
    } else if (estado === "Secado") {
      return "span-estado-secado";
    } else if (estado === "Envio a PadelCrown") {
      return "span-estado-enviopadelcrown";
    } else if (estado === "Empaquetado") {
      return "span-estado-empaquetado";
    } else if (estado === "Despachado") {
      return "span-estado-despachado";
    } else if (estado === "En Camino") {
      return "span-estado-camino";
    } else if (estado === "Entregado") {
      return "span-estado-entregado";
    }
  };


  formatFecha = (fechaString) => {
     // Intenta parsear la fecha en formato "dd/mm/aaaa"
     var formatoDDMMYYYY = /^\d{2}\/\d{2}\/\d{4}$/;
     var formatoDDMMYYYY2 = /^\d{2}\/\d{1}\/\d{4}$/;
     if (formatoDDMMYYYY.test(fechaString) || formatoDDMMYYYY2.test(fechaString)) {
       return fechaString;
     }
     // Intenta parsear la fecha en formato predeterminado
     var fechaPredeterminada = new Date(fechaString);
     if (!isNaN(fechaPredeterminada.getDate())) {
       var diaPredeterminado = fechaPredeterminada.getDate();
       var mesPredeterminado = fechaPredeterminada.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11 en JavaScript
       var anioPredeterminado = fechaPredeterminada.getFullYear();

       return diaPredeterminado + '/' + (mesPredeterminado < 10 ? '0' : '') + mesPredeterminado + '/' + anioPredeterminado;
     }

     // Si no se pudo parsear en ninguno de los formatos, devuelve null
     return null;
  };



}
exports.handler = async function(event, context) {
  const reserva = JSON.parse(event.body);

  // Por ahora, solo mostramos en consola
  console.log("Reserva recibida:", reserva);

  return {
    statusCode: 200,
    body: JSON.stringify({ mensaje: "Reserva recibida correctamente" })
  };
};

// Barra de búsqueda *********************************************************************************************************************************************
function buscarProducto() {
  const nombreProductoBuscado = document
    .getElementById("producto-buscado")
    .value.toUpperCase()
    .trim();
  const productosEncontrados = productos.filter((producto) => {
    return producto.nombre.toUpperCase().match(nombreProductoBuscado);
  });

  generarCardsHTML(productosEncontrados);
}

// Ejecuto búsqueda de productos **********************************************************************************************
const imputBusqueda = document.getElementById("producto-buscado");

imputBusqueda.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("boton-buscar").click();
  }
});

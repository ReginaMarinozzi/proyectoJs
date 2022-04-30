// Traigo el valor en storage del carrito de productos.***********************************************************

let carrito = validarStorageCarrito();
let precioTotal = 0;

// Actualizo el total del carrito en función de los items agregados. *********************************************

const totalCarrito = (arrayCarrito) => {
  precioTotal = 0;
  arrayCarrito.forEach((producto) => {
    precioTotal += producto.cantidadEnCarrito * producto.precio;
  });
};

totalCarrito(carrito);

// ************************************* DECLARO LAS FUNCIONES **************************************************
// **************************************************************************************************************

// Inicio el carrito y compruebo si hay un carrito previamente guardado en el storage local *********************

function validarStorageCarrito() {
  if (localStorage.getItem("carrito") != null) {
    const storageProductos = JSON.parse(localStorage.getItem("carrito"));
    return storageProductos;
  } else {
    return [];
  }
}

// // Actualizo la cantidad de items en el HTML del carrito en base a la cantidad de items en mi array de carrito.****************

let acumuladorItems = 0;

const actualizarItemsCarrito = (arrayCarrito) => {
  acumuladorItems = 0;
  arrayCarrito.forEach((producto) => {
    acumuladorItems += producto.cantidadEnCarrito;
  });
  document.getElementById("cantidad-carrito").innerHTML = acumuladorItems;
};

actualizarItemsCarrito(carrito);

function agregarAlCarrito(idProducto) {
  const productoEnCarrito = carrito.find(
    (producto) => producto.id == idProducto
  );
  const productoEnCatalogo = productos.find(
    (producto) => producto.id == idProducto
  );

  const productoParaAgregar = productoEnCarrito || productoEnCatalogo;

  if (productoParaAgregar.stock > productoParaAgregar.cantidadEnCarrito) {
    // ¿hay stock?
    productoParaAgregar.cantidadEnCarrito++;
    productoEnCarrito == undefined && carrito.push(productoParaAgregar);
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage **************************************
    actualizarItemsCarrito(carrito);

    // Sweet alert anunciando el producto que se acaba de agregar al carrito ***********************************************************
    swal({
      title: `Agregaste ${productoEnCatalogo.nombre} a tu carrito`,
      text: "Ya casi es tuyo!",
      icon: "success",
      button: "Continuar comprando!",
    });
  } else {
    // Sweet alert anunciando el producto que se acaba de agregar al carrito *********************************************************
    swal({
      title: `No hay stock del producto ${productoEnCatalogo.nombre}`,
      text: "Lo sentimos!",
      icon: "error",
      button: "Continuar comprando!",
    });
  }
}

function reducirCarrito(idProducto) {
  const productoARemover = carrito.find(
    (producto) => producto.id == idProducto
  );

  if (productoARemover.cantidadEnCarrito > 1) {
    productoARemover.cantidadEnCarrito--;
    productoARemover.cantidadEnCarrito == 0 &&
      carrito.splice(carrito.indexOf(productoARemover), 1);
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage **************************************
    actualizarItemsCarrito(carrito);
  }
}

function quitarCarrito(idProducto) {
  const productoARemover = carrito.find(
    (producto) => producto.id == idProducto
  );
  productoARemover.cantidadEnCarrito = 0;
  carrito.splice(carrito.indexOf(productoARemover), 1);
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage *******************************************
  actualizarItemsCarrito(carrito);
}

function detalleProducto(idProducto) {
  let detalleTitulo = ``;
  let detalleDescripcion = ``;
  const productoEnCatalogo = productos.find(
    (producto) => producto.id == idProducto
  );

  // Actualizo titulo de la ventana del modal ****************************************************************************

  detalleTitulo += `Descripción detallada del producto`;
  document.getElementById("staticBackdropLabel").innerHTML = detalleTitulo;

  // Actualizo descripción del producto en el modal ***********************************************************************

  detalleDescripcion += `<!-- Product section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${productoEnCatalogo.imagen}" alt="..." /></div>
                <div class="col-md-6">
                    <h1 class="display-5 fw-bolder">${productoEnCatalogo.nombre}</h1>
                    <div class="fs-5 mb-5">
                        <span> Categoría: ${productoEnCatalogo.categoria}</span>
                    </div>
                    <p class="lead">${productoEnCatalogo.descripcion}</p>
                </div>
            </div>
        </div>
    </section>
    `;
  document.getElementById("descripcion-producto").innerHTML =
    detalleDescripcion;
}

// **********************************************************************************
// Array de productos ***************************************************************

const productos = [
  {
    id: 1,
    titulo: "Sofá Amalfi ",
    precio: 87490,
    stock: 2,
    imagen: "https://i.ibb.co/6ZLhwbj/1.jpg",
  },
  {
    id: 2,
    titulo: "Sofá Capri ",
    precio: 85390,
    stock: 4,
    imagen: "https://i.ibb.co/0j1YT76/2.jpg",
  },
  {
    id: 3,
    titulo: "Sofá Praga ",
    precio: 94490,
    stock: 3,
    imagen: "https://i.ibb.co/ypYdj6r/3.jpg",
  },
  {
    id: 4,
    titulo: "Sofá Roma",
    precio: 104990,
    stock: 5,
    imagen: "https://i.ibb.co/1rnS5cw/4.jpg",
  },
  {
    id: 5,
    titulo: "Sofá Oxford ",
    precio: 115490,
    stock: 0,
    imagen: "https://i.ibb.co/yyDw1tk/5.jpg",
  },
  {
    id: 6,
    titulo: "Sofá Londres",
    precio: 136490,
    stock: 8,
    imagen: "https://i.ibb.co/2kN1CNm/6.jpg",
  },
  {
    id: 7,
    titulo: "Sofá Manchester",
    precio: 97990,
    stock: 7,
    imagen: "https://i.ibb.co/XpQkj3M/7.jpg",
  },
  {
    id: 8,
    titulo: "Sofá barcelona",
    precio: 86090,
    stock: 2,
    imagen: "https://i.ibb.co/KNTfch5/8.jpg",
  },
];


// Llamada a la función para generar la cards ****************************************

cardsGeneradas(productos);

// **********************************************************************************
// Declaración de funciones *********************************************************

// Agregar productos al carrito y actualizar la cantidad ****************************

const agregarAlCarrito = (idProducto) => {

    // Buscar el producto a agregar 
    const productoCarrito = productos.find(producto => producto.id === idProducto);

    // Envío el producto al array de carrito 
    carrito.push(productoCarrito);

    // Actualizando el storage del carrito 
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizo la cantidad de items en el HTML del carrito 
    document.getElementById("boton-comprar").innerHTML = carrito.length;
}

// Generar cards de productos ************************************************

function cardsGeneradas(productosAMostrar) {
    let acumuladorCards = ``;
    productosAMostrar.forEach(producto => {
        acumuladorCards += `<div class="card h-100">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Oferta</div>
        <!-- Imagen del producto -->
        <img class="card-img-top" src="${producto.imagen}" alt="..." />
        <!-- Detalles del producto -->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Nombre del procuto -->
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Precio del producto-->
                $ ${producto.precio}
            </div>
        </div>
        <!-- Acciones en el proucto -->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <button 
            onclick="agregarAlCarrito(${producto.id})"
            class="btn btn-outline-dark mt-auto" href="#">
            Agregar al carrito
            </button>
            </div>
        </div>
    </div>`
    })
    agregarCardsEnHTML(acumuladorCards);
}

// Insertar cards en el HTML ****************************************************************

function agregarCardsEnHTML(cards) {
    document.getElementById("cards-productos").innerHTML = cards;
};

// Buscar productos ************************************************************************

function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    cardsGeneradas(productosEncontrados);
}

// Ejecutar búsqueda cuando presione enter en barra de búsqueda *******************************

const imputBusqueda = document.getElementById("producto-buscado");

imputBusqueda.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("boton-buscar").click();
    }
});


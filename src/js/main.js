// **********************************************************************************
// Array de productos ***************************************************************

const productos = [
  {
    id: 1,
    titulo: "Sofá Amalfi ",
    precio: 87490,
    stock: 2,
    imagenes: "./src/img/1.jpeg"
  },
  {
    id: 2,
    titulo: "Sofá Capri ",
    precio: 85390,
    stock: 4,
    imagenes: "./src/img/2.jpeg"
  },
  {
    id: 3,
    titulo: "Sofá Praga ",
    precio: 94490,
    stock: 3,
    imagenes: "./src/img/3.jpeg"
  },
  {
    id: 4,
    titulo: "Sofá Roma",
    precio: 104990,
    stock: 5,
    imagenes: "./src/img/4.jpeg"
  },
  {
    id: 5,
    titulo: "Sofá Oxford ",
    precio: 115490,
    stock: 0,
    imagenes: "./src/img/5.jpeg"
  },
  {
    id: 6,
    titulo: "Sofá Londres",
    precio: 136490,
    stock: 8,
    imagenes: "./src/img/6.jpeg"
  },
  {
    id: 7,
    titulo: "Sofá Manchester",
    precio: 97990,
    stock: 7,
    imagenes: "./src/img/7.jpeg"
  },
  {
    id: 8,
    titulo: "Sofá barcelona",
    precio: 86090,
    stock: 2,
    imagenes: "./src/img/8.jpeg"
  },
];

// Array de productos ***************************************************************

const carrito = [];

// **********************************************************************************
// Dom ******************************************************************************
generarCards(productos);

function generarCards(productosAMostrar){
    let infoDeCards = ``;
    productosAMostrar.forEach((productos) => {
        infoDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(productos.stock > 0) ? 'Tenemos stock' : 'Out of stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${productos.imagenes}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${productos.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"></span>$${productos.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="agregarAlCarrito(${productos.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(infoDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("cards-productos").innerHTML = cards;
};

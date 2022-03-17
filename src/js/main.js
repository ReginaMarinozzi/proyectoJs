// **********************************************************************************
// Array de productos ***************************************************************

const productos = [
  {
    id: 1,
    titulo: "Sofá Amalfi ",
    precio: 87490,
    stock: 2,
  },
  {
    id: 2,
    titulo: "Sofá Capri ",
    precio: 85390,
    stock: 4,
  },
  {
    id: 3,
    titulo: "Sofá Praga ",
    precio: 94490,
    stock: 3,
  },
  {
    id: 4,
    titulo: "Sofá Roma",
    precio: 104990,
    stock: 5,
  },
  {
    id: 5,
    titulo: "Sofá Oxford ",
    precio: 115490,
    stock: 0,
  },
  {
    id: 6,
    titulo: "Sofá Londres",
    precio: 136490,
    stock: 8,
  },
  {
    id: 7,
    titulo: "Sofá Manchester",
    precio: 97990,
    stock: 7,
  },
  {
    id: 8,
    titulo: "Sofá barcelona",
    precio: 86090,
    stock: 2,
  },
];

// Array de productos ***************************************************************

const carrito = [];

//Declaro variables *****************************************************************

let total = 0;
let comprar;

// **********************************************************************************
// Pregunto que productos quiere agregar al carrito a travez de promt ***************

do {
  const seleccionProducto =
    prompt(`Ingrese el número correspondiente al carrito producto que desea agregar al carrito:
    1. ${productos[0].titulo}
    2. ${productos[1].titulo}
    3. ${productos[2].titulo}
    4. ${productos[3].titulo}
    5. ${productos[4].titulo}
    6. ${productos[5].titulo}
    7. ${productos[6].titulo}
    8. ${productos[7].titulo}
    `);

  switch (seleccionProducto) {
    case "1":
      agregarAlCarrito(productos[0]);
      alert(
        `Agregaste a tu carrito ${productos[0].titulo}`
      );
      total += productos[0].precio;
      break;
    case "2":
      agregarAlCarrito(productos[1]);
      alert(
        `Agregaste a tu carritos ${productos[1].titulo}`
      );
      total += productos[1].precio;
      break;
    case "3":
      agregarAlCarrito(productos[2]);
      alert(
        `Agregaste a tu carrito ${productos[2].titulo}`
      );
      total += productos[2].precio;
      break;
    case "4":
      agregarAlCarrito(productos[3]);
      alert(
        `Agregaste a tu carrito ${productos[3].titulo}`
      );
      total += productos[3].precio;
      break;
    case "5":
      agregarAlCarrito(productos[4]);
      alert(
        `Agregaste a tu carrito ${productos[4].titulo}`
      );
      total += productos[4].precio;
      break;
    case "6":
      agregarAlCarrito(productos[5]);
      alert(
        `Agregaste a tu carrito ${productos[5].titulo}`
      );
      total += productos[5].precio;
      break;
    case "7":
      agregarAlCarrito(productos[6]);
      alert(
        `Agregaste a tu carrito ${productos[6].titulo}`
      );
      total += productos[6].precio;
      break;
    case "8":
      agregarAlCarrito(productos[7]);
      alert(
        `Agregaste a tu carrito ${productos[7].titulo}`
      );
      total += productos[7].precio;
      break;
    default:
      alert(`La opción ingresada no es valida`);
  }

  comprar =
    prompt(`Ingrese opción 1 si desea seguir comprando u opción 2 si desea finalizar
    1. Si
    2. No
    `);
} while (comprar !== "2");
alert(`El total de su carrito es $ ${total}`);

carrito.forEach(producto => {
  console.log(producto.titulo)
}) 

// **********************************************************************************
// Declaración de funciones *********************************************************

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

// **********************************************************************************

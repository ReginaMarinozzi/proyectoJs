// Función constructura de productos **********************************************************************************************

class Producto {
  constructor(
    nombre,
    id,
    marca,
    categoria,
    descripcion,
    precio,
    stock,
    imagen,
    cantidadEnCarrito
  ) {
    this.nombre = nombre;
    this.id = id;
    this.marca = marca;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
    this.cantidadEnCarrito = cantidadEnCarrito;
  }
}

// Inventario de productos **********************************************************************************************

const Crema1 = new Producto(
  "VITAL IN JEJU TIME REPAIR SERUM",
  1,
  "Accoje",
  "Cremas",
  "Después de 7 días, la piel se nota radiante y joven. Después de utilizar un frasco, la piel se recupera más rápidamente y todos los signos clave de la juventud mejoran visiblemente.",
  5499,
  0,
  "https://i.ibb.co/fkL6cJb/accoje.jpg",
  0
);

const Crema2 = new Producto(
  "WRINKLE SMOOTHING SERUM SUPREME",
  2,
  "Clé de Peau",
  "Cremas",
  "Un suero antiarrugas clínicamente probado que aporta alta efectividad y resultados visibles. Reduce significantemente la aparición de arrugas a la vez que previene la creación de otras nuevas.",
  5399,
  30,
  "https://i.ibb.co/T40rC27/cledepeau.jpg",
  0
);

const Crema3 = new Producto(
  "CLEANSING FOAM",
  3,
  "Be Loved",
  "Cremas",
  "Su base levante suave, sin jabón, cierra los poros. El ácido glutámico reequilibra la producción de sebo. Rica en Agua termal de Avène: con propiedades calmantes y desensibilizantes. En el transcurso de los días, se restablece el equilibrio cutáneo. La piel recupera su sensación de piel limpia y de luminosidad",
  3799,
  20,
  "https://i.ibb.co/ngNNztM/beloved.jpg",
  0
);

const Crema4 = new Producto(
  "THE CLEAN LAB SEA SALT POWDER WAHS",
  4,
  "DEWYTREE",
  "Cremas",
  "Una sola dosis de esta loción refrescante se transforma en una espuma aérea y untuosa. Altamente concentrada en extracto de hojas de Té blanco de origen natural, perfecciona el desmaquillado, limpia y purifica la piel en profundidad mientras deja sobre ella una sensación refrescante. La piel queda libre de impurezas al instante, perfectamente limpia y aclarada. Tonificada y más fresca, la piel está llena de vida, bella de forma natural",
  2899,
  60,
  "https://i.ibb.co/9Ty7WG5/dewytree.jpg",
  0
);

const Crema5 = new Producto(
  "Dr. G GREEN LEVE UP SUNSCREAM SPF50",
  5,
  "Dr.G",
  "Cremas",
  "Aplicar 30 minutos antes de la exposición solar. Repetir con regularidad para mantener el nivel de protección: por lo menos una vez cada dos horas, después de cada baño y después de secarse con la toalla. Uso externo. Evitar el contorno de los ojos. En caso de contacto con los ojos, enjuagar inmediata y abundantemente.",
  7999,
  50,
  "https://i.ibb.co/6YzdpKj/drg.jpg",
  0
);

const Crema6 = new Producto(
  "STICK TONE UP",
  6,
  "Tone Up",
  "Cremas",
  "Evita paspaduras. La crema hidratante es una formula rica que mantiene la piel hidratada por 24h con la tecnología MVE y un toque aterciopelado que ayuda a restaurar la barrera protectora de la piel.",
  9499,
  10,
  "https://i.ibb.co/hm9zM5G/toneup.jpg",
  0
);

const Crema7 = new Producto(
  "EYE CREAM",
  7,
  "Shiseido",
  "Cremas",
  "Esta crema para el contorno de los ojos antienvejecimiento corrige visiblemente las arrugas en 1 semana. Trata seis tipos de arrugas de los ojos, incluidas las patas de gallo, los pliegues en el ángulo externo de los ojos, las arrugas debajo de los ojos, los pliegues del párpado, las líneas debajo de las bolsas y las arrugas por estrés entre las cejas. La piel queda tersa, elástica, con un brillo joven e hidratada por 48 horas. Con ReNeura Technology y KOMBU-Bounce Complex.",
  8999,
  60,
  "https://i.ibb.co/FmNvfGN/shiseido.jpg",
  0
);

const Crema8 = new Producto(
  "FACE CREAM",
  8,
  "The Lab",
  "Cremas",
  "El gesto hidratante indispensable para el confort de las pieles normales a secas. HYDRA BEAUTY Crème hidrata en profundidad y protege la piel de los radicales libres. Su textura fresca y untuosa se funde delicadamente revelando sutiles notas afrutadas.",
  3499,
  1,
  "https://i.ibb.co/MZJWbWD/thelab.jpg",
  0
);

const Perfume1 = new Producto(
  "CHANCE",
  9,
  "Chanel",
  "perfumes",
  "CHANCE EAU TENDRE, EAU DE TOILETTE VAPORIZADOR",
  14500,
  1,
  "https://i.ibb.co/SykNfk3/chance.jpg",
  0
);

const Perfume2 = new Producto(
  "CHLOE",
  10,
  "Chloé",
  "perfumes",
  "CHLOE ROSE TANGERINE EDT",
  13000,
  23,
  "https://i.ibb.co/kKbXTC6/chloe.jpg",
  0
);

const Perfume3 = new Producto(
  "COCO MADEMOISELLE",
  11,
  "Chanel",
  "perfumes",
  "EAU DE PARFUM FEMME",
  17000,
  58,
  "https://i.ibb.co/pyKp1k5/cocomad.jpg",
  0
);

const Perfume4 = new Producto(
  "LE PARFUM",
  12,
  "Elie Saab",
  "perfumes",
  "EAU DE PARFUM FEMME",
  16000,
  2,
  "https://i.ibb.co/VvX4QX5/elie.jpg",
  0
);

const Perfume5 = new Producto(
  "FLEUR MONOI",
  13,
  "Urban Outfitters",
  "perfumes",
  "EAU DE PARFUM FEMME",
  14000,
  29,
  "https://i.ibb.co/XZ7vjGj/fleurmonoi.jpg",
  0
);

const Perfume6 = new Producto(
  "SONGES",
  14,
  "Annick Goutal",
  "perfumes",
  "Nuevo Goutal, Songes Eau de Toilette Spray",
  18000,
  3,
  "https://i.ibb.co/sC38P6X/goutal.jpg",
  0
);

const Perfume7 = new Producto(
  "NARCISO POUDREE",
  15,
  "NARCISO RODRIGUEZ",
  "perfumes",
  "EAU DE PARFUM FEMME",
  20000,
  57,
  "https://i.ibb.co/6mNxSs0/narciso.jpg",
  0
);

const Perfume8 = new Producto(
  "YSL LIBRE INTENSE",
  16,
  "YSL",
  "perfumes",
  "EAU DE PARFUM FEMME",
  15000,
  0,
  "https://i.ibb.co/VBvFvsX/ysl.jpg",
  0
);

const Vela1 = new Producto(
  "Vela Atlanta",
  17,
  "Atlanta",
  "velas",
  "Vela de soja hecha a mano, de fragancia a duraznos, bergamota, notas de madera y flores. Tiene una duración de 45 horas prendida.",
  1600,
  20,
  "https://i.ibb.co/1MjXt6d/atlanta.jpg",
  0
);

const Vela2 = new Producto(
  "Vela Henry",
  18,
  "Clare Makes",
  "velas",
  "Vela de soja hecha a mano, de fragancia fresca florar y citrica. Tiene una duración de 45 horas prendida.",
  2100,
  2,
  "https://i.ibb.co/K5J0gkP/henry.jpg",
  0
);

const Vela3 = new Producto(
  "Vela Miles",
  19,
  "Clare Makes",
  "velas",
  "Vela de soja hecha a mano, de fragancia dulce de flores silvestres. Tiene una duración de 45 horas prendida.",
  2100,
  0,
  "https://i.ibb.co/Hqf29cW/miles.jpg",
  0
);

const Vela4 = new Producto(
  "Vela Moiya",
  20,
  "Clare Makes",
  "velas",
  "Vela de soja hecha a mano, de fragancia floral jazmin y rosas. Tiene una duración de 45 horas prendida.",
  2400,
  100,
  "https://i.ibb.co/5LzDHYX/moiya.jpg",
  0
);

const Vela5 = new Producto(
  "Vela Heaven Sent",
  21,
  "SEV",
  "velas",
  "Vela de soja hecha a mano, de fragancia suave aroma a coco. Tiene una duración de 45 horas prendida.",
  2000,
  60,
  "https://i.ibb.co/tpbT4t8/sev.jpg",
  0
);

const Vela6 = new Producto(
  "Vela Solar eclipse",
  22,
  "Clare Makes",
  "velas",
  "Vela de soja hecha a mano, de fragancia de atardecer con un suave aroma miel y romero. Tiene una duración de 45 horas prendida.",
  1700,
  80,
  "https://i.ibb.co/F5YmyF0/solar-eclipse.jpg",
  0
);

const Vela7 = new Producto(
  "Vela ",
  23,
  "Clare Makes",
  "velas",
  "Vela de soja hecha a mano, de fragancia dulce de flores silvestres. Tiene una duración de 45 horas prendida.",
  2800,
  20,
  "https://i.ibb.co/FD8LPrK/sundried.jpg",
  0
);

const Vela8 = new Producto(
  "Vela Tree oil",
  24,
  "Silcake",
  "velas",
  "Vela de soja hecha a mano, de fragancia dulces florales. Tiene una duración de 45 horas prendida.",
  2700,
  10,
  "https://i.ibb.co/nbZzSMG/treeoil.jpg",
  0
);

// Array de productos ****************************************************************************************

const productos = [
  Crema1,
  Crema2,
  Crema3,
  Crema4,
  Crema5,
  Crema6,
  Crema7,
  Crema8,
  Perfume1,
  Perfume2,
  Perfume3,
  Perfume4,
  Perfume5,
  Perfume6,
  Perfume7,
  Perfume8,
  Vela1,
  Vela2,
  Vela3,
  Vela4,
  Vela5,
  Vela6,
  Vela7,
  Vela8,
];

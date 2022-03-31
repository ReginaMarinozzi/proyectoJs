// Genero el listado de items en carrito
itemsGeneradas(carrito);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Generar items de productos
function itemsGeneradas(itemsAMostrar) {
    let acumuladorItems = ``;
    itemsAMostrar.forEach(producto => {
        acumuladorItems += `<!-- Comienzo descripción producto -->
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-md-3 text-left">
                        <img src="${producto.imagen}" alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                        <h4>${producto.titulo}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Price">$ ${producto.precio}</td>
            <td data-th="Quantity">
                <input type="number" class="form-control form-control-lg text-center" value="1">
            </td>
            <td class="actions" data-th="">
                <div class="text-right">
                    <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-plus h3"></i>
                    </button>
                    <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-dash h3"></i>
                    </button>
                    <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="bi bi-trash h3"></i>
                    </button>
                </div>
            </td>
        </tr>
        <!-- Fin descripción producto -->`
    })
    agregarItemsEnHTML(acumuladorItems);
}

// Insertar items en el HTML
function agregarItemsEnHTML(items) {
    document.getElementById("items-carrito").innerHTML = items;
};


///////////////////////////////////////////////////////////////////
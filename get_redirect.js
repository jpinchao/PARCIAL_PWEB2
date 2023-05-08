function eliminarVenta(id) {
    id=parseInt(id);
    let endPoint = 'http://127.0.0.1:8000/api/sales/' + id;
    fetch(endPoint, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    alert("Venta eliminada");
    location.reload();
}

function mostrarVentas(){
    let sales = document.getElementById("ventas");
    let endPoint = 'http://127.0.0.1:8000/api/sales';
    sales.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            sales.innerHTML += `
                    <tr>
                        <br>
                        <td><b>Identificador: </b> ${element.id}</td>
                        <br>
                        <td><b>Nombre del Vendedor: </b> ${element.nombre_vendedor}</td>
                        <br>
                        <td><b>Nombre del Cliente: </b> ${element.nombre_cliente}</td>
                        <br>
                        <td><b>Nombre del Producto: </b> ${element.nombre_producto}</td>
                        <br>
                        <td><b>Precio: </b> ${element.precio}</td>
                        <br>
                        <td><b>Fecha Compra: </b> ${element.fecha_compra}</td>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit" onclick="eliminarVenta(${element.id})">Eliminar</button></td>
                        <br>
                    </tr>
            `;
        });
    });
}
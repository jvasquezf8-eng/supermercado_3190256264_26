// Cargar carrito desde localStorage o iniciar vacío
let carrito_3190256264 = JSON.parse(localStorage.getItem('carrito_3190256264')) || [];

// Función para agregar productos al carrito
function agregarAlCarrito_3190256264(nombre, precio) {
  // Revisar si el producto ya existe
  let productoExistente = carrito_3190256264.find(item => item.nombre === nombre);
  
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito_3190256264.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }
  
  // Guardar en localStorage
  localStorage.setItem('carrito_3190256264', JSON.stringify(carrito_3190256264));
  actualizarContador_3190256264();
  alert(nombre + ' agregado al carrito');
}

// Actualizar el numerito del carrito en el menú
function actualizarContador_3190256264() {
  let total = carrito_3190256264.reduce((sum, item) => sum + item.cantidad, 0);
  let contador = document.getElementById('contador-carrito_3190256264');
  if (contador) contador.innerText = total;
}

// Mostrar productos en la página carrito
function mostrarCarrito_3190256264() {
  let tbody = document.getElementById('contenido-carrito_3190256264');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  let total = 0;
  
  if (carrito_3190256264.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px;">El carrito está vacío</td></tr>';
  } else {
    carrito_3190256264.forEach((item, index) => {
      let subtotal = item.precio * item.cantidad;
      total += subtotal;
      
      tbody.innerHTML += `
        <tr>
          <td>${item.nombre}</td>
          <td>Q${item.precio.toFixed(2)}</td>
          <td>${item.cantidad}</td>
          <td>Q${subtotal.toFixed(2)}</td>
          <td><button class="btn-eliminar_3190256264" onclick="eliminarProducto_3190256264(${index})">❌ Eliminar</button></td>
        </tr>
      `;
    });
  }
  
  document.getElementById('total-carrito_3190256264').innerText = 'Q' + total.toFixed(2);
}

// Eliminar producto individual
function eliminarProducto_3190256264(index) {
  if (confirm('¿Eliminar este producto del carrito?')) {
    carrito_3190256264.splice(index, 1);
    localStorage.setItem('carrito_3190256264', JSON.stringify(carrito_3190256264));
    mostrarCarrito_3190256264();
    actualizarContador_3190256264();
  }
}

// Vaciar carrito completo
function vaciarCarrito_3190256264() {
  if (confirm('¿Estás seguro de que quieres vaciar todo el carrito?')) {
    carrito_3190256264 = [];
    localStorage.setItem('carrito_3190256264', JSON.stringify(carrito_3190256264));
    mostrarCarrito_3190256264();
    actualizarContador_3190256264();
    alert('Carrito vaciado correctamente');
  }
}

// Al cargar la página, actualizar contador y mostrar carrito si estamos en esa página
document.addEventListener('DOMContentLoaded', function() {
  actualizarContador_3190256264();
  mostrarCarrito_3190256264();
}
)
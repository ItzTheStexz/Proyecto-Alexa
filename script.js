document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los botones de detalles
    const botonesDetalles = document.querySelectorAll('.boton-detalles');
  
    // Añadimos un evento de clic a cada botón para mostrar u ocultar los detalles
    botonesDetalles.forEach(function(boton) {
      boton.addEventListener('click', function() {
        // Seleccionamos el contenedor de detalles correspondiente
        const detalles = boton.previousElementSibling; // El div con la clase .detalles
  
        // Si los detalles están visibles, los ocultamos, si están ocultos, los mostramos
        detalles.classList.toggle('detalles-visible');
        
        // Cambiamos el texto del botón dependiendo del estado
        if (detalles.classList.contains('detalles-visible')) {
          boton.innerText = "Ocultar detalles";
        } else {
          boton.innerText = "Ver detalles";
        }
      });
    });
  
    // Función para agregar efectos visuales en el hover de las tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(function(tarjeta) {
      tarjeta.addEventListener('mouseenter', function() {
        tarjeta.style.transform = 'scale(1.05)';
        tarjeta.style.transition = 'transform 0.3s ease';
      });
      
      tarjeta.addEventListener('mouseleave', function() {
        tarjeta.style.transform = 'scale(1)';
      });
    });
  });
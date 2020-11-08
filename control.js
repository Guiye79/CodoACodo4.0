 document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('complete el  Usuario');
  return;
    }
  
  if(!usuario.includes("@")) {
    alert('utilice un @');
  return;
    }
   
  var clave = document.getElementById('clave').value;
  if (clave.length == 0) {
    
    alert('complete la clave');
    return;
  }
  this.submit();
}
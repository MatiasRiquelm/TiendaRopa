$(document).ready(function () {
  var clientes = [];
  var index = 0;

  function cargarClientes() {
    $.ajax({
      url: 'https://randomuser.me/api/?results=6',
      dataType: 'json',
      success: function (data) {
        clientes = data.results;
        var html = '';
        for (var i = 0; i < clientes.length; i++) {
          var nombre = clientes[i].name.first + ' ' + clientes[i].name.last;
          var email = clientes[i].email;
          var foto = clientes[i].picture.large;

          html += '<div class="cliente">';
          html += '<img src="' + foto + '">';
          html += '<h3>' + nombre + '</h3>';
          html += '<p>' + email + '</p>';
          html += '</div>';
        }
        $('.clientes').html(html);
        $('.cliente').hide().fadeIn(1000);
        var clientesPorFila = 3;
        var filas = Math.ceil(clientes.length / clientesPorFila);
        for (var i = 0; i < filas; i++) {
          var inicio = i * clientesPorFila;
          var fin = inicio + clientesPorFila;
          var fila = $('.cliente').slice(inicio, fin);
          setTimeout(function () {
            fila.fadeIn(1000);
          }, 5000 * i);
        }
      }
    });
  }

  function cambiarClientes() {
    index = (index + 1) % clientes.length;
    var inicio = index;
    var fin = inicio + 3;
    var fila = $('.cliente').slice(inicio, fin);
    $('.cliente').hide();
    setTimeout(function () {
      fila.fadeIn(1000);
    }, 1000);
  }

  cargarClientes();
  setInterval(cambiarClientes, 7000);
});

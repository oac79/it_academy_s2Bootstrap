$(document).ready(function () {
  $("#create-acount").click(function () {
    $("#modal-login").modal('toggle');
  });
  // ScrollReveal().reveal('.carousel');
  ScrollReveal().reveal('#title-section', { delay: 750});
  ScrollReveal().reveal('#cards', {delay: 1000});
  ScrollReveal().reveal('.footer', {delay: 750});
});
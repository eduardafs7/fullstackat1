$(document).ready(function () {
  //efeito de esconder formulário de cadastro
  $("#botao-cadastrar").click(function () {
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#botao-cadastrar").hide();
  });
  $("#voltar-login").click(function () {
    $("#form-cadastrar").slideUp("slow");
    $("#section-login").slideDown("slow");
    $("#botao-cadastrar").show();
  });

  //mostrar/ocultar senha
  $("#ver-senha").click(function () {
    var campo = $("#senha");
    var visivel = campo.attr("type") === "text";
    campo.attr("type", visivel ? "password" : "text");
    $(this).text(visivel ? "Mostrar" : "Ocultar");
  });

  //carrinho: botões Comprar
  $(".comprar").click(function () {
    carrinho++;
    $("#qtd-carrinho").text(carrinho);
    avisar($(this).data("produto") + " adicionado ao carrinho!");
  });

  //galeria: ampliar imagem no modal
  $("#section-galeria a").click(function () {
    $("#imagem-ampliada").attr("src", $(this).data("src"));
  });

  //botão Voltar ao topo só aparece após rolar a página
  $(window).scroll(function () {
    $("#voltar-topo").toggle($(this).scrollTop() > 300);
  });
});

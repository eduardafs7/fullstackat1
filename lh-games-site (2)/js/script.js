var carrinho = 0;

//efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

//aviso rápido (toast do Bootstrap)
function avisar(msg) {
  document.getElementById('aviso-texto').textContent = msg;
  bootstrap.Toast.getOrCreateInstance(document.getElementById('aviso'), { delay: 2500 }).show();
}

//Validação de Login
function login() {
  var usuario = document.getElementById('usuario').value.trim().toLowerCase();
  var senha = document.getElementById('senha').value.toLowerCase();
  var msg = document.getElementById('msg-login');
  if (usuario == "admin" && senha == "123456") {
    window.location = "index.html";
  } else {
    msg.textContent = "Acesso negado. Usuário ou senha incorretos.";
    msg.classList.remove('d-none');
  }
}

//Cadastro com validação
function cadastro() {
  var u = document.getElementById('novo-usuario').value.trim();
  var e = document.getElementById('email').value.trim();
  var s = document.getElementById('nova-senha').value;
  var msg = document.getElementById('msg-cadastro');
  var emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
  if (u === "" || !emailOk || s.length < 6) {
    msg.textContent = "Preencha o usuário, um e-mail válido e uma senha com no mínimo 6 caracteres.";
    msg.classList.remove('d-none');
    return;
  }
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}

//Busca
function buscar(ev) {
  ev.preventDefault();
  var t = document.getElementById('busca').value.trim();
  avisar(t ? 'Buscando por "' + t + '"...' : "Digite o que deseja buscar.");
  return false;
}

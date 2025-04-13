const botaoIniciar = document.getElementById('botaoIniciar');
const telaInicial = document.getElementById('telaInicial');
const telaMensagem = document.getElementById('telaMensagem');

botaoIniciar.addEventListener('click', () => {
  telaInicial.classList.remove('ativa');
  telaMensagem.classList.add('ativa');
});

const dataInicio = new Date(2023, 5, 16, 0, 0, 0); // 16 de junho de 2023
const tempoElemento = document.getElementById('tempoJuntos');

function atualizarTempo() {
  const agora = new Date();
  let segundos = Math.floor((agora - dataInicio) / 1000);

  const anos = Math.floor(segundos / (3600 * 24 * 365));
  segundos -= anos * 3600 * 24 * 365;

  const dias = Math.floor(segundos / (3600 * 24));
  segundos -= dias * 3600 * 24;

  const horas = Math.floor(segundos / 3600);
  segundos -= horas * 3600;

  const minutos = Math.floor(segundos / 60);
  segundos = segundos % 60;

  tempoElemento.textContent = `${anos} ano${anos !== 1 ? 's' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

const imagens = document.querySelectorAll('.fotos img');
let atual = 0;

setInterval(() => {
  imagens[atual].classList.remove('ativa');
  atual = (atual + 1) % imagens.length;
  imagens[atual].classList.add('ativa');
}, 4000);

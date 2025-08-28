const storyDiv = document.getElementById("story");
const startBtn = document.getElementById("startBtn");

function ask(question) {
  return new Promise((resolve) => {
    const box = document.createElement("div");
    box.className = "questionBox";
    box.innerHTML = `
      <p>${question}</p>
      <input type="text" class="answer">
      <button class="submitBtn">Enviar</button>
    `;
    storyDiv.appendChild(box);

    const input = box.querySelector(".answer");
    const btn = box.querySelector(".submitBtn");

    btn.addEventListener("click", () => {
      const val = input.value.trim();
      if (val !== "") {
        box.remove();
        resolve(val);
      }
    });
  });
}

async function main() {
  startBtn.style.display = "none";
  storyDiv.innerHTML = "";

  let nome = await ask("Olá viajante, qual é o seu nome?");
  storyDiv.innerHTML += `<p>Olá <b>${nome}</b>! É um ótimo nome... mas pelo que me parece você é muito mais incrível que qualquer pessoa que já conheci! 💖</p>`;

  let idade = await ask("Quantos anos você tem?");
  storyDiv.innerHTML += `<p>Nossa! Você já tem <b>${idade}</b> anos! Você me parece ser muito sábio(a)! 🌟</p>`;

  let data = await ask("Você se lembra do seu aniversário de namoro?");
  storyDiv.innerHTML += `<p>Uau! Então hoje é dia <b>${data}</b>! E eu tenho uma mensagem especial pra você, de uma tal de <b>Camily</b>... 💌</p>`;

  let pergunta = await ask("Você quer ler a mensagem?");
  if (pergunta.toLowerCase().includes("s")) {
    storyDiv.innerHTML += `
      <div class="mensagem">
        <h2>Mensagem da Camily 💌</h2>
        <p>Feliz aniversário de namoro, meu amor! Obrigada por estar ao meu lado nessa jornada maravilhosa. 
        Que a gente continue vivendo muitos momentos inesquecíveis juntos. Te amo demais! 💕</p>
      </div>
    `;
  } else {
    storyDiv.innerHTML += `<p>Talvez em outro momento... mas saiba que a mensagem sempre estará aqui esperando por você! ✨</p>`;
  }
}

startBtn.addEventListener("click", main);

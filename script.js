    const titulo = document.querySelector("#titulo");
    titulo.innerHTML = "Bem-Vindos ao Meu Perfil";


    const inputNome = document.querySelector('#input-nome');
    const btnAtualizar = document.querySelector('#btn-atualizar-nome');

    btnAtualizar.addEventListener('click', () => {
        console.log("Valor digitado:", inputNome.value);
        if (inputNome.value.trim() !== "") {
            titulo.textContent = inputNome.value;
        }
    });

    const paragrafo = document.querySelector('#descricao-perfil');
    paragrafo.innerHTML = "<strong>Bem-vindo ao sistema!</strong>";


    const foto = document.querySelector('#foto-perfil');
    foto.src = "4.png";
    foto.alt = "Nova imagem de perfil configurada via JS";


    const link = document.querySelector('#link-perfil');
    link.href = "https://youtube.com";
    link.textContent = "Se inscreva no meu canal";


    const btnMostrarInfo = document.querySelector('#btn-mostrar-informacoes');
    btnMostrarInfo.addEventListener('click', () => {
        console.log("Texto atual do título:", titulo.textContent);
        console.log("Texto atual do parágrafo:", paragrafo.textContent);
    });
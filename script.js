const LivrosEncontrados = [{
    id: 1,
    imagem: "https://images.hdqwalls.com/wallpapers/jujutsu-kaisen-sengaku-soran-4k-wz.jpg",
    titulo: "Jujutsu kaisen",
    autor: "Gege akutami",
    ano: 2020,
    disponivel: true
},
{
    id: 2,
    imagem: "https://images.wallpapersden.com/image/download/demon-slayer-team_a2xpbWeUmZqaraWkpJRpZW5rrWdoZW0.jpg",
    titulo: "Demon slayer",
    autor: "Koyoharu Gotouge",
    ano: 2016,
    disponivel: true
},
{

    id: 3,
    imagem: "https://teammanga.fr/wp-content/uploads/2022/09/Bleach_final_trailer.jpg",
    titulo: "Bleach",
    autor: "Tite kubo",
    ano: 2001,
    disponivel: true
},
{
    id: 4,
    imagem: "https://motionbgs.com/media/1948/naruto-and-sasuke-legends.jpg",
    titulo: "Naruto",
    autor: "Masashi Kishimoto",
    ano: 1999,
    disponivel: true
}];

function exibirLivros(LivrosEncontrados){
    
    const ResultadosBusca = document.getElementById("ResultadosBusca");

    LivrosEncontrados.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = "Autor: " + livro.autor;

        const ano = document.createElement("p");
        ano.textContent = "Ano: " + livro.ano;

        const status = document.createElement("p");
        status.classList.add("status");

        if(livro.disponivel){
            status.textContent = "Disponivel";
            status.classList.add("Disponivel");
        }else{
            status.textContent = "Indisponivel";
            status.classList.add("Indisponivel");
        }

        const botao = document.createElement("button");
        botao.textContent = "Reservar";
        botao.setAttribute("data-id", livro.id);

        if(!livro.disponivel){
            botao.disabled = true;
        }

        botao.addEventListener("click", () => {
            botao.textContent = "Reservado";
            botao.disabled = true;
            status.textContent = "indisponivel";
            status.classList.remove("disponivel");
            status.classList.add("indisponivel");
        });
        
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(ano);
        card.appendChild(status);
        card.appendChild(botao);
        ResultadosBusca.appendChild(card);
    });

}
exibirLivros(LivrosEncontrados);
const livrosEncontrados = [
    {
        id: 1,
        imagem: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/07/os-sertc3b5es-de-euclides-da-cunha-entenda-o-conflito-relatado-no-livro.png?w=1024",
        titulo: "Os Sertões",
        autor: "Euclides da Cunha",
        ano: 1902,
        disponivel: false
    },
    {
        id: 2,
        imagem: "https://m.media-amazon.com/images/I/71zOWBGEUGL.jpg",
        titulo: "Eu sou Malala",
        autor: "Malala Yousafzai",
        ano: 2013,
        disponivel: true
    },
    {
        id: 3,
        imagem: "https://m.media-amazon.com/images/I/91NL2ftnXML._AC_UF1000,1000_QL80_.jpg",
        titulo: "Contos Completos de Lima Barreto",
        autor: "Lima Barreto",
        ano: 1920,
        disponivel: false
    },
    {
        id: 4,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDJBC6K1M7x5MPIG2dU3Wp6ZHVbBGFsWRUA&s",
        titulo: "Turma da Mônica Jovem",
        autor: "Mauricio de Sousa",
        ano: 2008,
        disponivel: true
    }
];

function exibirLivros(livrosEncontrados) {

    const resultadosBuscar = document.getElementById("resultadosBusca");

    livrosEncontrados.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('livro-card');

        const img = document.createElement('img');
        img.setAttribute('src', livro.imagem);
        img.setAttribute('alt', livro.titulo);

        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;

        const autor = document.createElement('p');
        autor.classList.add('autor');
        autor.textContent = "Autor: " + livro.autor;

        const ano = document.createElement('p');
        ano.textContent = "Ano: " + livro.ano;

        const status = document.createElement('p');
        status.classList.add('status');

        if (livro.disponivel) {
            status.textContent = 'Disponível';
            status.classList.add('disponivel');
        } else {
            status.textContent = 'Indisponível';
            status.classList.add('indisponivel');
        }

        const btnReservar = document.createElement('button');
        btnReservar.textContent = 'Reservar';
        btnReservar.setAttribute('data-id', livro.id);
        
        if (!livro.disponivel) {
            btnReservar.disabled = true;
        }

        btnReservar.addEventListener('click', () => {
            btnReservar.textContent = 'Reservado!';
            btnReservar.disabled = true;
            btnReservar.classList.add('reservado');
            status.textContent = 'Reservado por você';
            status.classList.remove('disponivel');
            status.classList.add('reservado');
        });
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(ano);
        card.appendChild(status);
        card.appendChild(btnReservar);
 
        resultadosBuscar.appendChild(card);
    });
}
exibirLivros(livrosEncontrados);
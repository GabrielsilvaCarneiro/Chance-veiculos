
    // Obtém os elementos do DOM necessários
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const carItems = document.querySelectorAll('.car-item');

    // Função para filtrar os carros com base na pesquisa
    function filterCars() {
        const query = searchInput.value.toLowerCase();

        carItems.forEach(car => {
            const carName = car.querySelector('.car-details h2').textContent.toLowerCase();

            if (carName.includes(query)) {
                car.style.display = 'block'; // Mostra o carro se corresponder à pesquisa
            } else {
                car.style.display = 'none'; // Esconde o carro se não corresponder à pesquisa
            }
        });
    }

    // Adiciona um evento de clique no botão de busca
    searchButton.addEventListener('click', filterCars);

    // Adiciona um evento de teclado (enter) na barra de busca
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterCars();
        }
    });

    function verCarro(marca, modelo, descricao, preco, imagens, cidade, ano, combustivel, revisoes) {
        // Cria um objeto com os dados do carro
        const dadosCarro = {
            marca: marca,
            modelo: modelo,
            descricao: descricao,
            preco: preco,
            imagens: imagens,
            cidade: cidade,
            ano: ano,
            combustivel: combustivel,
            revisoes: revisoes
        };
    
        // Armazena os dados do carro no localStorage
        localStorage.setItem('dadosCarroSelecionado', JSON.stringify(dadosCarro));
    
        // Redireciona para a página de detalhes do carro
        window.location.href = 'Carro.html';
    }
    
    


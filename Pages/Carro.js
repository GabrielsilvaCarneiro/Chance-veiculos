// Função para fixar o card na rolagem
window.addEventListener('scroll', () => {
    const card = document.querySelector('.car-cardtwo');
    if (card) {
        const triggerPoint = card.offsetTop + 275;

        console.log('Trigger Point:', triggerPoint, 'ScrollY:', window.scrollY);

        card.classList.toggle('fixed', window.scrollY >= triggerPoint);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtém os dados do carro do localStorage
    const dadosCarro = JSON.parse(localStorage.getItem('dadosCarroSelecionado'));

    if (dadosCarro) {
        atualizarCarro(dadosCarro);
    }

    const carImages = document.querySelector('.car-images');
    const carImageWidth = document.querySelector('.Carrosel').clientWidth;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let index = 0;  // Inicia no índice 0
    const totalImages = carImages.children.length;

    function updateCarousel() {
        carImages.style.transform = `translateX(-${index * carImageWidth}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        index++;
        if (index >= totalImages) {
            index = 0; // Volta para a primeira imagem se o índice for maior ou igual ao total de imagens
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalImages - 1; // Volta para a última imagem se o índice for menor que zero
        }
        updateCarousel();
    });

    // Inicializa o carrossel para a primeira imagem
    updateCarousel();
});

function atualizarCarro(dados) {
    // Atualizar título do carro
    document.getElementById('car-title').innerHTML = `${dados.marca} <span class="x4-vermelho">${dados.modelo}</span>`;
    document.getElementById('car-subtitle').textContent = dados.descricao;

    // Atualizar preço do carro
    document.getElementById('car-price').textContent = `R$ ${dados.preco}`;

    // Atualizar título secundário do carro
    document.querySelector('.car-titletwo').innerHTML = `${dados.marca} <span class="x4-vermelho">${dados.modelo}</span>`;

    // Atualizar descrição secundária do carro
    document.getElementById('car-subtitletwo').textContent = dados.descricao;

    // Atualizar preços na seção de comparação de preços
    document.querySelector('.fipe-price').textContent = `R$ ${dados.preco}`;
    document.querySelector('.fipe-pricetwo').textContent = `R$ ${dados.preco}`;
    document.querySelector('.fipe-pricetre').textContent = `R$ ${dados.preco}`;

    // Atualizar imagens do carro
    const carImagesContainer = document.querySelector('.car-images');
    carImagesContainer.innerHTML = ''; // Limpar imagens atuais

    dados.imagens.forEach(imgSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.className = 'Carrosel';
        carImagesContainer.appendChild(imgElement);
    });

    // Atualizar outros detalhes do carro
    const detailColumn = document.querySelector('.detail-column');
    detailColumn.innerHTML = `
        <p><strong>Cidade:</strong> ${dados.cidade}</p>
        <p><strong>Ano:</strong> ${dados.ano}</p>
        <p><strong>Combustível:</strong> ${dados.combustivel}</p>
        <p><strong>Todas as revisões feitas pela concessionária:</strong> ${dados.revisoes}</p>
    `;
}

// Função para fixar o card na rolagem
window.addEventListener('scroll', () => {
    const card = document.querySelector('.car-cardtwo');
    if (card) {
        const triggerPoint = card.offsetTop + 275;

        console.log('Trigger Point:', triggerPoint, 'ScrollY:', window.scrollY);

        card.classList.toggle('fixed', window.scrollY >= triggerPoint);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtém os dados do carro do localStorage
    const dadosCarro = JSON.parse(localStorage.getItem('dadosCarroSelecionado'));

    if (dadosCarro) {
        atualizarCarro(dadosCarro);
    }

    const carImages = document.querySelector('.car-images');
    const carImageWidth = document.querySelector('.Carrosel').clientWidth;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let index = 0;  // Inicia no índice 0
    const totalImages = carImages.children.length;

    function updateCarousel() {
        carImages.style.transform = `translateX(-${index * carImageWidth}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        index++;
        if (index >= totalImages) {
            index = 0; // Volta para a primeira imagem se o índice for maior ou igual ao total de imagens
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalImages - 1; // Volta para a última imagem se o índice for menor que zero
        }
        updateCarousel();
    });

    // Inicializa o carrossel para a primeira imagem
    updateCarousel();
});



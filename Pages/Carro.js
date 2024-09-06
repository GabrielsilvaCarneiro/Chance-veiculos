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
            index = 0; 
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalImages - 1; 
        }
        updateCarousel();
    });


    updateCarousel();
});


function atualizarCarro(dados) {
    // Atualizar título do carro
    document.getElementById('car-title').innerHTML = `${dados.marca} <span class="x4-vermelho">${dados.modelo}</span>`;
    document.getElementById('car-subtitle').textContent = dados.descricao;

    // Atualizar preço do carro
    document.getElementById('car-price').textContent = `R$ ${dados.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    document.querySelector('.car-titletwo').innerHTML = `${dados.marca} <span class="x4-vermelho">${dados.modelo}</span>`;
   
    document.getElementById('car-subtitletwo').textContent = dados.descricao;


    
    // Atualizar imagens do carro
    const carImagesContainer = document.querySelector('.car-images');
    carImagesContainer.innerHTML = '';

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


    const fipePriceElement = document.querySelector('.fipe-price');
    const fipePriceValue = parseFloat(dados.preco); 

    if (!isNaN(fipePriceValue)) {
        const marketAverage = fipePriceValue * 1.15;
        const fipeValue = fipePriceValue * 1.10;

        document.querySelector('.fipe-price').textContent = `R$ ${fipePriceValue.toFixed(4)} `;
        document.querySelector('.fipe-pricetwo').textContent = `R$ ${marketAverage.toFixed(4)}`;
        document.querySelector('.fipe-pricetre').textContent = `R$ ${fipeValue.toFixed(4)}`;
    } else {
        console.error("O valor do preço anunciado não é um número válido.");
    }
}

window.addEventListener('scroll', () => {
    const card = document.querySelector('.car-cardtwo');
    if (card) {
        const triggerPoint = 475;  // Ponto em que o card se fixa
        const stopPoint = 1145;    // Ponto em que o card para de ser fixo

        const scrollY = window.scrollY;

        console.log('Trigger Point:', triggerPoint, 'ScrollY:', scrollY, 'Stop Point:', stopPoint);

        if (scrollY >= triggerPoint && scrollY <= stopPoint) {
            // Quando o scroll está entre o triggerPoint e o stopPoint, card fica fixo
            card.classList.add('fixed');
            card.style.position = 'fixed';
            card.style.top = '0';  // Mantém o card no topo da tela ao ser fixado
        } else if (scrollY > stopPoint) {
            // Ao passar do stopPoint, o card se "ancora" no final
            card.classList.remove('fixed');
            card.style.position = 'absolute';
            card.style.top = `${stopPoint}px`;  // Mantém o card na posição de parada
        } else if (scrollY < triggerPoint) {
            // Antes do triggerPoint, o card retorna à posição absoluta inicial
            card.classList.remove('fixed');
            card.style.position = 'absolute';
            card.style.top = '495px';  // Coloca o card na posição original
        }
    }

     // Função para formatar a data de nascimento (DD/MM/AAAA)
     const birthdateInput = document.getElementById('birthdate');
     birthdateInput.addEventListener('input', function() {
         let input = birthdateInput.value;
         input = input.replace(/\D/g, ''); // Remove caracteres não numéricos
         if (input.length <= 2) {
             input = input.replace(/^(\d{0,2})/, '$1');
         } else if (input.length <= 4) {
             input = input.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
         } else {
             input = input.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
         }
         birthdateInput.value = input;
     });
 
     // Função para formatar o CPF (XXX.XXX.XXX-XX)
     const cpfInput = document.getElementById('cpf');
     cpfInput.addEventListener('input', function() {
         let input = cpfInput.value;
         input = input.replace(/\D/g, ''); // Remove caracteres não numéricos
         if (input.length <= 3) {
             input = input.replace(/^(\d{0,3})/, '$1');
         } else if (input.length <= 6) {
             input = input.replace(/^(\d{3})(\d{0,3})/, '$1.$2');
         } else if (input.length <= 9) {
             input = input.replace(/^(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
         } else {
             input = input.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
         }
         cpfInput.value = input;
     });
 
     // Função para formatar o telefone (XX) XXXXX-XXXX
     const phoneInput = document.getElementById('phone');
     phoneInput.addEventListener('input', function() {
         let input = phoneInput.value;
         input = input.replace(/\D/g, ''); // Remove caracteres não numéricos
         if (input.length <= 2) {
             input = input.replace(/^(\d{0,2})/, '($1');
         } else if (input.length <= 7) {
             input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
         } else {
             input = input.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
         }
         phoneInput.value = input;
     });
    
});

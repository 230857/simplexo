const produto = {
    nome: 'Smartphone XYZ',
    descricao: 'Um smartphone incrível com câmera de alta resolução.',
    preco: 999.99,
};

// Forma simples para o título e descrição
document.getElementById('titulo').innerHTML += ` - ${produto.nome}`;
document.body.innerHTML += `<p>${produto.descricao}</p>`;

// Forma complexa para o preço
const produtoElemento = document.createElement('div');
produtoElemento.classList.add('produto');

const precoElemento = document.createElement('p');
precoElemento.innerText = `Preço: R$ ${produto.preco.toFixed(2)}`;

produtoElemento.appendChild(precoElemento);
document.body.appendChild(produtoElemento);

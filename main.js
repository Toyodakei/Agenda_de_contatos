const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha() {
    const inputNome = document.getElementById('inp-name');
    const inputTel = document.getElementById('inp-tel');

    if (nomes.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserida`)
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTel.value);

        
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    inputNome.value = '';
    inputTel.value = '';
    }



}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
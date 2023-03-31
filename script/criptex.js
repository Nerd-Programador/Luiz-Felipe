// Selecionando os elementos HTML que serão usados pelo JavaScript
var texto_entrada = document.querySelector('#input-texto'); // Caixa de entrada de texto
var texto_codificado = document.querySelector('#output'); // Caixa de saída de texto codificado

// Função para codificar o texto inserido pelo usuário
function codificar() {
    // Obtém o valor do texto inserido pelo usuário e converte para minúsculo
    let texto_code = texto_entrada.value.toLowerCase();

    // Define dois arrays: um para localizar as letras a serem substituídas e outro para as letras de substituição
    let achar = ['e', 'i', 'a', 'o', 'u'];
    let substituir = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    // Verifica se o texto inserido pelo usuário contém apenas espaços em branco
    if (texto_code.replace(/\s+/g, '') == '') {
        mensagemError(true); // Exibe mensagem de erro
    } else {
        // Percorre o array de localização e substitui cada letra correspondente pela letra de substituição correspondente
        for (let x = 0; x < achar.length; x++) {
            texto_code = texto_code.replaceAll(achar[x], substituir[x]);
        };

        // Define o valor da caixa de saída como o texto codificado
        texto_codificado.value = texto_code;
        mensagemError(false); // Oculta mensagem de erro, caso exista
    };
};

// Função para decodificar o texto inserido pelo usuário
function decodificar() {
    // Obtém o valor do texto inserido pelo usuário
    let texto = texto_entrada.value;

    // Define dois arrays: um para localizar as letras a serem substituídas e outro para as letras de substituição
    let achar = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    let substituir = ['e', 'i', 'a', 'o', 'u'];

    // Verifica se o texto inserido pelo usuário não está vazio
    if (!texto == '') {
        // Percorre o array de localização e substitui cada letra correspondente pela letra de substituição correspondente
        for (let x = 0; x < achar.length; x++) {
            texto = texto.replaceAll(achar[x], substituir[x]);
        };

        // Define o valor da caixa de saída como o texto decodificado
        texto_codificado.value = texto;
        mensagemError(false); // Oculta mensagem de erro, caso exista
    } else {
        mensagemError(true); // Exibe mensagem de erro
    };
};

// Função para copiar o texto da caixa de saída para a área de transferência
function copiarTexto() {
    var copyText = document.getElementById("output"); // Seleciona a caixa de saída
    copyText.select(); // Seleciona todo o texto na caixa de saída
    copyText.setSelectionRange(0, 99999); // Define o intervalo de seleção para abranger todo o texto
    document.execCommand("copy"); // Executa o comando de cópia
}

// Função para limpar as caixas de entrada e saída de texto
function limparTexto() {
    document.getElementById("input-texto").value = ""; // Limpa a caixa de entrada
    document.getElementById("output").value = ""; // Limpa a caixa de saída
}
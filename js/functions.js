//  Arrow Functions
var trocar = (element) => {
    element.innerHTML === 'Mostrar o link!' ? texto = 'Esconder o link!' : texto = 'Mostrar o link!';
    element.innerHTML = texto;
}

var carregaStatus = (element) => {
    switch (element.value) {
        case '1':
            document.getElementById("status").innerHTML = "<p>AP = 50 , AD = 10 , MS = 30 , MR = 30 , FR = 10</p>";
            break;
        case '2':
            document.getElementById("status").innerHTML = "<p>AP = 5 , AD = 60 , MS = 20 , MR = 10 , FR = 40</p>";
            break;
        case '3':
            document.getElementById("status").innerHTML = "<p>AP = 25 , AD = 25 , MS = 50 , MR = 15 , FR = 15</p>";
            break;
    }
}

var botao = () => {
    element = document.getElementById("thanks");
    element.innerHTML === '<p>Olha o meu GitHub!</p>' ? texto = '' : texto = '<p>Olha o meu GitHub!</p>';
    element.innerHTML = texto;
}

var load = () => { alert("Pagina carregada com Sucesso!"); }
var redirecionar = () => { window.open("https://github.com/Lucas-Dalamarta"); }
//  Functions used in HTML file
function botao() {
    if (document.getElementById("thanks").innerHTML === "<p>Olha o meu GitHub!</p>") {
        document.getElementById("thanks").innerHTML = "<p></p>";
    } else {
        document.getElementById("thanks").innerHTML = "<p>Olha o meu GitHub!</p>";
    }
    return;
}

function redirecionar() {
    window.open("https://github.com/Lucas-Dalamarta");
    return;
}

function trocar(element) {
    if (element.innerHTML === "Mostrar o link!") {
        element.innerHTML = "Esconder o link!";
    } else {
        element.innerHTML = "Mostrar o link!";
    }
    return;
}

function load() {
    alert("Pagina carregada com Sucesso!");
}

function carregaStatus(element) {
    if (element.value == "1") {
        document.getElementById("status").innerHTML = "<p>AP = 50 , AD = 10 , MS = 30 , MR = 30 , FR = 10</p>";
    } else if (element.value == "2") {
        document.getElementById("status").innerHTML = "<p>AP = 5 , AD = 60 , MS = 20 , MR = 10 , FR = 40</p>";
    } else if (element.value == "3") {
        document.getElementById("status").innerHTML = "<p>AP = 25 , AD = 25 , MS = 50 , MR = 15 , FR = 15</p>";
    }
}
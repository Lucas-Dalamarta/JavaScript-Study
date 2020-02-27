//  Functions used in HTML file
function    botao(){
    if(document.getElementById("thanks").innerHTML === "<p>Olha o meu GitHub!</p>"){
        document.getElementById("thanks").innerHTML = "<p></p>";
    }else{
        document.getElementById("thanks").innerHTML = "<p>Olha o meu GitHub!</p>";
    }
    return;
}

function    redirecionar(){
    window.open("https://github.com/Lucas-Dalamarta");
    return;
}

function    trocar(element){
    if(element.innerHTML === "Mostrar o link!"){
        element.innerHTML = "Esconder o link!";
    }else{
        element.innerHTML = "Mostrar o link!";
    }
    return;
}

function    load(){
    alert("Pagina carregada com Sucesso!");
}

function    carregaStatus(element){
    if(element.value == "1"){
        document.getElementById("status").innerHTML = "<p>AP = 50 , AD = 10 , MS = 30 , MR = 30 , FR = 10</p>";
    }else if(element.value == "2"){
        document.getElementById("status").innerHTML = "<p>AP = 5 , AD = 60 , MS = 20 , MR = 10 , FR = 40</p>";
    }else if(element.value =="3"){
        document.getElementById("status").innerHTML = "<p>AP = 25 , AD = 25 , MS = 50 , MR = 15 , FR = 15</p>";
    }
}

//  Function used as training , wont be shown in HTML
function    retornaJedi(Personagens){
    for(i in Personagens){
        if(Personagens[i].sabre === true){
            console.log(Personagens[i].nome + " é um Jedi , e sua idade é "+Personagens[i].idade+".");
        }else{
            console.log(Personagens[i].nome + " não é um Jedi.");
        }
    }
    return;
}

var Characthers = [{nome:"Luke",idade:23,sabre:false},{nome:"Yoda",idade:500,sabre:true},{nome:"Anakin",idade:"57",sabre:true},{nome:"Leia",idade:"23",sabre:false},{nome:"Rey",idade:"25",sabre:true}];
retornaJedi(Characthers);


function tocaSom (seletorAudio) { //recebo seletor
    const elemento = document.querySelector(seletorAudio); // coloco o querySelector para buscar o elemento

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado)
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    //console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
       
    }

    tecla.onkeydown = function (event) {

        console.log(event.code);           

        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


    //console.log(i);
}

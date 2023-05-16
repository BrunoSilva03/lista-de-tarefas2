function mostrarFormulario() {
    let displayForm = document.getElementById('formulario').style.display;

    if (displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block';
    }
    if (displayForm == '') {
        document.getElementById('formulario').style.display = 'block';
    }
    if (displayForm == 'block') {
        document.getElementById('formulario').style.display = 'none';
    }
}

function adicionarTarefa() {
    let tarefa = document.getElementById('idtarefa').value;
    let data = document.getElementById('iddata').value;
    let horario = document.getElementById('idhorario').value;

    if (tarefa == '' || data == '' || horario == '') {
        alert('Preencha todos os campos por favor!')
    } else {
        ocultaparagrafoinicial();
        insereTask(tarefa, data, horario);


    }

}

var contador = 0;
var numerodaDiv = [];

function insereTask(tarefa, data, horario) {
    let tasks = document.querySelector('div.tasks');
    tasks.style.marginTop = "0px";

    let novaTask = document.createElement('div');
    let id = document.createAttribute('id');
    /*let name = document.createAttribute('name');*/
    let classe = document.createAttribute('class');
    contador++;

    /*let cont = contador;*/
    id.value = 'div-' + contador;
    classe.value = 'div-' + contador;
    /*name.value = 'div-' + contador;*/

    //INTERESSANTE:
    numerodaDiv[contador] = id.value;

    novaTask.setAttributeNode(id);

    var divEspecifica = id.value;
    
   

    novaTask.style.background = "whitesmoke";
    novaTask.style.boxShadow = "3px 3px 3px green";
    novaTask.style.padding = "20px";
    novaTask.style.borderTop = "1px solid green";
    novaTask.style.marginTop = "0px";
    novaTask.innerHTML = `<p style="text-transform: uppercase; color: green">${tarefa}</p>
                         <p>DATA: ${data}</p>
                         <p>HORÁRIO: ${horario}</p>
                         <input style="color: white; background-color: #d82626; padding: 5px; border-radius: 5px; border-color: white;" type="button" name="botaoexcluir" id="${divEspecifica}" value="Excluir" onclick="excluirTask()">
                         <br>`

    
    
    mostrarFormulario();
    tasks.appendChild(novaTask);
    limpaCampos();
}

document.body.onclick = function() {
    console.log("CLICOU: " + event.target);
}

var testeDiv = document.getElementById('tasks');
testeDiv.addEventListener('click', function() {
    console.log("CLIQUE DE TESTE: " + this.id);
});


var area = window.document.querySelector('div.tasks');
area.addEventListener('click', clicouai);
area.addEventListener('mouseenter', entrou);
area.addEventListener('mouseout', saiu);
//tomar banho nessapoha

function clicouai() {
console.log("CLICOU");
}

function entrou() {
console.log("ENTROU");
}


function saiu() {
console.log("SAIU");
}


function excluirTask() {
    botao = document.querySelector('input[name="botaoexcluir"]').id;
    console.log("BOTÃO: " + botao)
    divEspecifica = botao;


    tasks = document.querySelector('div.tasks');
    removeTask = document.querySelector(`div#${divEspecifica}`)
    tasks.removeChild(removeTask);
}


function ocultaparagrafoinicial() {
    window.document.getElementById('paragrafoinicial').style.display = 'none';
}



function limpaCampos() {
    document.getElementById('idtarefa').value = '';
    document.getElementById('iddata').value = '';
    document.getElementById('idhorario').value = '';
}

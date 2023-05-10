function mostrarFormulario() {
    let displayForm = document.getElementById('formulario').style.display;

    if(displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block';
    }
    if(displayForm == '') {
        document.getElementById('formulario').style.display = 'block';
    }
    if(displayForm == 'block') {
        document.getElementById('formulario').style.display = 'none';
    }
}

function adicionarTarefa() {
    let tarefa = document.getElementById('idtarefa').value;
    let data = document.getElementById('iddata').value;
    let horario = document.getElementById('idhorario').value;

    if(tarefa == '' || data == '' || horario == '') {
        alert('Preencha todos os campos por favor!')
    } else {
        ocultaparagrafoinicial();
        insereTask(tarefa, data, horario);
        
        
    }

}

var contador = 0;

function insereTask(tarefa, data, horario) {
    let tasks = document.querySelector('div.tasks');
    tasks.style.marginTop = "0px";

    let novaTask = document.createElement('div');
    let id = document.createAttribute('id');
    contador++;

    id.value = 'div-' + contador;

    novaTask.setAttributeNode(id);

    novaTask.style.background = "whitesmoke";
    novaTask.style.boxShadow = "3px 3px 3px green";
    novaTask.style.padding = "20px";
    novaTask.style.borderTop = "1px solid green";
    novaTask.style.marginTop = "0px";
    novaTask.innerHTML = `<p style="text-transform: uppercase; color: green">${tarefa}</p>
                         <p>DATA: ${data}</p>
                         <p>HORÁRIO: ${horario}</p>
                         <input style="color: white; background-color: #d82626; padding: 5px; border-radius: 5px; border-color: white;" type="button" value="Excluir" onclick="excluirTask(tasks, novaTask)">
                         <br>`

    mostrarFormulario();
    tasks.appendChild(novaTask);
    limpaCampos();
}


function excluirTask(tasks, novaTask) {
    tasks.removeChild(novaTask);
}


function ocultaparagrafoinicial() {
    window.document.getElementById('paragrafoinicial').style.display = 'none';
}



function limpaCampos() {
    document.getElementById('idtarefa').value = '';
    document.getElementById('iddata').value = '';
    document.getElementById('idhorario').value = '';
}

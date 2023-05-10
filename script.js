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


function insereTask(tarefa, data, horario) {
    let tasks = document.querySelector('div.tasks');
    tasks.style.marginTop = "0px";
    
    let novaTask = document.createElement('div');
    novaTask.style.background = "whitesmoke";
    novaTask.style.boxShadow = "3px 3px 3px green";
    novaTask.style.padding = "20px";
    novaTask.style.borderTop = "1px solid green";
    novaTask.style.marginTop = "0px";
    novaTask.innerHTML = `<p style="text-transform: uppercase; color: green">${tarefa}</p>
                         <p>DATA: ${data}</p>
                         <p>HORÁRIO: ${horario}</p>
                         <br>`

    mostrarFormulario();
    tasks.appendChild(novaTask);
    limpaCampos();
}


function ocultaparagrafoinicial() {
    window.document.getElementById('paragrafoinicial').style.display = 'none';
}



function limpaCampos() {
    document.getElementById('idtarefa').value = '';
    document.getElementById('iddata').value = '';
    document.getElementById('idhorario').value = '';
}

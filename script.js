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
        let tasks = document.querySelector('div.tasks');
        let novaTask = document.createElement('div');
        novaTask.style.background = "whitesmoke";
        novaTask.innerHTML = `<p style="text-transform: uppercase; color: green">${tarefa}</p>
                             <p>DATA: ${data}</p>
                             <p>HORÁRIO: ${horario}</p>
                             <br>`
    
        mostrarFormulario();
        tasks.appendChild(novaTask);
        limpaCampos();
        
    }

}


function ocultaparagrafoinicial() {
    window.document.getElementById('paragrafoinicial').style.display = 'none';
}



function limpaCampos() {
    document.getElementById('idtarefa').value = '';
    document.getElementById('iddata').value = '';
    document.getElementById('idhorario').value = '';
}

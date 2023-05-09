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
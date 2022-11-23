function validar_campo_cadastro() {
    var nome_usuario = input_nome.value
    var email_usuario = input_email.value
    var senha_usuario = input_senha.value
    var repetir_senha = input_repetir_senha.value
    var cpf = input_cpf.value


    if (nome_usuario.length < 3) {
        alert('Preencha este campo corretamente');
        input_nome.style.borderColor = '#ff0000';

    }

    else if (email_usuario.indexOf('@') == -1 || email_usuario.indexOf('.') == -1) {
        alert('Preencha este campo corretamente');
        input_email.style.borderColor = '#ff0000';

    } else if (senha_usuario.length < 8) {
        alert('Sua senha precisa ter  pelo menos oito caracteres');
        input_senha.style.borderColor = '#ff0000';

    } else if (repetir_senha.length == 0) {
        input_repetir_senha.style.borderColor = 'rgb(255, 0, 0)';
        alert('Insira sua senha novamente');

    } else if (senha_usuario.length != repetir_senha.length) {
        input_repetir_senha.style.borderColor = 'rgb(255, 0, 0)';
        alert('Os campos não coincidem');

    } else if (cpf == "") {
        input_cpf.style.borderColor = 'rgb(255, 0, 0)';
        alert('Informe seu CPF para continuar');

    } else if (cpf.length < 11) {
        alert('Campo inválido');
        input_cpf.style.borderColor = '#ff0000';

    }



    else {
        input_cpf.style.borderColor = 'rgb (0, 255, 0)';
        input_email.style.borderColor = 'rgb (0, 255, 0)';
        input_nome.style.borderColor = 'rgb (0, 255, 0)';
        input_senha.style.borderColor = 'rgb (0, 255, 0)';
        input_repetir_senha.style.borderColor = 'rgb (0, 255, 0)';
        alert('Usuário Cadastrado com sucesso!');

    }

};


// Adiciona um evento de escuta para o envio do formulário
consultaForm.addEventListener("submit", function (event) {
    // Impede o comportamento padrão de envio do formulário
    //submit é disparado quando a pessoa usuária clica em um botão ( <button> ou <input type="submit">
    //addEventListener mostra que a função loginForm está submissa há um evento,(no caso, quando a pessoa clica em um button submit)
    //usamos o EventListener quando por exemplo, uma função acontece após um evento "click" de um botão, por exemplo, ela está submissa a ação
    event.preventDefault();
    //preventDefault serve para quebrar um evento EventListener, "finalizar"
    // Obtém os valores de nome de usuário e senha dos campos de entrada
    // Simula autenticação usando um arquivo JSON
    
    fetch("consultas.json")
    //fetch pega um dado (no caso, "user.json") e se a resposta for json, ela passa pelas condições abaixo
        .then((response) => response.json())
        //quando a resposta for json, a informação prossegue
        .then((data) => {
            // Procura por um usuário que corresponda a preenchida pelo usuario
            const user = data.find((user) => user.username == username_forms && user.password == password_forms);

            console.log(user);
            // Verifica se um usuário válido foi encontrado
            if (user) {
                    // validação do tipo de usuario
                    const userTipo = user.tipo;
                    console.log("Tipo de usuário: " + userTipo);

                    if(userTipo == "medico"){
                        // redirecionar para tela html de medico
                        window.location.href ="telamedico.html";
                    }

                    else if(userTipo == "administrador"){
                        // redirecionar para tela html de adm
                        window.location.href ="adm.html";
                    }
                    else{
                        // redirecionar para tela html de adm
                        window.location.href = "paciente.html";
                    }

                // Exibe uma mensagem de login bem-sucedido
                message.textContent = "Login bem-sucedido!";
                // Aqui utilizo javascript dentro do JS
                message.style.color = "green";
            } else {
                // Exibe uma mensagem de erro
                message.textContent = "Usuário ou senha incorretos.";
                message.style.color = "red";
            }
        });
});
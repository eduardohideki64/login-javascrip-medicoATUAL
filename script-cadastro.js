document.addEventListener("DOMContentLoaded", function () {
    const consultaForm = document.getElementById("usuarioForm");


    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault();


        // Obtém os valores do formulário
        const username = document.getElementById("usuarioo").value;
        const password = document.getElementById("senha").value;
        const tipo = document.getElementById("tipo").value;
       


        // Cria um objeto com os dados do usuário
        const consultaData = {
            username: username,
            password: password,
            tipo: tipo
  
        };


        // Envia os dados do formulário para o servidor
        fetch("/cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(consultaData)
        })
        .then(response => response.text())
        .then(msg => {
            console.log(msg);
            // Exibe uma mensagem para o usuário (por exemplo, em um elemento HTML)
            const messageElement = document.getElementById("msg");
            messageElement.textContent = msg;
        })
        .catch(error => {
            console.error(error);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const agendarForm = document.getElementById("agendarForm");

    agendarForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém os valores do formulário
        const paciente = document.getElementById("paciente").value;
        const dia = document.getElementById("dia").value;
        const hora = document.getElementById("hora").value;
        const medico = document.getElementById("select").value;

        // Cria um objeto com os dados do usuário
        const userData = {
            paciente: paciente,
            dia: dia,
            hora: hora,
            medico: medico
        };

        // Envia os dados do formulário para o servidor
        fetch("/agendar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
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


document.addEventListener("DOMContentLoaded", function () {
    // Carregar os dados do arquivo JSON (supondo que seu arquivo JSON).
    fetch("../users.json")
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById("select");
            const usernames = new Set(); // Usado para evitar nomes de médicos duplicados.

            // Loop através dos médicos e preenche o select com opções únicas.
            data.forEach(medico => {
                if (medico.tipo === "medico" && !usernames.has(medico.username)) {
                    const option = document.createElement("option");
                    option.value = medico.username;
                    option.textContent = medico.username;
                    select.appendChild(option);
                    usernames.add(medico.username);
                }
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os dados JSON: " + error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Carregar os dados do arquivo JSON (supondo que seu arquivo JSON).
    fetch("../users.json")
        .then(response => response.json())
        .then(data => {
            const usuario = document.getElementById("paciente");
            const usernames = new Set(); // Usado para evitar nomes de médicos duplicados.

            // Loop através dos médicos e preenche o select com opções únicas.
            data.forEach(paciente => {
                if (paciente.tipo === "paciente" && !usernames.has(paciente.username)) {
                    const option = document.createElement("option");
                    option.value = paciente.username;
                    option.textContent = paciente.username;
                    usuario.appendChild(option);
                    usernames.add(paciente.username);
                }
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os dados JSON: " + error);
        });
});

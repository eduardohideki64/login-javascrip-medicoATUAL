function verificarPaciente() {
    //recupera os pacientes do localStorage e converte para array
    var username = localStorage.getItem("varialvel");
    console.log(username);

    fetch("../agendar.json")
        .then((response) => response.json())
        .then(data => {
            data.forEach(agendar => {
                if(username == agendar.paciente){
                    const tr = document.createElement('tr');
                    const tdNome = document.createElement('td');
                    const tdData = document.createElement('td');
                    const tdMedico = document.createElement('td');
                    const tdObs = document.createElement('td');

                    tdNome.textContent = consulta.paciente;
                    tdData.textContent = consulta.dia;
                    tdMedico.textContent = consulta.hora;
                    tdObs.textContent = consulta.medico;

                    tr.appendChild(tdNome);
                    tr.appendChild(tdData);
                    tr.appendChild(tdMedico);
                    tr.appendChild(tdObs);

                    corpoTabela.appendChild(tr);
                }
                
            });
        })
}





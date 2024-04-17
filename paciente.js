
 // Função para carregar e exibir consultas a partir do JSON
 async function carregarConsultas() {
    try {
        const response = await fetch('agendar.json');
        const consultas = await response.json();
        exibirConsultas(consultas);
    } catch (error) {
        console.error('Erro ao carregar as consultas:', error);
    }
}

// Função para exibir consultas na tabela
function exibirConsultas(consultas) {
    
    const consultasTable = document.getElementById('consultasTable');
    const tbody = consultasTable.getElementsByTagName('tbody')[0];
    // Limpa a tabela antes de adicionar as novas consultas
    tbody.innerHTML = '';
    // Adiciona cada consulta à tabela
    consultas.forEach(consulta => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${consulta.dia}</td>
            <td>${consulta.hora}</td>
            <td>${consulta.paciente}</td>
            <td>${consulta.medico}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Chama a função para carregar e exibir as consultas ao carregar a página
window.onload = carregarConsultas;

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar o diretório onde seus arquivos estáticos estão localizados
app.use(express.static(path.join(__dirname)));

// Configurar a rota raiz ("/") para servir o arquivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Rota para processar o envio do formulário
app.post("/cadastro", (req, res) => {
    // Obtém os valores do formulário
    const { username, password, tipo } = req.body;

    // Lê o conteúdo do arquivo users.json
    fs.readFile("users.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro interno do servidor");
            return;
        }

        // Decodifica o JSON para um array associativo
        const usersArray = JSON.parse(data);

        // Adiciona os dados do novo usuário ao array existente
        usersArray.push({ username, password, tipo });

        // Codifica o array de usuários de volta para JSON com formatação bonita
        const usersJSON = JSON.stringify(usersArray, null, 2);

        // Sobrescreve o arquivo users.json com os dados atualizados
        fs.writeFile("users.json", usersJSON, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Erro interno do servidor");
                return;
            }

            // Envia uma resposta de sucesso
            res.status(200).send("Usuário cadastrado com sucesso!");
        });
    });
});





// Rota para processar o envio do formulário
app.post("/agendar", (req, res) => {
    // Obtém os valores do formulário
    const { paciente, dia, hora, medico } = req.body;

    // Lê o conteúdo do arquivo agendar.json
    fs.readFile("agendar.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro interno do servidor");
            return;
        }

        // Decodifica o JSON para um array associativo
        const Array = JSON.parse(data);

        // Adiciona os dados do novo usuário ao array existente
        Array.push({ paciente, dia, hora, medico });

        // Codifica o array de usuários de volta para JSON com formatação bonita
        const agendarJSON = JSON.stringify(Array, null, 2);

        // Sobrescreve o arquivo agendar.json com os dados atualizados
        fs.writeFile("agendar.json", agendarJSON, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Erro interno do servidor");
                return;
            }

            // Envia uma resposta de sucesso
            res.status(200).send("Consulta agendada com sucesso!");
        });
    });
});





app.listen(port, () => {
    console.log(`Servidor esta rodando no endereço 127.0.0.1:${port}`);
});
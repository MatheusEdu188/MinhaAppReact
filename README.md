# MinhaAppReact

Aplicação React que consome um conjunto de dados JSON extraído do Censo Escolar 2025.

## Estrutura

- `src/datasets/top30_pb.json` — dados gerados para as 30 IEs com mais matrículas na Paraíba.
- `src/pages/Home.jsx` — exibe os 3 principais registros em cards do Bootstrap.

## Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Extração de dados

O script Python que gera o JSON está localizado em `../CensoEsoclarDataApp/app.py`.

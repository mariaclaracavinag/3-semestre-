import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// GET usuários
router.get("/transacoes", async (req, res) => {
    try {
        const comando = `SELECT t.id_transacao,
        t.valor,
        t.descricao,
        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS nome_categoria,
        s.nome AS nome_sub_categoria
        FROM transacoes t 
        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
        `;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error("erro ao listar transacoes", error.message);
        return res.status(500).json({ error: "erro ao listar transacoes" });
    }
});

//listar transçoes por periodo
router.get("/transacoes/periodo", async (req, res) => {
    //requisição a apartir d uma query
    const {inicio,fim} = req.query
    try {
        if(!inicio || !fim){
            return res.status(400).json({message: 'informe as datas de inicio e fim '})
        }
        const comando = `SELECT t.id_transacao,
        t.valor,
        t.descricao,
        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS nome_categoria,
        s.nome AS nome_sub_categoria
        FROM transacoes t 
        LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
        LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
        WHERE t.dtataa_registro BETWEEN TO_DATE ($1 ,'DD/MM/YYYY')AND TO_DATE($2, 'DD/MM/YYYY')
        ORDER BY t.data_registro DESC
        `;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error("erro ao listar transacoes", error.message);
        return res.status(500).json({ error: "erro ao listar transacoes" });
    }
});

router.post('/transacoes', async (req, res) => {
    try {
        const {valor,descricao,data_registro,data_vencimento,data_pagamento,tipo,id_categoria,id_subcategoria } = req.body;

        const comando = `
        INSERT INTO transacoes 
        (valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;

        const valores = [valor,descricao,data_registro,data_vencimento,data_pagamento,tipo,id_categoria,id_subcategoria];

        await BD.query(comando, valores);

        return res.status(201).json("Transação cadastrada com sucesso.");
    } catch (error) {
        console.error('Erro ao cadastrar transação', error);
        return res.status(500).json({ error: 'Erro ao cadastrar transação' });
    }
});
router.put("/transacoes/:id_transacao", async (req, res) => {
    const { id_transacao } = req.params;
    const {valor,descricao,data_registro,data_vencimento,data_pagamento,tipo,id_categoria,id_subcategoria } = req.body;
    try {
        const verificartransacao = await BD.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificartransacao.rows.length === 0) {
            return res.status(404).json({ message: "transacao não encontrado" });
        }

        const comando = `  UPDATE transacoes SET 
      valor=$1 ,descricao=$2,data_registro=$3,data_vencimento=$4,data_pagamento=$5,tipo=$6,id_categoria=$7,id_subcategoria=$8
      WHERE id_transacao = $9
    `;

        const valores = [valor,descricao,data_registro,data_vencimento,data_pagamento,tipo,id_categoria,id_subcategoria, id_transacao];

        await BD.query(comando, valores);

        return res.status(200).json("transacao atualizado!");
    } catch (error) {
        console.error("Erro ao atualizar transacoes", error.message);
        return res.status(500).json({ error: "Erro ao atualizar transacoes" });
    }
});
router.patch("/transacoes/:id_transacao", async (req, res) => {
    const { id_transacao } = req.params;
    const {valor,descricao,data_registro,data_vencimento,data_pagamento,tipo,id_categoria,id_subcategoria} = req.body;

    try {
        const verificar = await BD.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ message: "Transação não encontrada" });
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (valor !== undefined) {
            campos.push(`valor = $${contador++}`);
            valores.push(valor);
        }

        if (descricao !== undefined) {
            campos.push(`descricao = $${contador++}`);
            valores.push(descricao);
        }

        if (data_registro !== undefined) {
            campos.push(`data_registro = $${contador++}`);
            valores.push(data_registro);
        }

        if (data_vencimento !== undefined) {
            campos.push(`data_vencimento = $${contador++}`);
            valores.push(data_vencimento);
        }

        if (data_pagamento !== undefined) {
            campos.push(`data_pagamento = $${contador++}`);
            valores.push(data_pagamento);
        }

        if (tipo !== undefined) {
            campos.push(`tipo = $${contador++}`);
            valores.push(tipo);
        }

        if (id_categoria !== undefined) {
            campos.push(`id_categoria = $${contador++}`);
            valores.push(id_categoria);
        }

        if (id_subcategoria !== undefined) {
            campos.push(`id_subcategoria = $${contador++}`);
            valores.push(id_subcategoria);
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo enviado" });
        }
        valores.push(id_transacao);

        const comando = `
            UPDATE transacoes
            SET ${campos.join(", ")}
            WHERE id_transacao = $${contador}
        `;

        await BD.query(comando, valores);

        return res.status(200).json({
            message: "Transação atualizada com sucesso"
        });

    } catch (error) {
        console.error("Erro ao atualizar transacao", error.message);
        return res.status(500).json({
            message: "Erro interno do servidor"
        });
    }
}); 
router.get('/transacoes/tipo/:tipo', async(req, res) =>{
    const {tipo} = req.params
    try{
        //cria uma variavel para enviar o comando sql
        const comando = `
                      SELECT
                        t.id_transacao,
                        t.valor,
                        t.descricao,
                        TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                        t.tipo,
                        c.nome AS nome_categoria,
                        s.nome AS nome_subcategoria
                    FROM transacoes t
                    LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                    LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                    WHERE t.tipo = $1
                    ORDER BY t.data_registro
                        `

        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando, [tipo]);

        //retorno para a pagina, o json com os dados
        //buscados do sql
       return res.status(200).json(transacoes.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({error: 'Erro ao listar transacoes'})
    }
})
  



export default router;
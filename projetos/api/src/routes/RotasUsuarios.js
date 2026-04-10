import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from "bcrypt";

const router = Router();

// GET usuários
router.get("/usuarios", async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios WHERE ativo = true ORDER BY id_usuario`;
        const usuarios = await BD.query(query);

        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error("erro ao listar usuarios", error.message);
        return res.status(500).json({ error: "erro ao listar usuarios" });
    }
});

// POST usuários
router.post("/usuarios", async (req, res) => {
    const { nome, email, senha, tipo_acesso } = req.body;

    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

        const comando = `
      INSERT INTO USUARIOS(nome, email, senha, tipo_acesso)
      VALUES($1, $2, $3, $4)
    `;
        const valores = [nome, email, senhaCriptografada, tipo_acesso];

        await BD.query(comando, valores);

        return res.status(201).json("Usuário cadastrado.");
    } catch (error) {
        console.error("Erro ao cadastrar usuários", error.message);
        return res.status(500).json({ error: "Erro ao cadastrar usuarios" });
    }
});

// PUT (atualização completa)
router.put("/usuarios/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo_acesso } = req.body;

    try {
        const verificarUsuario = await BD.query(
            `SELECT * FROM USUARIOS WHERE id_usuario = $1 AND ativo = true`,
            [id_usuario]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: "Usuario não encontrado" });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const comando = `
      UPDATE USUARIOS
      SET nome = $1, email = $2, senha = $3, tipo_acesso = $4
      WHERE id_usuario = $5
    `;

        const valores = [
            nome,
            email,
            senhaCriptografada,
            tipo_acesso,
            id_usuario,
        ];

        await BD.query(comando, valores);

        return res.status(200).json("Usuario atualizado!");
    } catch (error) {
        console.error("Erro ao atualizar usuarios", error.message);
        return res.status(500).json({ error: "Erro ao atualizar usuarios" });
    }
});

// PATCH (parcial)
router.patch("/usuarios/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo_acesso } = req.body;

    console.log('teste');
    

    try {
        const verificarUsuario = await BD.query(
            `SELECT * FROM USUARIOS WHERE id_usuario = $1`,
            [id_usuario]
        );

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: "Usuario não encontrado" });
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador++}`);
            valores.push(nome);
        }

        if (email !== undefined) {
            campos.push(`email = $${contador++}`);
            valores.push(email);
        }

        if (senha !== undefined) {
            const senhaCriptografada = await bcrypt.hash(senha, 10);
            campos.push(`senha = $${contador++}`);
            valores.push(senhaCriptografada);
        }

        if (tipo_acesso !== undefined) {
            campos.push(`tipo_acesso = $${contador++}`);
            valores.push(tipo_acesso);
        }

        if (campos.length === 0) {
            return res.status(400).json({ message: "Nenhum campo enviado" });
        }

        valores.push(id_usuario);
        

        const comando = `
      UPDATE USUARIOS
      SET ${campos.join(", ")}
      WHERE id_usuario = $${contador}
    `;

    console.log(valores, comando );

        await BD.query(comando, valores);

        return res.status(200).json("Usuario atualizado com sucesso");
    } catch (error) {
        console.error("Erro ao atualizar usuario", error.message);
        return res.status(500).json({ message: "erro interno do servidor" });
    }
});

// DELETE (soft delete)
router.delete("/usuarios/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const comando = `
      UPDATE USUARIOS SET ativo = false WHERE id_usuario = $1
    `;

        await BD.query(comando, [id_usuario]);

        return res.status(200).json({
            message: "Usuario desativado com sucesso",
        });
    } catch (error) {
        console.error("Erro ao desativar usuario", error.message);
        return res.status(500).json({ message: "erro interno do servidor" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            message: "email e senha são obrigatorios",
        });
    }

    try {
        const comando = `
      SELECT id_usuario, nome, email, senha
      FROM USUARIOS
      WHERE email = $1 AND ativo = true
    `;

        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({ message: "email nao encontrado" });
        }

        const usuario = resultado.rows[0];

        // 🔥 CORREÇÃO IMPORTANTE
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ message: "senha invalida" });
        }

        return res.status(200).json({
            message: "login realizado com sucesso",
            usuario: {
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
            },
        });
    } catch (error) {
        console.error("Erro no login", error.message);
        return res.status(500).json({ message: "erro interno do servidor" });
    }
});

export default router;
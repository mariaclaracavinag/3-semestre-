import jogador from '../Models/jogador.js'

//vetor de objetos de jogadors 
let listajogadores = [
    new jogador(1, "gabriel", "avançado", 95),
    new jogador(2, "gabriella", "Medio", 288),
    new jogador(3, "leticia", "Baixo", 300),

]

const jogadorController = {
    listar: (req, res) => {
        res.render('jogadors.ejs', { jogadores: listajogadores })
    },
    adicionar: (req, res) => {
        const { nome,nivel,pontuação} = req.body;

        try {
            //construindo um novo objeto atraves da classe jogador
            const novojogador = new jogador(
                listajogadores.length + 1,
                nome,
                nivel,
                Number(pontuação)
            );
            listajogadores.push(novojogador)
            res.redirect('/jogadores')
        } catch (e) {
            res.status(400).render('jogadores.ejs', { lista: listajogadores, erro: e.message })
        }
    }
}

export default jogadorcontroller
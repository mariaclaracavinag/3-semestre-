import jogador from '../Models/jogador.js'

//vetor de objetos de jogadors 
let listajogadores = [
    new jogador(1, "gabriel", "avançado", 95),
    new jogador(2, "gabriella", "Medio", 288),
    new jogador(3, "leticia", "Baixo", 300),

]

const Jogadorcontroller = {
    listar: (req, res) => {
        res.render('jogadores.ejs', { jogadores: listajogadores })
    },
    adicionar: (req, res) => {
        const { nome,nivel,pontuacao} = req.body;

        try {
            //construindo um novo objeto atraves da classe jogador
            const novojogador = new jogador(
                listajogadores.length + 1,
                nome,
                nivel,
                Number(pontuacao)
            );
            listajogadores.push(novojogador)
            res.redirect('/jogadores')
        } catch (e) {
            res.status(400).render('jogadores.ejs', { lista: listajogadores, erro: e.message })
        }
    },
        adicionarPontos: (req,res) => {
        const {id} = req.body;
        const jogador = listajogadores.find(l => l.id == Number(id))
        jogador.adicionarPontos();
        res.redirect('/jogadores');
    }
    }


export default Jogadorcontroller
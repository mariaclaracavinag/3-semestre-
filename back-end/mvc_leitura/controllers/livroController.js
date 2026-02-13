import Livro from '../Models/Livro.js'

//vetor de objetos de livros 
let listaLivros = [
    new Livro(1, "O Alienista", "machado de assis", 95),
    new Livro(2, "Dom casmurro", "machado de assis", 288),
    new Livro(3, "Harry poter e a pedra filosofal", "J.K Rowling", 300),

]

const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', { livros: listaLivros })
    },
    adicionar: (req, res) => {
        const { titulo, autor, paginas } = req.body;

        try {
            //construindo um novo objeto atraves da classe livro
            const novoLivro = new Livro(
                listaLivros.length + 1,
                titulo,
                autor,
                Number(paginas)
            );
            listaLivros.push(novoLivro)
            res.redirect('/livros')
        } catch (e) {
            res.status(400).render('livros.ejs', { lista: listaLivros, erro: e.message })
        }
    },
    //configurando o livro que foi lido 
    marcarComoLido: (req, res) => {
        const { id } = req.body;
        const livro = listaLivros.find(l => l.id === Number(id))
        livro.marcarComoLido();
        res.redirect('/livros');
    }
}

export default livroController
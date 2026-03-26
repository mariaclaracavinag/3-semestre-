import{estilos} from "../style/Estilos"
import { useState, useEffect } from "react"
import Aula11_produto from "./Aula11_produto"

const Aula11_cadastroprodutos = () => {
    const [listaProdutos, setListaProdutos] = useState ([
        {
            nome:"Boneca baby alive ",
            preco: 240,
            link: "https://www.google.com/aclk?sa=L&ai=DChsSEwivssWYvZqTAxVOWkgAHU5zEUwYACICCAEQARoCY2U&co=1&ase=2&gclid=CjwKCAjwyMnNBhBNEiwA-Kcgu0S4NHiDQkjtwnaSdQCFPUNVDI4WpFsHB2K-8oApON5ANmwpiZflIhoCN0QQAvD_BwE&cid=CAASWuRoEIPsoqL_N47sjhVPgZ-0iR-s5Wv7lDDT2g5He8RbaX5NjbWNJEQio8s3V91ZGWtTKW5kZ9rWyCtnnR9s1icQ_pKiR0JyO6HBhB4c314HoQSF87xGJGD2fQ&cce=2&category=acrcp_v1_32&sig=AOD64_1__k-lB-pYh_TvME0SYWGL1HM52w&ctype=46&q=&ved=2ahUKEwj9-r6YvZqTAxVULbkGHUONIPgQ9aACKAB6BAgJEBQ&adurl=", 
            imagem: "https://i.pinimg.com/736x/05/e4/30/05e43006e1e44eee8b727c89806ce5ca.jpg", 
            categoria: "brinquedos", 
            freteGratis: true

        },
        {
            nome:"kindle",
            preco: 500,
            link: "https://www.google.com/aclk?sa=L&ai=DChsSEwiCps74vZqTAxUVKEQIHU4uPCkYACICCAEQAxoCZHo&co=1&ase=2&gclid=CjwKCAjwyMnNBhBNEiwA-KcguwVzV9lbE0czQCfpm5_qoH8PURZnxnJR0qbDCSuB4hEBa-k-cUjSaRoC_8gQAvD_BwE&cid=CAASWuRoShnIu0FF3zRHk2BXujnuR8QxLwYxaMVw-mLZQDWg1o3A0IPorlFOLsCPFJhR0HBZ7h9hN1ZaGylFFvzsCFEpTMQI_7McJEVZKRkjNs4YYLcBzx1jjjbJkQ&cce=2&category=acrcp_v1_32&sig=AOD64_2O2JOJl-sExWfDl5q0LrnVz80t9g&ctype=5&q=&nis=4&ved=2ahUKEwj5uMX4vZqTAxUJGbkGHbZYDWYQ5bgDKAB6BAgIEBg&adurl=", 
            imagem: "https://i.pinimg.com/736x/60/2f/42/602f42a37724b8629a0e43f4556c047f.jpg", 
            categoria: "eletronicos", 
            freteGratis: false

        }
    ])
    const [nome, setnome] = useState ('')
    const [preco, setpreco] = useState ('')
    const [imagem, setimagem] = useState ('')
    const [link, setlink] = useState ('')
    const [categoria, setcategoria] = useState ('')
    const [freteGratis, setfreteGratis] = useState (false)

    function botaoAdicionar(){
        const novoProduto = {
            nome: nome,
            preco: preco,
            link:link,
            imagem: imagem, 
            categoria: categoria, 
            freteGratis: freteGratis
        }
        const novaListaProdutos = [...listaProdutos, novoProduto]
        setListaProdutos(novaListaProdutos)
        localStorage.setItem('vetorListaProdutos'.JSON.stringify(novaListaProdutos))

        setnome('')
        setpreco('')
        setlink('')
        setimagem('')
        setcategoria('')
        setfreteGratis('')
    }
    useEffect(() => {
       const listaSalva= localStorage.getItem('vetorListaProdutos') || "[]";
        setListaProdutos(JSON.parse(listaSalva))
    }, [])


    return (
         <div style={estilos.cardAula}> 
            <h1 style={estilos.titulo} > Cadastro de produtos </h1>
           <div style={estilos.cardLogin}>
                <input type="text" value={nome} onChange = {(event) => setnome (event.target.value)} placeholder="nome" style={estilos.input} /> 
                <input type="number" value={preco} onChange = {(event) => setpreco (event.target.value)} placeholder="preço" style={estilos.input}/> 
                <input type="url" value={imagem} onChange = {(event) => setimagem (event.target.value)} placeholder="URL da imagem" style={estilos.input}/> 
                <input type="text" value={link} onChange = {(event) => setlink (event.target.value)} placeholder="link do produto"style={estilos.input}/> 
                <select value={categoria} onChange = {(event) => setcategoria (event.target.value)}  style={estilos.input}>
                    <option> selecione uma categoria </option>
                    <option value='eletrônicos'> Eletronicos </option>
                    <option value='livros'> Livros </option>
                    <option value='comida'> comidas </option>
                </select>
                <input type="checkbox" checked={freteGratis} onChange = {(event) => setfreteGratis (event.target.value)} /><label> frete gratis </label>
                <button onClick={botaoAdicionar} style={estilos.botao} type="button"> Adicionar Produto </button>
                <hr/> 
                <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}> 
                    {
                listaProdutos.map ((produto,pos) => (
                   <Aula11_produto key={pos} produto={produto}/> 
                ))
            }  </div>
            </div>
        </div>
    )
}
export default Aula11_cadastroprodutos
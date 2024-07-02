import "./Mensagem.css";
function Mensagem(){
    const textoTitulo = "As batatas quando nascem se esparram pelo chão";
    const nomeAutor = "J. Almir";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo}</h2>
            <img src={linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, aut!
            </p>
            <small>Criado por: {nomeAutor} </small>

        </section>
    );
}

export default Mensagem;
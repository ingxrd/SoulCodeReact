import "./Mulheres.css";

function Mulheres(){
    const AdaLovelace = "Ada Lovelace";
    const AdaLovelaceImagem ="https://s2-techtudo.glbimg.com/XtrC_09PCNe8fjRvEmK2AMOAOPQ=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/j/X00R0WS22lOFjrfvQYgg/5f15f3509f331.jpeg";
    const GraceHopper = "Grace Hopper";
    const GraceHopperImagem ="https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg?itok=4HL3ETlO";
    const SilvanaBahia = "Silvana Bahia";
    const SilvanaBahiaImagem ="https://www.meioemensagem.com.br/wp-content/uploads/2023/10/Silvana-Bahia-Credito-Divulgacao-1.jpg";

    return (
        <section className="mulheres-corpo">
            <div className="boxAda">
            <h2 className="mulheres-titulo">{AdaLovelace}</h2>
            <img src={AdaLovelaceImagem} className ="imagem-mulheres" alt="pintura de Ada Lovelace"/>
            <p className="paragrafo">
            Ada Lovelace, nascida em 1815, é amplamente reconhecida como a primeira programadora da história. Colaborando com Charles Babbage no projeto da máquina analítica, ela escreveu o primeiro algoritmo destinado a ser processado por uma máquina, vislumbrando um futuro onde os computadores poderiam realizar mais do que simples cálculos matemáticos. Sua visão inovadora abriu caminhos para a programação moderna e continua a inspirar gerações de mulheres na tecnologia.
            </p>
            <small className="lercontinuar">Continuar... </small>
            </div>

            <div className="boxGrace">
            <h2 className="mulheres-titulo">{GraceHopper}</h2>
            <img src={GraceHopperImagem} className ="imagem-mulheres" alt="Grace Hopper de pé, em frente a um computador antigo"/>
            <p className="paragrafo">
            Grace Hopper, conhecida como a "Rainha da Computação", foi uma cientista da computação e contra-almirante da Marinha dos EUA. Ela desenvolveu o primeiro compilador para linguagens de programação e foi fundamental na criação do COBOL, uma das primeiras linguagens de programação de alto nível. Hopper também popularizou o termo "bug" para erros de software, deixando um legado duradouro na tecnologia.
            </p>
            <small className="lercontinuar">Continuar... </small>
            </div>

            <div className ="boxSilvana">
            <h2 className="mulheres-titulo">{SilvanaBahia}</h2>
            <img src={SilvanaBahiaImagem} className ="imagem-mulheres" alt="imagem de Silvana Bahia sorrindo"/>
            <p className="paragrafo">
            Silvana Bahia é uma destacada líder brasileira na tecnologia, conhecida por seu trabalho como diretora do Olabi, uma organização que promove a diversidade e a inclusão na tecnologia e inovação. Co-fundadora do PretaLab, um projeto que visa aumentar a participação de mulheres negras e indígenas no setor tecnológico, Silvana Bahia tem sido uma voz poderosa na luta pela equidade de gênero e raça, inspirando muitas mulheres a ingressarem no mundo da tecnologia e a alcançarem suas potencialidades.
            </p>
            <small className="lercontinuar">Continuar... </small>
            </div>

        </section>
    )
}

export default Mulheres;
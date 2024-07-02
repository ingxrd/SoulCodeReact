import "./header.css";

const imagemlogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Feminism_symbol.svg/1024px-Feminism_symbol.svg.png";
function Header() {
  return (
    <header className="header">
      <img src={imagemlogo} className="logo" alt="Logo do Blog" />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

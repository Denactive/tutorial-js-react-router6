import './header.css';

const HeaderComponent = () => (
  <nav className="header">
    <a href="/" className="header__logo">
      Логотип
    </a>
    <ul className="header__links">
      <li className="header__link header__link--active">
        <a href="/">Главная</a> 
      </li>
      <li className="header__link">
        <a href="/about">О нас</a>
      </li>
    </ul>
  </nav>
);

export default HeaderComponent;

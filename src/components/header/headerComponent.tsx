import {FC} from 'react';
import { Link } from 'react-router-dom';

import './header.css';

type HeaderNameLinksMapT<N extends string = string, L extends string = string> = {
  [key in N]: {
    headerSign: string;
    link: L;
  }
}

interface headerProps {
  headerLinksMap: HeaderNameLinksMapT,
  displayedNames: string[],
  nameOfActive: string,
}

/**
 * Универсальный компонент хедера.
 * Настраивается через конфиг.
 * @param headerLinksMap - карта соответствия: {
 *     headerSign: string;
 *     link: L;
 *  }
 *  @param displayedNames - массив тех ключей карты, которые будут отображаться
 *  @param nameOfActive - имя того ключа, который подствечивается как текущая страница
 */
const HeaderComponent: FC<headerProps> = ({headerLinksMap, displayedNames, nameOfActive}) => (
  <nav className="header">
    <a href="/" className="header__logo">
      Логотип
    </a>
    <ul className="header__links">
      {displayedNames.map((page, i) => (
        <li className={nameOfActive === page ? "header__link header__link--active" : "header__link"}>
          <Link to={headerLinksMap[page].link}>{headerLinksMap[page].headerSign}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderComponent;

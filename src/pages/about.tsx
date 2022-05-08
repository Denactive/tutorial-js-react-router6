import {FC} from 'react';
import RootPage from './rootPage';

const AboutPage: FC = () => {
  document.title='CoolRouter О нас';
  return (
    <RootPage nameOfActive='About'>
      <h1>О нас</h1>
        <ul>
          <li>Разработчик</li>
          <li>Javascript</li>
          <li>Контакты</li>
        </ul>
    </RootPage>
  )
}

export default AboutPage;

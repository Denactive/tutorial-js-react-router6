import Header from "../components/headerComponent";

const AboutPage = () => {
  document.title='CoolRouter О нас';
  return (
    <div className='page'>
      <Header />
      <div className='page__content'>
        <h1>О нас</h1>
        <ul>
          <li>Разработчик</li>
          <li>Javascript</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage;
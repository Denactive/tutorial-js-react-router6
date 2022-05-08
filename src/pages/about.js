import Header from "../components/headerComponent";

const AboutPage = () => {
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
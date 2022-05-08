const submitHandler = (e) => {
  e.preventDefault();
  console.log('submitHandler');
}


const AuthPage = () => {
  return (
    <div className='page'>
      <nav className="header">
        <a href="/" className="header__logo">
          Логотип
        </a>
      </nav>
      <div className='page__content'>
        <h1>Вход</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Логин"></input>
          <input type="password" placeholder="Пароль"></input>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage;
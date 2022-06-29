import styled from './Header.module.css';
import { WiMoonAltWaxingCrescent3, WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  //Состояние для темы
  const [theme, setTheme] = useState('light');

  //Обработчик событий для смены темы 
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('theme', theme)
  }, [theme])


  return (
    <header className={styled.header}>
      <div className={styled.wrapper}>

        <div className={styled.header__link}>
          <Link to='/' >Теория</Link>
        </div>

        <div className={styled.header__icon} onClick={changeTheme}>
          {theme === 'light'
            ? <WiMoonAltWaningCrescent5 size='30px' />
            : <WiMoonAltWaxingCrescent3 size='30px' fill='white' />}
        </div>
        
        <div className={styled.header__link}>
        <Link to='/list-tests' >Тестирование</Link>
        </div>

      </div>
    </header>
  )
}

export default Header
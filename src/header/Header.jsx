import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <p id='kino'>КИНО</p>
                <p id='online'>ОНЛАЙН</p>
            </div>
            <div className='buttons'>
                <button id='voyti'>ВОЙТИ</button>
                <button id='create'>СОЗДАТЬ<br />АККАУНТ</button>
            </div>
        </header>
    )
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom'
import back from '../../../assets/images/icons/ic_action_back.svg';
import Logo from '../../../assets/images/illustrations/logo_branca.svg';
import '../../LandPage/Header/Style/MenuMobile.scss'
export default function MenuMobile({ showMenu, setShowMenu }: { showMenu: Boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>>; }) {
    return (
        <div id='menu-mobile' className={`${showMenu ? "active" : "inative"}`}>
            <div className='container-img'>
                <img src={back} alt="voltar" id='back' onClick={() => { setShowMenu(!showMenu); }} />
                <img src={Logo} alt="Logo" id='logo' />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#banner-event" onClick={() => { setShowMenu(!showMenu); }}>Eventos</a>
                    </li>
                    <li>
                        <a href="#carousel" onClick={() => { setShowMenu(!showMenu); }}>Cursos</a>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => { setShowMenu(!showMenu); }}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

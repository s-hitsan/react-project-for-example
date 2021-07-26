import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import image__header from './image__header.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={image__header} />

            <div className={s.loginBlock}>
                {props.isAuth ? <div>
                    {props.login} - <button onClick={props.logout}>logout</button>
                </div>
                :<NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
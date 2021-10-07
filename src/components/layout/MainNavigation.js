import { useContext } from 'react';
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'; 

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li key='All Meetups'>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li key='Add New Meetup'>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li key='My favorites'>
                        <Link to='/favorites'>My favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;

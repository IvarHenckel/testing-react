import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    /*With useContext we get the context that we provided through the value prop.
    */
    const favoritesCtx = useContext(FavoritesContext);
    
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card >
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.action}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove Favorite' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
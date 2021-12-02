import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {}, // adding the functions here is not truly necessary it is simply for better automcompletion
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); //convention to start context with capital name

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    /*Component responsable for providing and updating these shared states.
    
    the type returned from creatContext() is a component which has .Provider built in as a subcomponent.
    And it needs to be wrapped around all the components that are  interested in the shared state.
    Since we use {props.children} we can simply wrap FavoritesContextProvider around them instead.
    
    Any updated values will be forwarded to all children and they will thus also be rerendered.*/

    function addFavoriteHandler(favoriteMeetup) {
        /*useState doesn't actually update directly instead it schedules updates.
        Therefore we should't do
        setUserFavorites(userFavorites.concat(favoriteMeetup));
        because userFavorite.concat may not be the actual value later when it's actually scheduled
        
        Instead we should send in a function if what we send depends on previous state.
        That function should take the previous state as parameter.*/
        setUserFavorites((prevUserFavorites) => {
           return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler, // adding the functions will expose them for use to other components that are interested
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
        {props.children}
        </FavoritesContext.Provider>
    );
}

/* useState only manages state for one component. 
Sometimes we want state for the complete program.
One solution is to use useState in a root component and propagate the value with props.
A better solution is React Contexts.*/

export default FavoritesContext; // note that we are exporting FavoritesContext and not the FavoritsContexProvider component that we created
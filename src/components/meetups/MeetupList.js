import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    /*The key prop works for all components, we do't need to do anything ourselves. 
    One of the very few special props.*/
    /*Note we could of course also just send in {meetup} to MeetupItem and destructure it there instead.*/
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => {
                return <MeetupItem 
                    key={meetup.id} 
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />; 
            })}
        </ul>
    );
}

export default MeetupList;
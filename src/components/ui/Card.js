import classes from './Card.module.css';


// The goal is to be able to wrap card around another component to achieve styling

/* props.children is a special prop which every componentrecieves by default.
If we don't use it here a wrapped around card will just swallow the content inside.
We want to output 'props.children' as well.*/
function Card(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default Card;
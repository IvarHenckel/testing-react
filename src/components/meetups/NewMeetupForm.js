import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';


function NewMeetupForm(props) {
    /*htmlFor is another case were we have html for but for is a keyword in JS so we need to change it-> htmlFor
    but this and className is basically the only ones.*/
    
    /*Note by defalt in HTML buttons without type="button" will submit the surrounding form.
    Submitting a form also by default sends a request to reload the page. We want to avoid that.
    With onSubmit={} we can run our own logic instead of the default.
    Also note that an event will be sent in by default to what is in the onSubmit. */
    const titleInputRef = useRef(); //gives us a ref we can use
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        /*Here we see the concept of references, we don't need to access DOM elements with JQueries.
        Instead we can use the ref prop which like the key prop is accessible on all elements out of the box. */
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required id="description" rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
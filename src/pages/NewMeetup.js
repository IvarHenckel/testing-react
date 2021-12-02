import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(props) {
    const history = useHistory();
    function onAddMeetupHandler(meetupData) {
        console.log(meetupData);
        // fetch(
        //     'https://someurl.com/',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(meetupData),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(() => {
            history.replace('/');
        // });
        
        /*fetch is just JS it's not react specifically and it sends a request to the given page.*/
        
        /*Normally we would want to send a request to some REST API to store this new meetup with a POST.
        The storing itself is handled by the server. He does this with firebase and inserts a suitable request http address in fetch()*/
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    );
}
  
export default NewMeetupPage;
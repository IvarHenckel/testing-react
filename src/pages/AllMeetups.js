import { useState, useEffect } from 'react';

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState(DUMMY_DATA);
    
        
    /*
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://someuri.com' //Get is default so this i all we need
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key] // basically merges key and the data korresponding to that key into one object
                };

                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(data); // Without useEffect this would be an infinite loop, we change state and when we change state with useState everything get's rerendered
        });
    }, []);
    
    First argument is the function which will be executed.

    Second argument will determine if we execute it again when the component function is evaluated.
    It will be checked if that argument is the same as the last time and if so not execute again.
    With an empty list like this we will always just execute once, the second time our list is the same.
    There is a simple rule: In this dependencies array we add all external values our effect function relies on.
         In this case there is no such data but it would be if we read some state or if we used something in props, in that case taht something should be in the array.

    In reality we would not use Dummy data. Instead we would send a request to some REST API to get some data.  
    With useEffect we can instead provide conditions when this code should run.
    */

    // if (isLoading) {
    //     return (
    //         <section>
    //             <p>Loading...</p>
    //         </section>
    //     );
    // }
    
    /*Note it works without the key prop but it is a general rule in react that all list items should have a unique key.
    
    Map is just like in Scala.
    
    first we had the following as a less flexible list        
    <ul>
        {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
        })}
    </ul>*/
    
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
    
}
  
export default AllMeetupsPage;


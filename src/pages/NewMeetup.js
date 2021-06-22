import { useHistory } from 'react-router-dom';

import { NewMeetupForm } from '../components/meetups/NewMeetupForm';

export const NewMeetupPage = () => {
    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch('https://react-getting-started-7afcc-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>
                New Meetup
            </h1>
            <NewMeetupForm onAddMeetup={ addMeetupHandler }/>
        </section>
    )
};
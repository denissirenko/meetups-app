import { useState, useEffect } from 'react';
import { MeetupList } from '../components/meetups/MeetupList';

export const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch('https://react-meetup-app-4e1f1-default-rtdb.firebaseio.com/meetups.json').then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);

      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>isLoading....</p>
      </section>
    )
  }

  return (
    <section>
        <h1>
            All Meetups
        </h1>
        <MeetupList meetups={ loadedMeetups } />
    </section>
)};
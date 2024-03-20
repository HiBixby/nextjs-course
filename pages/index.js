import MeetupList from "../components/meetups/MeetupList";
function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 5, 12345 Some City",
      description: "This is a first meetup!",
    },
    {
      id: "m2",
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 10, 12345 Some City",
      description: "This is a second meetup!",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;

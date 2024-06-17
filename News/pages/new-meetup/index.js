import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const handleAddMeetup = (data) => {
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}

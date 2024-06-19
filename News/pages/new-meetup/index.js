import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetup() {
  const router = useRouter();

  const handleAddMeetup = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      header: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}

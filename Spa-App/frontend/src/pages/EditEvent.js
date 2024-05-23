import { useParams } from "react-router-dom";

export default function EditEvent() {
  const event = useParams();

  return <h1>Edit {event.eventId} Page!</h1>;
}

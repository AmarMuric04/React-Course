import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

export default function EventDetails() {
  const event = useParams();

  return (
    <Fragment>
      <h1>{event.eventId} Detail Page!</h1>
      <Link to="edit-event">Edit this event</Link>
    </Fragment>
  );
}

import { Fragment } from "react";
import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetails() {
  const data = useLoaderData();

  return (
    <Fragment>
      <EventItem event={data.event} />
    </Fragment>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok)
    return json(
      {
        message: "Could not get details for selected event.",
      },
      {
        status: 500,
      }
    );
  else return response;
}

import { Fragment } from "react";
import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetails() {
  const data = useRouteLoaderData("event-detail");

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

export async function action({ params, request }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok)
    return json(
      {
        message: "Could not delete event.",
      },
      {
        status: 500,
      }
    );
  else return redirect("/events");
}

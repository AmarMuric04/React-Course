import { Fragment } from "react";
import {
  json,
  defer,
  Await,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetails() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </Fragment>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

async function loadEvent(id) {
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
  else {
    const data = await response.json();
    return data.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //   // return { isError: true, message: "Could not fetch events." };
    //   throw new Response(
    //     JSON.stringify({ message: "Could not fetch events.", status: 500 })
    //   );
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
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

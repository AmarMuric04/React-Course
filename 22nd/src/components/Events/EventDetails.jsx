import { useState } from "react";
import Modal from "../UI/Modal.jsx";
import Header from "../Header.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const {
    data: event,
    isPending: eventIsLoading,
    isError: eventIsError,
    error: eventError,
  } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });

  const {
    mutate,
    isPending: deleteIsPending,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const handleDeleteEvent = () => mutate({ id: params.id });
  const handleStartDelete = () => setIsDeleting(true);
  const handleStopDelete = () => setIsDeleting(false);

  let formattedDate;

  if (event)
    formattedDate = new Date(event.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Do you really want to delete this event?</h2>
          <p>This action can not be undone</p>
          <div className="form-actions">
            {deleteIsPending && "Deleting..."}
            {deleteIsError && (
              <ErrorBlock
                title="Failed to delete the item."
                message={
                  deleteError.info?.message || "Failed to delete the item."
                }
              />
            )}
            {!deleteIsPending && (
              <>
                <button className="button-text" onClick={handleStopDelete}>
                  Cancel
                </button>
                <button className="button" onClick={handleDeleteEvent}>
                  Delete
                </button>
              </>
            )}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {eventIsLoading && <LoadingIndicator />}
        {eventIsError && (
          <ErrorBlock
            title="Failed to load the event."
            message={eventError.info?.message || "Failed to load the event."}
          />
        )}
        {event && (
          <>
            <header>
              <h1>{event.title}</h1>

              <nav>
                <button onClick={handleStartDelete}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>

            <div id="event-details-content">
              <img src={`http://localhost:3000/${event.image}`} alt="event" />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{event.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>
                    {formattedDate} @ {event.time}
                  </time>
                </div>
                <p id="event-details-description">{event.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}

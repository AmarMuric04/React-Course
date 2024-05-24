import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Events, { loader as eventLoader } from "../pages/Events";
import EventDetails, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";
import Error from "../pages/Error";
import NewEvent from "../pages/NewEvent";
import MainNavigation from "../components/MainNavigation";
import EventNavigation from "../components/EventsNavigation";
import NewsletterPage, {
  action as newsletterAction,
} from "../pages/Newsletter";

import { action as manipulateEventAction } from "../components/EventForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "/events",
        element: <EventNavigation />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: "new-event",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventAction,
              },
              {
                path: "edit-event",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

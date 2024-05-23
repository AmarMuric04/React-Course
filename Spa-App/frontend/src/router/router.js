import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Events, { loader as eventLoader,action as deleteEventAction } from "../pages/Events";
import EventDetails, {
  loader as eventDetailLoader,
} from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";
import Error from "../pages/Error";
import NewEvent, { action as newEventAction } from "../pages/NewEvent";
import MainNavigation from "../components/MainNavigation";
import EventNavigation from "../components/EventsNavigation";

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
            action: newEventAction,
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
              },
            ],
          },
        ],
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import EditEvent from "../pages/EditEvent";
import NewEvent from "../pages/NewEvent";
import MainNavigation from "../components/MainNavigation";
import EventNavigation from "../components/EventsNavigation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
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
            async loader() {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          {
            path: "new-event",
            element: <NewEvent />,
          },
          {
            path: ":eventId",
            element: <EventDetails />,
          },
          {
            path: ":eventId/edit-event",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);

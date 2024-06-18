import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/508000/508856-la-cite-limoilou.jpg",
    address: "Somewhere 123",
    description: "Be there or be square",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://study.com/cimages/multimages/16/eiffel_tower.jpg",
    address: "Somewhere 234",
    description: "Be there or be square",
  },
  {
    id: "m3",
    title: "First meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    address: "Somewhere 456",
    description: "Be there or be square",
  },
];

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default function HomePage(props) {
  useEffect(() => {}, []);
  return <MeetupList meetups={props.meetups} />;
}

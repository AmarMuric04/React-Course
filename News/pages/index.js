import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  await MongoClient.connect(
    "mongodb+srv://muricamar2004:Kolosseum123@cluster0.hhpzhqe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/508000/508856-la-cite-limoilou.jpg"
      title="Meetup"
      address="Here"
      description="Come here"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "image.png",
        description: "abc",
        id: "1",
        address: "2",
        title: { params },
      },
    },
  };
}

import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Helo evruone mnnnhm"
          text="Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us, not only to adapt to and explore new surroundings, but also to engage with different people,to embrace adventures as they come and to share new and meaningful experiences with friends and loved ones. "
        />
        <TripData
          image={Trip2}
          heading="Helo evruone mnnnhm"
          text="Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us, not only to adapt to and explore new surroundings, but also to engage with different people,to embrace adventures as they come and to share new and meaningful experiences with friends and loved ones. "
        />
        <TripData
          image={Trip3}
          heading="Helo evruone mnnnhm"
          text="Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us, not only to adapt to and explore new surroundings, but also to engage with different people,to embrace adventures as they come and to share new and meaningful experiences with friends and loved ones. "
        />
      </div>
    </div>
  );
}

export default Trip;

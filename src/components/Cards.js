import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/f7/86.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
              text="Travel through the Ialands of Bail in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://www.konnecthq.com/wp-content/uploads/2021/02/jungle-facts-for-kids-5-2-1.jpg"
              text="See the river in the middle of the forest"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://media.nationalgeographic.org/assets/photos/318/172/ef5dc16b-efa3-41fc-820f-1fec68953071.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Luxury"
              path="/products"
            />
            <CardItem
              src="https://www.dx-world.net/wp-content/uploads/2020/05/dxped.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters "
              label="Adventure"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

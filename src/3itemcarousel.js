import React from "react";
import { Carousel } from "react-bootstrap";

const houselist = [
  {
    id: 1,
    housemain: "http://localhost:9000/images/house1.jpg",
    Price: "$239,000",
    Type: "Single Family",
    Rooms: "3 beds + 2 baths"

  },
  {
    id: 2,
    housemain: "http://localhost:9000/images/house2.jpg",
    Price: "$270,000",
    Type: "Single Family",
    Rooms: "2 beds + 2 baths"
  },
  {
    id: 3,
    housemain: "http://localhost:9000/images/house3.jpg",
    Price: "$225,000",
    Type: "Single Family",
    Rooms: "3 beds + 2 baths"
  }
]

function Entry() {
  return (
    <div>
      <h1 className="reviews-h1">House For Sale</h1>
      <Carousel>
        {houselist.map(houselist => (
          <Carousel.Item key={houselist.id}>
            <img
              className="houseImages d-block mx-auto"
              src={houselist.housemain}
              alt={houselist.Rooms}
            />
            <Carousel.Caption className="listinfo">
              <h3>{houselist.Price}</h3>
              <p>{houselist.Type}</p>
              <p>{houselist.Rooms}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Entry;
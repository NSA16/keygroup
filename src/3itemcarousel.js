import React, { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";


function Entry(){
  const [houselist, setHouseList] = useState([]);

  useEffect(() =>{
     getHouseList();
  },[]);

  const getHouseList = () => {
      fetch("http://localhost:9000/houselist")
      .then(response => response.json())
      .then(data => {
        setHouseList(data);
      })
      .catch((err) => {
              console.log(err.message);
      });
  }

  // const onClickView = (event, item) => {
  //     fetch("http://localhost:9000/labor/" + item.id)
  //         .then(response => response.json())
  //         .then(data => {
  //             setFormFields(data);
  //         })
  //         .catch((err) => {
  //                 console.log(err.message);
  //         });
  // }

  // const handleChange = (event) =>{
  //     const fieldName = event.target.name;
  //     const fieldValue = event.target.value;

  //     setFormFields(values=>({...values, [fieldName]: fieldValue}));
  // }

  // const onHandleSubmit = (event) => {
  //     event.preventDefault();
  //     fetch("http://localhost:9000/labor/" + 0, 
  //     {method: "POST", 
  //     body: JSON.stringify(formFields),
  //     headers:{'Content-type': 'application/json; charset=UTF-8',},
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //         setFormFields(data);
  //         getEmployeeList();
  //     })
  //     .catch((err) => {
  //             console.log(err.message);
  //     });
  // }



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
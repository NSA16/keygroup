import React, { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";


function Admin (){
    const [formFields, setFormFields] = useState([]);
    const [houselist, setHouseList] = useState([]);

    useEffect(() =>{
        getHouseList();
     },[]);
  

    const getHouseList = () => {
        fetch("http://localhost:9000/labor")
        .then(response => response.json())
        .then(data => {
            setHouseList(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormFields(values=>({...values, [fieldName]: fieldValue}));
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/houselist/" + 0, 
        {method: "POST", 
        body: JSON.stringify(formFields),
        headers:{'Content-type': 'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
            getHouseList();
        })
        .catch((err) => {
                console.log(err.message);
        });
}

return (
    <div>
        <div>
            <h1>List of House</h1>
                <form onSubmit={onHandleSubmit}>
                    <input type="hidden" value={formFields.id}/>
                    <input type="file" name="image" value={formFields.housemain} placeholder='image' onChange={handleChange}/>
                    <input type="text" name="price" value={formFields.price} placeholder='price' onChange={handleChange}/>
                    <input type="text" name="type" value={formFields.type} placeholder='type' onChange={handleChange}/>
                    <input type="text" name="rooms" value={formFields.rooms} placeholder='rooms' onChange={handleChange}/>
                    <div>
                    <input type="submit"/>
                    </div>
                </form>
        </div>
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
  </div>
);
}

export default Admin
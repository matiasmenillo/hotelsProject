import './App.css';
import Hero from './components/Hero';
import Filters from './components/Filters';
import Hotels from './components/Hotels';
import { data } from './scripts/data';
import React, { useState } from 'react';



const InitialValuesfilter = {
  dateFrom: data.today,
  dateTo: new Date(data.today.valueOf() + 86400000),
  country: undefined,
  price: undefined,
  rooms: undefined
};

function App() {


  const [filter, setFilter] = useState(InitialValuesfilter);
  const [hotels, setHotels] = useState(data.hotels);


  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.type === "date" ? new Date(e.target.value) : e.target.value;

    setFilter(
      {
        ...filter,
        [name]: value
      }
    );
  }

  return (
    <>
      <Hero
        filters={filter}
      />
      <Filters
        filters={filter} handleChange={handleChange}
      />
      <Hotels
        hotelsData={data.hotelsData}
      />
    </>
  )
}

export default App;

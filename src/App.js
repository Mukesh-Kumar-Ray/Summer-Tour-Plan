import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

   const [tours,tourHandler]=useState(data);
    
   function removeTour(id){
      const newTourdata=tours.filter( (tour ) => {
           return(tour.id !== id);
      })
      tourHandler(newTourdata);
   }

   function refreshHandler(){
    return tourHandler(data);
   }

   if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Lefts</h2>
        <button className="btn-white" onClick={refreshHandler}>refresh</button>

      </div>
    )
   }

  return (
    <div className='App'>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;

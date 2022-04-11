import React from "react"
import data from "../data"


export default function Cards(props) {
 return (
     <div class="card">
        <p><img class="photo" src = {`${props.imageUrl}`} /></p>
        <div class="details">
            <p class="location"><img src="./images/cursor.png"/> {props.location
            }<span class="googleMaps">  <a href={`${props.googleMapsUrl}`}>View on Google Maps</a> </span> </p>
            <h1 class="title">{props.title}</h1>
            <h6 class="date">{props.startDate}  - {props.startDate}  </h6>
            <p class="description">{props.description}</p>
            <hr/>    
        </div>
        
     </div>
     
 )
    
}


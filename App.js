import React from "react" 
import Cards from "./components/Cards"
import Head from  "./components/Head"
import data from "./data"


export default function App() {
    const places = data.map (item => {
       return ( <Cards 
          key={item.id}
           {...item}
        />
       )  
    })
    console.log(places)
    
    return (
        <div>
        <Head />
        
        {places}
        
        </div>
        
        )
    
    
    
}
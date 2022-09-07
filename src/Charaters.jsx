import React from "react";


export function Charaters({ charaters }) {

  return (
    <div className="containers-card">
        {charaters.map((item, index)=> (
            <div key={index} className="column">
            <div className="card">
                <img src={item.image} alt=""/>
            </div>
            <div className="card-body">
                <h3>{item.name}</h3>
                <hr/>
                <p>{item.status == "Alive" ? "🟢" + item.status : "🔴" + item.status }</p>
                <p>{item.location.name}</p>
                <p>{item.gender  == "Female" ? "♀" + item.gender : "♂"+item.gender }</p>
            </div>
            </div>
        ))}
    </div>
  );
}

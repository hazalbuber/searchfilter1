import { useState } from "react";
import "./app.css";
import { Users } from "./users";
import Table from "./Table";

function App() {

    const [query, setQuery] = useState("");
    const keys  =["first_name","last_name","email"]

    const search=(data)=> {
        return data.filter(
            (item)=>
        keys.some((key)=>item[key].toLocaleLowerCase().includes(query)
        
        ));
      };

    
    //console.log(query);
    //console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
    return (
        <div className="app">

        <input 
        type="text" 
        placeholder="search..." 
        className="search" 
        onChange={e=> setQuery(e.target.value)}
        />

        <Table data={search(Users)}></Table>
        </div>
    )
}

export default App;
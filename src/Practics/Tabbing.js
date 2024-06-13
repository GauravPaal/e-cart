import { useState } from "react";
import { Tab } from "./Tab";

export function Tabbing() {
   

   return(<div className="container-fluid">
        <h3 className="text-center">Begin Strategic Preparation for CLAT or Judiciary Exams</h3>
    

    <div className="w-75 justify-content-center">
        <ul className="nav border-2 border-primary">
           
                {Tab.map((value,index)=> {
                    return(<li className="nav-item ">
                    <button className="btn btn-outline-primary m-4 " key={index}>{value.Title}</button>
                    </li>
                    
                )}
                
                )
                
                }
               
            
        </ul>
     
                    
                    

        </div>

    </div>)
}
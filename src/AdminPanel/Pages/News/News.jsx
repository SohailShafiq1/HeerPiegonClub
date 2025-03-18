import React from 'react'
import style from './news.module.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
const s = style;
const News = () => {
    const data = [
        { name: "News" },
        { name: "News 02" },
        { name: "Rawalpindi" },
        { name: "Multan" },
        
      ];
  return (
   <div className={s.container}>
             <div className={s.top}>
               <h1>News</h1>
       
               <IoAddCircleOutline className={s.add} />
             </div>
             <div className={s.table}>
               <table className={s.tournamenttable}>
                 <thead>
                   <tr>
                     <th>Count</th>
                     <th>Name</th>
                   
                     <th>Delete</th>
                    
                   </tr>
                 </thead>
                 <tbody>
                   {data.map((tournament, index) => (
                     <tr>
                       <td>{index + 1}</td>
                       <td>{tournament.name}</td>
                       
                      
                       <td>
                         <FaMinusCircle className={s.remove} />
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
  )
}

export default News

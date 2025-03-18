import React from 'react'
import style from './post.module.css'
import { BiEdit } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
const s = style;
const Post = () => {
      const data = [
    { name: "Lahore" },
    { name: "Faisalabad" },
    { name: "Rawalpindi" },
    { name: "Multan" },
    
  ];
  return (
      <div className={s.container}>
          <div className={s.top}>
            <h1>Post</h1>
    
            <IoAddCircleOutline className={s.add} />
          </div>
          <div className={s.table}>
            <table className={s.tournamenttable}>
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Remove</th>
                 
                </tr>
              </thead>
              <tbody>
                {data.map((tournament, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{tournament.name}</td>
                    
                    <td>
                      <BiEdit className={s.edit} />
                    </td>
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

export default Post

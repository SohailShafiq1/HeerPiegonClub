import React from 'react'
import style from './nameofcup.module.css'
const s = style
import img from '../../../../assets/p1.jpeg'
const NameOfCup = () => {
    const daydata = [
        {
          id: 1,
          name: "Israr Ahmed",
          img: img, // Replace with actual image path
          times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"],
          total: "18:00",
        },
        {
          id: 2,
          name: "Sohail Shafiq",
          img: img,
          times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"],
          total: "18:05",
        },
        {
            id: 1,
            name: "Israr Ahmed",
            img: img, // Replace with actual image path
            times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"],
            total: "18:00",
          },
          {
            id: 2,
            name: "Sohail Shafiq",
            img: img,
            times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"],
            total: "18:05",
          },
          {
            id: 1,
            name: "Israr Ahmed",
            img: img, // Replace with actual image path
            times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"],
            total: "18:00",
          },
          {
            id: 2,
            name: "Sohail Shafiq",
            img: img,
            times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"],
            total: "18:05",
          },
          {
            id: 1,
            name: "Israr Ahmed",
            img: img, // Replace with actual image path
            times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"],
            total: "18:00",
          },
          {
            id: 2,
            name: "Sohail Shafiq",
            img: img,
            times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"],
            total: "18:05",
          },
          {
            id: 1,
            name: "Israr Ahmed",
            img: img, // Replace with actual image path
            times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"],
            total: "18:00",
          },
          {
            id: 2,
            name: "Sohail Shafiq",
            img: img,
            times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"],
            total: "18:05",
          },
                
      ];
  return (
    <div className={s.container}>
      <div className={s.top}> 
        <div className={s.mainbox}>

            <div className={s.name}>
                <h1>
                    Name of Tournament
                </h1>
            </div>
            <div className={s.dates}>
            <ul className={s.ul}>
                <li className={s.li}>3/15/2025</li>
                <li className={s.li}>3/15/2025</li>
                <li className={s.li}>3/15/2025</li>
                <li className={s.li}>3/15/2025</li>
                <li className={s.li}>3/15/2025</li>
                <li><button className={s.totalButton}>Total</button></li>
            </ul>
            <div className={s.counting}>
            <h3>Lofts : 252</h3>
            <h3>Total Pigeons: 300</h3>
            <h3>Pigeons Landed: 210</h3>
            <h3>Pigeons remaining: 544 </h3>
            </div>

            </div>
            <div className={s.winner}>
                <div className={s.runnerUp}>
                    <h3>First Winner Bird: Ustad Israr Ahmed </h3>
                    <h4>Time: 18:00:00</h4>
                </div>
                <div className={s.runnerUp}>
                <h3>First Winner Bird: Ustad Sohail Shafiq </h3>
                <h4>Time: 18:00:00</h4>
                </div>
            </div>

        </div>
        <div className={s.newsbox}>
            <h2>Latest News will be updated here</h2>
        </div>

      </div>
      <div className={s.bottom}>
      <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.tr}>
          <th className={s.pimg}>Picture</th>
          <th className={s.pname}>Name</th>
          {[...Array(7)].map((_, i) => (
            <th key={i} className={s.th}>{i + 1} Piegons</th>
          ))}
          <th className={s.th}>Total</th>
        </tr>
      </thead>
      <tbody>
        {daydata.map((person) => (
          <tr key={person.id} className={s.tr}>
            <td className={s.pimg}>
              <img src={person.img} alt={person.name} />
            </td>
            <td className={s.pname}>{person.name}</td>
            {person.times.map((time, index) => (
              <td key={index} className={s.th}>{time}</td>
            ))}
            <td className={s.td}>{person.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default NameOfCup

import React, { useState } from 'react';
import style from './nameofcup.module.css';
const s = style;
import img from '../../../../assets/p1.jpeg';

const NameOfCup = () => {
  const dayData = [
    { id: 1, name: "Israr Ahmed", img, times: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:00", "18:00"], total: "18:00" },
    { id: 2, name: "Sohail Shafiq", img, times: ["17:30", "17:45", "18:00", "17:50", "17:55", "18:05", "18:10"], total: "18:05" },
    { id: 3, name: "Taqi Asad", img, times: ["18:15", "18:20", "18:25", "18:30", "18:35", "18:40", "18:45"], total: "18:30" },
    { id: 4, name: "Ahmed Ali", img, times: ["17:10", "17:20", "17:30", "17:40", "17:50", "18:00", "18:10"], total: "17:50" },
    { id: 5, name: "Shamu", img, times: ["18:50", "18:55", "19:00", "19:05", "19:10", "19:15", "19:20"], total: "19:00" },
  ];

  const totalData = dayData.map(person => ({
    ...person,
    total: "07:00" 
  }));

  const [total, setTotal] = useState(false);
  const [selectedData, setSelectedData] = useState(dayData); 

  return (
    <div className={s.container}>
      <div className={s.top}> 
        <div className={s.mainbox}>
          <div className={s.name}>
            <h1>Name of Tournament</h1>
          </div>
          <div className={s.dates}>
            <ul className={s.ul}>
              {["3/15/2025", "3/16/2025", "3/17/2025", "3/18/2025", "3/19/2025"].map((date, index) => (
                <li key={index} className={s.li} onClick={() => {
                  setSelectedData(dayData);
                  setTotal(true); 
                }}>
                  {date}
                </li>
              ))}
              <li>
                <button className={s.totalButton} onClick={() => {
                  setSelectedData(totalData);
                  setTotal(false); 
                }}>
                  Total
                </button>
              </li>
            </ul>
            <div className={s.counting}>
              <h3>Lofts : 252</h3>
              <h3>Total Pigeons: 300</h3>
              <h3>Pigeons Landed: 210</h3>
              <h3>Pigeons remaining: 544</h3>
            </div>
          </div>
          <div className={s.winner}>
            <div className={s.runnerUp}>
              <h3>First Winner Bird: Ustad Israr Ahmed</h3>
              <h4>Time: 18:00:00</h4>
            </div>
            <div className={s.runnerUp}>
              <h3>First Winner Bird: Ustad Sohail Shafiq</h3>
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
              {total
                ? [...Array(7)].map((_, i) => (
                    <th key={i} className={s.th}>{i + 1} Pigeons</th>
                  ))
                : [...Array(7)].map((_, i) => (
                    <th key={i} className={s.th}>7 Pigeons</th>
                  ))
              }
              <th className={s.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {selectedData.map((person) => (
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
  );
};

export default NameOfCup;

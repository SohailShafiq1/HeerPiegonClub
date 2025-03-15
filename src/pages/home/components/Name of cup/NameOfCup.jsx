import React from 'react'
import style from './nameofcup.module.css'
const s = style
import img from '../../../../assets/p1.jpeg'
const NameOfCup = () => {
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
                <th className={s.th}>1 Pieogons</th>
                <th className={s.th}>2 Pieogons</th>
                <th className={s.th}>3 Pieogons</th>
                <th className={s.th}>4 Pieogons</th>
                <th className={s.th}>5 Pieogons</th>
                <th className={s.th}>6 Pieogons</th>
                <th className={s.th}>7 Pieogons</th>
                <th className={s.th}> Total</th>
            </tr>
        </thead>
        <tbody>
            
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>
            <tr className={s.tr}>
                <td className={s.pimg}><img src={img} /></td>
                <td className={s.pname}>Israr Ahmed</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.th}>18:00</td>
                <td className={s.td}>18:00</td>
            </tr>


        </tbody>
    </table>
      </div>
    </div>
  )
}

export default NameOfCup

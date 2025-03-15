import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Tournament.module.css"; // Import CSS Module

const Tournament = () => {
  const tournaments = [
    {
      name: "tournament 1",
      time: "12:55",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
    {
      name: "tournament 2",
      time: "12:22",
    },
  ];
  return (
    <div className={styles.table}>
      <table className={styles.tournamentTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Tournament</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.length > 0 ? (
            tournaments.map((tournament, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{tournament.name}</td>
                <td>{tournament.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className={styles.noData}>
                No tournament data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tournament;

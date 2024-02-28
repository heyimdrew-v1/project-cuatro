import React from 'react';
import './Schedule.css'; 

const Schedule = () => {
  const matchups = [
    { homeTeam: "Evil Geniuses", awayTeam: "LOUD" },
    { homeTeam: "NRG Esports", awayTeam: "Sentinels" },
    { homeTeam: "TBD", awayTeam: "TBD" }
  ];

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      <div className="matchups">
        {matchups.map((matchup, index) => (
          <div key={index} className="matchup">
            <div className="home">{matchup.homeTeam}</div>
            <div className="versus">vs</div>
            <div className="away">{matchup.awayTeam}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

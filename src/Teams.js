import React from 'react';
import './Teams.css'; // Import your CSS file for styling

const Teams = () => {
  // Dummy data for teams
  const teams = [
    "NRG Esports",
    "LOUD",
    "Evil Geniuses",
    "Sentinels",
    "G2 Esports",
    "MIBR",
    "Cloud9",
    "FURIA",
    "KRU Esports",
    "Leviatan",
    "100 Thieves",
  ];

  return (
    <div className="teams-container">
      <h1>Teams</h1>
      <ul className="team-list">
        {teams.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;

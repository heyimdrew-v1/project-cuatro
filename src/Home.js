import React from 'react';
import './Home.css';

const Home = () => {
  const newsAndInfo = [
    {
      title: "VALORANT Champions Tour",
      content: "The VALORANT Champions Tour is underway with the kickoff tournament. With 4 teams in North America remaining, which two teams will represent NA at Masters Madrid?",
    },
    {
      title: "Latest Patch Notes",
      content: "Check out the latest patch (8.03) featuring balance changes and bug fixes.",
    },
    {
      title: "Upcoming Tournament",
      content: "Don't miss the kickoff playoffs for the upcoming VCT Masters tournament in Madrid, Spain.",
    }
  ];

  return (
    <div className="home-container">
      <h1 className="main-heading">VALORANT North American eSports</h1>
      <h2 className="sub-heading">Latest News and Information</h2>
      {newsAndInfo.map((item, index) => (
        <div key={index} className="news-item">
          <h3 className="news-title">{item.title}</h3>
          <p className="news-content">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import "../Styles/App.css";
import Header from "./Header";
import TrackData from "../Data/TrackData";
import ArtistData from "../Data/ArtistData";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={'track'} style={style}><TrackData /></div>
      <div className={'artist'} style={style}><ArtistData /></div>
    </div>
  );
}

const style = {
    marginBottom: '3rem'
}

export default App;

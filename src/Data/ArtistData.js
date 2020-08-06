import React, { useEffect, useState } from "react";
import axios from "axios";
import TopArtist from "../Components/TopArtist";

export default function ArtistData() {
  const API_KEY = "3acb268b495fc62a92084b2cfbb628b3";

  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=geo.getTopArtists&country=spain&limit=10&api_key=${API_KEY}&format=json`
      )
      .then((res) => {
        setRes(res.data.topartists.artist);
      })
      .catch((err) => {
        console.error("error");
      });
  },[]);

  const data = res.map((each) => {
    return {
      name: each.name,
      y: parseInt(each.listeners),
    };
  });

  return (
    <div className={"artist-data"}>
      <TopArtist data={data} />
    </div>
  );
}

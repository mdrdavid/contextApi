import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from "./NewSongForm";

function SongList() {
  // using a useState hook
	const [songs, setSongs] = useState([
		{ title: "tuyimbe", id: 1 },
		{ title: "we sing", id: 2 },
		{ title: "raise me", id: 3 },
		{ title: "come here", id: 4 },
	]);
  const addSong =(title)=>{
    // setSongs([...songs, {title:"helo news", id: uuidv4()}])
    setSongs([...songs, {title, id: uuidv4()}])
  }
	return (
		<div>
			<ul className="list-none">
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>
      <button onClick={addSong}>Add Song</button>
			<NewSongForm addSong={addSong}/>
		</div>
	);
}

export default SongList;

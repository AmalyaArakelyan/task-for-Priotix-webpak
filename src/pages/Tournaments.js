import React from 'react';
//Components
import TournamentList from "../components/tournament/Tournament.js";

export default function Tournament() {
    return (
        <div id="home">
            <h1 className="title">Your Tournaments</h1>
            <TournamentList />
        </div>
    );
}

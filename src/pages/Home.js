import React from 'react';
//Components
import Search from "../components/search/Search.js"
import Result from "../components/search/Result.js"
export default function Home() {
    return (
        <div id="home">
            <h1 className="title">Home page</h1>
            <h3 className="sub-title">Search in Tournament</h3>
    
            <Search />
            <Result />
        </div>
    );
}

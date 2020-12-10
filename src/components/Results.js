import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from '../requests';
import '../css/Results.css';


function Results() {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
         const request = await axios.get(requests.fetchActionMovies);
         console.log(request)
        }
    }, [])

    

    return (
        <div className='results'>
            {movies.map((movie)=>(
                <VideoCard />
            ))}

        </div>
    )
}

export default Results
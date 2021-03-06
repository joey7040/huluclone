import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import axios from './axios';
import '../css/Results.css';


function Results({ selectedOption }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
         const request = await axios.get(selectedOption);
         setMovies(request.data.results);
         return request
        }

        fetchData()
    }, [selectedOption])

    

    return (
        <div className='results'>
            {movies.map((movie)=>(
                <VideoCard movie={movie} />
            ))}
        </div>
    )
}

export default Results

import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import './ExerciseList.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from './left-arrow.png'
import right from './right-arrow.png'
import bodypart from './equipment.png'

const ExerciseeqpList = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [videoUrls, setVideoUrls] = useState({});

    const fetchExercises = async () => {
        const sanitizedSearchTerm = searchTerm.toLowerCase().replace(/\s/g, '%20'); // Convert to lowercase and replace space with %20
        
        if (sanitizedSearchTerm.trim() === '') {
            // If search term is empty, do not fetch exercises
            setExercises([]);
            return;
        }
        
        try {
            setLoading(true);
            const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/equipment/${sanitizedSearchTerm}`, {
                headers: {
                    'x-rapidapi-key': 'b042c00903msh452f8d9988255e5p1267c1jsne1994e647932',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            });
            setExercises(response.data);
            setLoading(false);
            
            // Search for videos corresponding to each exercise
            searchVideos(response.data);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const searchVideos = async (exercises) => {
        const urls = {};
        for (const exercise of exercises) {
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${exercise.name}&part=snippet&type=video&key=AIzaSyAyEH4klF9_lDrY4Qv3gvAzaAfozY9wE8Y`);
                if (response.data.items.length > 0) {
                    const videoId = response.data.items[0].id.videoId;
                    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
                    urls[exercise.id] = videoUrl;
                }
            } catch (error) {
                console.error(`Error fetching video for exercise ${exercise.name}: ${error.message}`);
            }
        }
        setVideoUrls(urls);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        fetchExercises(); // Call fetchExercises when Search button is clicked
    };

    useEffect(() => {
        // Initial fetch of exercises
        fetchExercises();
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

    return (
        <div className='full'>
        <div className='exerbody'>
            <div>
            <table className='exertable' align='center'>
                <tr>
                    <td><Button onClick={previousSlide} className='exerleft'><img src={left}/></Button></td>
                    <td><Slider {...settings} ref={sliderRef} className='exerSlider'>
                            <Button className="slider-item" value={searchTerm}><img src={bodypart} onClick={handleSearchClick}/><br/>Assisted</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Band</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Barbell</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Body weight</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Bosu Ball</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Cable</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Bumbell</Button>
                            <Button className="slider-item"><img src={bodypart}/><br/>Hammer</Button>

                    {/* Add more divs as needed */}
                </Slider>
                </td>
                <td className='lefttd'>
                <Button onClick={nextSlide} className='exerright'><img src={right}/></Button>
                </td>
                
                
                
                </tr>
            </table>
            </div>
            <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px', position:'relative',left:'5%' }}
          onChange={handleSearchChange}
          placeholder="Search Exercises Equipment"
          type="text"
        />
            {/* <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by body part"
            /> */}
            <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },position:'relative',right:'5%' }} onClick={handleSearchClick}>Search</Button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            <div className='exervedio'>
            <ul className='exercisecard'>
                {exercises.map(exercise => (
                    <li key={exercise.id}>
                        {exercise.name}
                        {videoUrls[exercise.id] && (
                            <div>
                                <iframe
                                    width="500"
                                    height="300"
                                    src={videoUrls[exercise.id]}
                                    title={exercise.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
        </div>
    );
};

export default ExerciseeqpList;

//IMPORTING DEPENDENCIES
import React from 'react'

//Creating the VideoDetail Component, and pulling props.selectedVideo into the const name selectedVideo
const VideoDetail = ({ selectedVideo }) => {
    console.log(selectedVideo);
    if (!selectedVideo) return <h2>Loading Spinner goes here</h2>; //Find Loading spinner

    const videoId = selectedVideo.id.videoId; 
    const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`   
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src={videoURL} allowFullScreen></iframe>
            </div>

            <div>
                <h2>{selectedVideo.snippet.title}</h2>
                <h3>{selectedVideo.snippet.description}</h3>
            </div>
        </section>
    )
}
//Exporting the VideoDetail Component to nest in App.js Component
export default VideoDetail;
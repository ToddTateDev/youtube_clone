//IMPORTING DEPENDENCIES
import React from 'react';

//Using Named Exports, so i can export both the Components
//Creating VideoList Component and exporting it
export const VideoList = props => {
    return (
        <ul>{props.children}</ul>
    )
}

//Using Named Exports, so i can export both the Components
//Creating VideoListItem Component and exporting it
export const VideoListItem = ({ video }) => {
    return (
        <li>
            <img src={video.snippet.thumbnails.medium.url} />
        </li>
    )
}
//IMPORTING DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`

const ListItem = styled.li`
    margin-bottom: 1em;
    img {
        border: ${props => props.active ? '5px solid blue' : '2px solid gray'};
        border-radius: 10px;
        cursor: pointer;
        :hover {
            border-color: red
        }
    }

`

//Using Named Exports, so i can export both the Components
//Creating VideoList Component and exporting it
export const VideoList = props => {
    return (
        <List>{props.children}</List>
    )
}

//Using Named Exports, so i can export both the Components
//Creating VideoListItem Component and exporting it
export const VideoListItem = ({ video, selectedVideo }) => {
    return (
        <ListItem active={video === selectedVideo}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        </ListItem>
    )
}
import axios from 'axios';

//YouTube Data API v3 API Key
const apiKey = 'AIzaSyAovlwlEhrrLkTemxYVeqRmOZaO0jTMZ94';


export default {
    searchYoutube: function(searchTerm) {
        //Get data from Youtube Search API
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                //Snippet is a requirement of the Google API
                part: 'snippet',
                //q is set to equal the search term the user enters
                q: searchTerm,
                //Only want to return videos from the search
                type: 'video',
                //passing in the apiKey as key
                key: apiKey
            }
        })
    }
}
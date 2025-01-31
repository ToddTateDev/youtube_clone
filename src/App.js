//Importing Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from './utils/API';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { VideoList, VideoListItem } from './components/VideoList';


//Creating smart App Component 
class App extends Component {

  state = {
      videos: [],
      selectedVideo: null,
  }

  componentDidMount() {
      //Calling the Youtube Data API with default search term
      API.searchYoutube('kitten mittens')
      //using .then() to capture the data from Youtube Data API and storing it in res and Updating videos array & selected video within State.
      .then(res => this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[1]
      }))
      //If theres an Error
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
            <Col>
              <SearchBar />
            </Col>
        </Row>
        <Row>
            <Col md='8'>
            {/* Passing the selectedVideo stored in state into the VideoDetail Component */}
              <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </Col>
            <Col md='4'>
              <VideoList>
                {/* Mapping through the video array stored in state and creating a VideoListItem for each video */}
                {this.state.videos.map(video => (
                  <VideoListItem 
                      video={video} 
                      key={video.id.videoId} 
                      id={video.id.videoId}
                      selectedVideo={this.state.selectedVideo}  
                      />
                ))}
              </VideoList>
            </Col>
        </Row>
      </Container>
    );
  }

}







export default App;

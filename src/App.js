//Importing Dependencies
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { VideoList, VideoListItem } from './components/VideoList';


function App() {
  return (
    <Container>
      <Row>
          <Col>
            <SearchBar />
          </Col>
      </Row>
      <Row>
          <Col md='8'>
            <VideoDetail />
          </Col>
          <Col md='4'>
            <VideoList />
          </Col>
      </Row>
    </Container>
  );
}

export default App;

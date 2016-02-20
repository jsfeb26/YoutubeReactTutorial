import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB89MFjOBG_X0Eq4rGwwbEHR1zmBLpvqzM';


// Create a new component. This component should produce some HTMl
class  App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term  }, (videos) => {
      // when key and value are same name you can just use the value name
      // this is new in es6 it's called destructuring????
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // this inner function will only run once every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

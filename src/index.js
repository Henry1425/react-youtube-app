import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDiYMBpNavkiOHG12clsswm98NiAbwMIcM';

//Create a new component. This should produce
//some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });//this.setState({videos:videos});
    });

  }
  render() {
  return (
    <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList // Property onVideoSelect takes a func => selectedVideo func updateds the apps state.
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}// selectedVideo is a callback
         videos={this.state.videos} />
    </div>
  );
 }
}

ReactDOM.render(<App /> , document.querySelector('.container'));



//Take this component's generated HTML and put it
//on the page (in the DOM)

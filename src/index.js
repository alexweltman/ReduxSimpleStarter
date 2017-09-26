import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD2EFEHosuPqsDxY1odzoB6zHxarB09kD0';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { videos: [] };

      YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
         this.setState({ videos });
      });
   }

   render() {
      return (
         <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));

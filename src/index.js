import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import ytSearch from 'youtube-api-search';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyDtnp3X0EhOR7mDNymq9Obc6efW2A3yFAE';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {videos: [] };

        ytSearch({key: API_KEY, term:'songs'}, (data) =>{
                this.setState({videos: data});
        });
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));

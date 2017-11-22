import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import ytSearch from 'youtube-api-search';
import videoList from './components/videoList';

const API_KEY = 'AIzaSyDtnp3X0EhOR7mDNymq9Obc6efW2A3yFAE';



class App extends Component{
    constructor(props){
        super(props);

        this.state = {videos: [] };

        ytSearch({key: API_KEY, term:'songs'}, (err,data) =>{
            if(err)
                throw err;
            else
                this.setState({videos: data});
        });
    }
    render(){
        return(
            <div>
                <SearchBar />
                <videoList videos = {this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));

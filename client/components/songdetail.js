import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/fetchsinglesong';
import LyricsCreate from './addlyrics';
import LyricsList from './lyricsList';


class SongDetail extends Component{
    render(){
        console.log(this.props);
        const {song}=this.props.data;
    
        if(!song)
        {
            return(
            <div>
                <Link to="/"> Back </Link>
                <h3>Song not found</h3>
            </div>
            );
        }
        return(
            <div>
                <Link to="/"> Back </Link>  
                <h3>{song.title}</h3>
                <LyricsList lyrics={song.lyrics}/>   
                <LyricsCreate songId={this.props.params.id}/>
            </div>
        );
    }//We modified the fetch query of the fetchsinglesong so that
    //it returned lyrics of the song and passed it on to LyricsList component as props
}

//this is required cause query does not have mutation
//graphql is aware(this.props) of the parameters being sent down to the component
export default graphql(query,{
    options: (props)=>{
        return {
            variables:{id:props.params.id}
        }
    }
})(SongDetail);


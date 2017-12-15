import React, {Component} from 'react';
//write gql queries directly into javascript
import gql from 'graphql-tag';
//attach graphql queries to react components
import {graphql} from 'react-apollo';

class LyricsCreate extends Component {
    constructor(props){
        super(props);
        this.state = {content:''}
    }
    onSubmit(Event){
        event.preventDefault();
        //mutation returns a promise
        this.props.mutate({
            variables: {
                content:this.state.content,
                songId: this.props.songId
            }
        }).then(this.setState({content:''}));
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input
                    value={this.state.content}
                    onChange={event=>this.setState({content:event.target.value})}>
                </input>
            </form>
        );
    }
}

const mutation= gql`
    mutation AddLyricToSong($content: String,$songId:ID){
        addLyricToSong(content:$content, songId: $songId){
            id
            lyrics {
                id
                content
            }
        }
    }
`
export default graphql(mutation)(LyricsCreate);
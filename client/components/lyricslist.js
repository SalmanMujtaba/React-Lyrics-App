import React, {Component} from 'react';
//write gql queries directly into javascript
import gql from 'graphql-tag';
//attach graphql queries to react components
import {graphql} from 'react-apollo';

class LyricsList extends Component {
    onLike(id){
        this.props.mutate({
            variables: {id}
        });
    }
    renderLyrics(){
        return this.props.lyrics.map(({id,content,likes})=>{
           
          return (
                <li key={id} className="collection-item">{content}
                    <div className="vote-box">
                        <i 
                            className="material-icons"
                            onClick={()=>this.onLike(id)}
                        >thumb_up</i>
                        {likes}
                    </div>
                </li>
            )
        });
    }
    
    render(){
        return(
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}


const mutation = gql`
    mutation LikeLyric($id: ID!){
        likeLyric(id:$id){
            id,
            likes,
    		content 
        }
    }`;


export default graphql(mutation)(LyricsList);
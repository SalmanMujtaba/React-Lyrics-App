import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/fetchsongs';

class SongList extends Component{
    deleteSong(id){
         this.props.mutate({variables:{id}}).then(()=>this.props.data.refetch());
    }
    getSongList()
    {
        return this.props.data.songs.map(({id,title})=>{
            return (
                <li key={id} className="collection-item">
                    <Link to={`/songs/${id}`}>
                        {title} 
                    </Link>    
                <i className="material-icons"
                   onClick={()=>this.deleteSong(id)}>
                   delete</i>
                </li>
            );
        });
    }
    render(){
        if(this.props.data.loading){ return <div>Loading...</div>; }

        return(
            <div>
                <div>
                    <ul className="collection">
                      {this.getSongList()}
                    </ul>
                </div>
                <div>
                    <Link to="/songs/new"
                        className="btn-floating btn-large red right">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>    
        );
    };
}

// const query = gql`
// {
//     songs{
//         id,
//         title
//     }
// }`;
const mutation = gql`
    mutation DeleteSong($id:ID){
        deleteSong(id:$id){
            id
        }
    }`;
export default graphql(mutation)(graphql(query)(SongList));

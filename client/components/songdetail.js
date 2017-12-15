import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/fetchsinglesong';

class SongDetail extends Component{
    render(){
        console.log(this.props.data);
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
            </div>
        );
    }
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


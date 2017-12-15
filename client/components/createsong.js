import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import query from '../queries/fetchsongs';

class CreateSong extends Component{
    constructor(props){
        super(props);
        this.state={title:' '};
    }
    onSubmit(event){
        event.preventDefault();
         //function, configuration object
         //sends the data: title as query param
        this.props.mutate({
            variables: {
                title: this.state.title,
            },
            refetchQueries: [{query}]
            // refetchQueries: [{query,variables:title}] but we do not require any variables again
        }).then(()=>hashHistory.push("/"));
    }
    render()
    {
        return(
            <div> 
                <Link to="/">Back</Link>
                <h3>Create a new Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <label>Song Title</label>
                  <input value={this.state.title}
                         onChange={
                             event=>this.setState({title: event.target.value})
                         } 
                  />  
                </form>
            </div>
        );
    }
}

const mutation = gql`
        mutation AddSong($title:String){
            addSong(title:$title){
                title
            }
    }`;

export default graphql(mutation)(CreateSong);
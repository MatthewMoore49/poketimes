import React, { Component } from 'react';
//import axios from 'axios'//
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';


 class Post extends Component {
     handleClick = () => {
         this.props.deletePost(this.props.post.id);
         this.props.history.push('/')
     }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post white-text">
            <h4 className="center white-text">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className="center white-text ">
            <button className="btn " onClick={this.handleClick}>Delete Post</button>
            </div> 
             </div>
        ) : (
            <div className = "center">Loading post...</div>  
        );
       
        return (
            <div className='container'>
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);
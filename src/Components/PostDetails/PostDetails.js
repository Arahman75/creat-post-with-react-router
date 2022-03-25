import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id} =useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setPost(data));
    }, []);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComments(data));
    },[]);


    return (
        <div>
            <h2>This is post detail: {id}</h2>
          <p>User posted: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Post body: {post.body}</p>
          <h3>The Number Of Comments: {comments.length}</h3>
          {
              comments.map(comment=> <Comment comment={comment}></Comment>)
          }
        </div>
    );
};

export default PostDetails;
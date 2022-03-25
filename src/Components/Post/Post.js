import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Post = (props) => {
    const {id,title,body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `post/${id}`
        history.push(url);

    };
    return (
        <div>
            <h2><strong>ID:{id}</strong> {title}</h2>
            <p>{body}</p>
            <button onClick={()=>showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;
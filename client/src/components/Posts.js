import { useEffect, useState } from "react";
import styles from './Posts.module.css';
import axios from 'axios';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async() => {
        try{
            const res = await axios.get('http://localhost:3001/api/posts');
            setPosts(res.data);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return(
        <div>
            
        </div>
    )

}

export default Posts;

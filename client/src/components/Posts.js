import { useEffect, useState } from "react";
import styles from './Posts.module.css';
import axios from 'axios';
import PostsTable from "./PostsTable";
import Pagination from "./Pagination";

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

    const deletePost = (id) => {
        const arr = posts.filter(post => id !== post.id);
        setPosts(arr);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return(
        <div className={styles.wrapper}>
            <PostsTable posts={posts} onDelete={(id) => deletePost(id)}/>
            <Pagination/>
        </div>
    )

}

export default Posts;

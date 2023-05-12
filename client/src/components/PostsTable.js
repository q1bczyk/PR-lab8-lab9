import React from "react";
import styles from './PostsTable.module.css';

const PostsTable = ( props ) => {

    return (
        <table className="table" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
            <thead>
                <tr>
                    <th scope="col">Nr</th>
                    <th scope="col">Text </th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
            {props.posts.map((item, key) =>
                (
                <tr key={key}>
                    <td>{item.title}</td>
                    <td>{item.text}</td>
                    <td><img style={{width: '50px', height: '50px'}} src={item.image} alt={key}/></td>
                    <td>
                        <button onClick={() => props.onDelete(item.id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
};

export default PostsTable;

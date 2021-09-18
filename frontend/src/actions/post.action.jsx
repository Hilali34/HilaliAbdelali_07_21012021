import axios from "axios";


export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = () => {

    return (dispatch) => {
        return  axios.get("http://localhost:4200/groupomania/post/")
            .then((res) =>{
                dispatch({ type: GET_POSTS, payload: res.data.post})
                }
            )
            .catch((error) => console.log(error))
    };
};


export const addPost = (data,token) => {
    console.log(data);

    return (dispatch) => {
        return  axios({
            method: "POST",
            url:"http://localhost:4200/groupomania/post/",
            data ,
            headers: {
                'authorization': `Bearer ${token}`
            }

        },[])
            .then((res) =>{
                    dispatch({ type: ADD_POST, payload: res.data.post})
                }
            )
            .catch((error) => console.log(error))
    };
};

export const editPost = (data,postId,token) => {
    console.log(data)

    return (dispatch) => {
        return  axios({
            method: "PUT",
            url: `http://localhost:4200/groupomania/post/${postId}`,
            data,
            headers: {
                'authorization': `Bearer ${token}`
            },
            params: {
                id: postId
            }

        },[])
            .then((res) =>{
                dispatch({ type: EDIT_POST, payload: {content:res.data.post.content,title:res.data.post.title,postId}});

                }
            )
            .catch((error) => console.log(error))
    };
};


export const deletePost = (postId,token) => {
    console.log(postId);
    console.log(token);

    return (dispatch) => {
        return   axios({
            method: "DELETE",
            url: `http://localhost:4200/groupomania/post/${postId}`,
            headers: {
                'authorization': `Bearer ${token}`
            },
            params: {
                id: postId
            }

        },[])
            .then((res) =>{
                console.log(res)
                dispatch({ type: DELETE_POST, payload: { postId } });
                }
            )
            .catch((error) => console.log(error))
    };
};
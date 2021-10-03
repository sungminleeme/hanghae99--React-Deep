import React from "react";
import {useSelector, useDispatch } from "react-redux";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);


    React.useEffect(() => {
        dispatch(postActions.getPostFB());

    }, []);
    //빈배열이 들어가야 처음에 한번
    return (
        <React.Fragment>
            {/* <Post/> */}
            {post_list.map((p, idx) => {
                return<Post key={p.id}{...p}/>
            })}
        </React.Fragment>
    )
}

export default PostList;
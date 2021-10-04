import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const user_info = useSelector((state) => state.user.user);

    React.useEffect(() => {
        if (post_list.length === 0) {
            dispatch(postActions.getPostFB());
        }

    }, []);
    //빈배열이 들어가야 처음에 한번
    return (
        <React.Fragment>
            {/* <Post/> */}
            {
                post_list.map((p, idx) => {
                    if (p.user_info.user_id === user_info?.uid) {
                        return <Post {...p} key={p.id} is_me/>;
                    }else{
                        return <Post {...p} key={p.id} />;
                    }

                })
            }
        </React.Fragment>
    )
}

export default PostList;
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
}

const initialPost = {
    user_info: {
        user_name: "mean0",
        user_profile: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg"},
    image_url: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg",
    contents: "강아지네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00"
}

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
          
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );

  // action creator export
const actionCreators = {
    setPost,
    addPost,
  };
  
  export { actionCreators };
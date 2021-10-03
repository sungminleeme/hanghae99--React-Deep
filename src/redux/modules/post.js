import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {firestore} from "../../shared/firebase";
import {act} from 'react-dom/cjs/react-dom-test-utils.production.min';

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: []
}

const initialPost = {
    id: 0,
    user_info: {
        user_name: "mean0",
        user_profile: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg"
    },
    image_url: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg",
    contents: "강아지네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00"
}

const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");

        postDB
            .get()
            .then((docs) => {
                let post_list = [];
                docs.forEach((doc) => {
                    let _post = doc.data();

                    // ['commenct_cnt', 'contents', ..] reduce 함수 공부 /3-3강 18분 설명
                    let post = Object
                        .keys(_post)
                        .reduce((acc, cur) => {

                            if (cur.indexOf("user_") !== -1) {
                                return {
                                    ...acc,
                                    user_info: {
                                        ...acc.user_info,
                                        [cur]: _post[cur]
                                    }
                                };
                            }
                            return {
                                ...acc,
                                [cur]: _post[cur]
                            }
                        }, {
                            id: doc.id,
                            user_info: {}
                        });

                    // let _post = {     id: doc.id,     ...doc.data() }; let post = {     id:
                    // doc.id,     user_info: {         user_name: _post.user_name,
                    // user_profile: _post.user_profile,         user_id: _post.user_id,     },
                    // image_url: _post.image_url,     contents: _post.contents,     comment_cnt:
                    // _post.comment_cnt,     insert_dt: _post.insert_dt, }; post_list.push(post);
                        post_list.push(post);
                })
                console.log(post_list);

                dispatch(setPost(post_list));
            })
    }
}

// reducer draft 검색하기
export default handleActions({
    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {})
}, initialState);

// action creator export
const actionCreators = {
    setPost,
    addPost,
    getPostFB
};

export {
    actionCreators
};
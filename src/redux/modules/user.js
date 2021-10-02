import {createAction, handleActions} from 'redux-actions';
import {produce} from "immer";

import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie";

import {auth} from "../../shared/firebase";
import firebase from "firebase/app";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// actions creators
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}))

// initialState
const initialState = {
    user: null,
    is_login: false
};

const user_initial = {
    user_name: 'sungmin'
};

//middleware actions
const loginFB = (id, pwd) => {
    // history 페이지 이동 할 때 사용
    return function (dispatch, getState, {history}) {

        auth
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then((res) => {
                auth
                    .signInWithEmailAndPassword(id, pwd)
                    .then((userCredential) => {
                        console.log(userCredential);
                        const user = userCredential.user;
                        // Signed in ...
                        dispatch(
                            setUser({user_name: user.displayName, id: id, user_profile: '', uid: user.uid})
                        );
                        history.push("/");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        console.log(errorCode, errorMessage);
                    });
            });

    }
}

const signupFB = (id, pwd, user_name) => {
    return function (dispatch, getState, {history}) {

        auth
            .createUserWithEmailAndPassword(id, pwd)
            .then((userCredential) => {

                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user);

                auth
                    .currentUser
                    .updateProfile({displayName: user_name})
                    .then(() => {
                        dispatch(
                            setUser({user_name: user_name, id: id, user_profile: '', udi: user.uid})
                        );
                        history.push('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
};

const loginCheckFB = () => {
    return function (dispatch, getState, {history}) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    setUser({user_name: user.displayName, user_profile: "", id: user.email, uid: user.uid})
                );
            } else {
                dispatch(logOut());
            }
        });
    };
};

const logoutFB = () => {
    return function (dispatch, getState, {history}) {
        auth.signOut().then(() => {
            dispatch(logOut());
            history.replace('/');
        });

    };
};

//reducer
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {})
}, initialState);

// action creator export
const actionCreators = {
    logOut,
    getUser,
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB,
};

export {
    actionCreators
};

// const logIn = (user) => { } const reducer = (state={}, action={}) => {
// switch(action.type){         case "LOG_IN" : {             state.user =
// action.user;         }     } } const reducer = handleAction({     [LOG_IN]:
// (state, action) => {     }, }, {});
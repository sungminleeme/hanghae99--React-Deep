import { createAction, handleAction } from 'redux-actions';
import {produce} from "immer";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// actions creators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

// const logIn = (user) => {
    
// }

// const reducer = (state={}, action={}) => {
//     switch(action.type){
//         case "LOG_IN" : {
//             state.user = action.user;
//         }
//     }
// } 
// const reducer = handleAction({
//     [LOG_IN]: (state, action) => {

//     },

// }, {});
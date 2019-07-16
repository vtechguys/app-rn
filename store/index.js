import { createStore, combineReducers } from "redux";


import profileAuthReducer from "./reducer/auth";

const rootReducer = combineReducers({
    profileAuth: profileAuthReducer
});
function configureStore(config){
    return createStore(rootReducer, config);
}
export default configureStore;


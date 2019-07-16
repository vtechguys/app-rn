import { WEB_INDEX } from "./actionTypes";

import { API_URLS } from "../../config";

import API from "../../axios";

export function actionWebIndex(token){
    return function dispatchActionWebIndex(dispatch){
        API
            .post(API_URLS.WEB_INDEX, {
                token: token
            })
            .then(function successAPI(success){

            })
            .catch(function dispatchAPI(e){

            });
    }
}
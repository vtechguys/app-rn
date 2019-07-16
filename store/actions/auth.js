import { 
    SIGN_UP, 
    SIGN_UP_ERRORS, 
   
    SIGN_IN,
    SIGN_IN_ERRORS, 
    SIGN_IN_GOOGLE,
    SIGN_IN_GOOGLE_ERRORS, 
    SIGN_IN_FACEBOOK,
    SIGN_IN_FACEBOOK_ERRORS 
} from "./actionTypes";

import { API_URLS } from "../../config";

import API from "../../axios";

import uuid from "uuid/v4";

import { actionExceptionOccured } from "./error";

// SignUp -----------Start-------------->>>
function actionSignUpNormalSuccess(profile, message){
    return {
        type: SIGN_UP,
        payload: {
            profile,
            message
        }
    };
}
function actionSignUpNormalErrors(errors){
    return {
        type: SIGN_UP_ERRORS,
        payload: {
            errors
        }
    }
}

export function actionSignUpNormalAsync(signUpObj){

    return function dispatchActionSignUpNormal(dispatch){
        const sign_up_obj = {
            first_name: signUpObj.first_name,
            last_name : signUpObj.last_namem,
            email: signUpObj.email,
            password: signUpObj.password,
            confirmPassword: signUpObj.confirmPassword,
            uuid: uuid()
        };
        API
            .post(API_URLS.SIGN_UP, sign_up_obj)
            .then(function successAPI(success){
                let requestStatusCode = success.code;
                let requestSuccess = success.success;
                if(requestStatusCode === 200 && requestSuccess === true){
                    // API CALLED SUCCESSDED SOME RESPONSE WAS RETURNED FROM API.
                    let response = success.data;
                    let apiResponseMessage = response.message;
                    let apiResponseData = response.data;
                    let apiResponseError = response.error;
                    let token = response.seessionId;
                    if(apiResponseData && token){
                        // profile must have been returned...
                        let profile = apiResponseData.profile;
                        profile.token = token;
                        profile.token_type = "normal";
                        dispatch( actionSignUpNormalSuccess(profile, apiResponseMessage) ); 
                    }
                    else if(apiResponseError){
                        dispatch( actionSignUpNormalErrors(apiResponseError, apiResponseMessage) );
                    }
                }
                else{
                    // Its your side error stupid client....
                    dispatch( actionExceptionOccured("SIGN_UP_API_ERROR", success) );

                }
            })
            .catch(function catchAPI(e){
                // Its your side error stupid client....
                dispatch( actionExceptionOccured("SIGN_UP_API_ERROR_CLIENT", e) );

            })
    }

}
// SignUp -------------End--------------->>>




// SignIn -------------Start------------>>>
function actionSignInNormalErrors(errors){
    return {
        type: SIGN_IN_ERRORS,
        payload: {
            errors
        }
    };
}
function actionSignInNormalSuccess(profile, message){
    return {
        type: SIGN_IN,
        payload: {
            profile,
            message
        }
    };
}
export function actionSignInNormal(signInObj){
    return function dispatchActionSignInNormal(dispatch){
        const sign_in_obj = {
            email: signInObj.email,
            password: signInObj.password,
            uuid: uuid()
        };
        API
            .post(API_URLS.SIGN_IN_API, sign_in_obj)
            .then(function successAPI(success){
                let requestStatusCode = success.code;
                let requestSuccess = success.success;
                if(requestStatusCode === 200 && requestSuccess === true){
                    let response = success.data;
                    let apiResponseData = response.data;
                    let apiResponseError = response.error;
                    let apiResponseMessage = response.message;
                    let token = response.seessionId;
                        if(apiResponseData && token){
                            let profile = apiResponseData.profile;
                            profile.token = token;
                            profile.tokenType = "normal";
                            dispatch( actionSignInNormalSuccess(apiResponseData, apiResponseMessage) );

                        }
                        else if(apiResponseError){
                            dispatch( actionSignInNormalErrors(apiResponseError, apiResponseMessage) );
                        }
                }
                else{
                    dispatch( actionExceptionOccured("SIGN_IN_API_ERROR_RESPONSE", success) );
                }
            })
            .catch(function catchAPI(e){

                dispatch( actionExceptionOccured("SIGN_UP_API_ERROR_CLIENT", e) );

            })
    }
}
// SignIn ------------End-------------->>>>

// GoogleSignIn -------Start----------->>>>
export function actionGoogleSignInSuccess(profile){
    return {
        type: SIGN_IN_GOOGLE,
        payload: {
            profile
        }
    };
}
export function actionGoogleSignInError(errors){
    return {
        type: SIGN_IN_GOOGLE_ERRORS,
        payload: {
            errors
        }
    };
}
// GoogleSignIn --------End-------------->>>>>


// FacebookSignIn -------Start----------->>>>
export function actionFacebookSignInSuccess(profile){
    return {
        type: SIGN_IN_FACEBOOK,
        payload: {
            profile
        }
    };
}
export function actionFacebookSignInError(errors){
    return {
        type: SIGN_IN_FACEBOOK_ERRORS,
        payload: {
            errors
        }
    };
}
// FacebookSignIn --------End-------------->>>>>
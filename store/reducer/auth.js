import { 
    SIGN_IN,
    SIGN_UP,
    SIGN_UP_ERRORS,
    SIGN_IN_ERRORS,
    SIGN_IN_GOOGLE,
    SIGN_IN_GOOGLE_ERRORS,
    SIGN_IN_FACEBOOK,
    SIGN_IN_FACEBOOK_ERRORS
    
} from "./../actions/actionTypes";

const authInitialState = {
    message: "",
    token:"",
    token_type:"",
    first_name:"",
    last_name:"",
    image:"",
    email:"",
    uuid: "",
    forms: null
};

function signUpSuccessReducing(state, action){
    let profile = action.payload.profile;
    let message = action.payload.message;
    state = {
        ...state,
        message,
        token: profile.token,
        token_type: profile.tokenType,
        first_name: profile.firstName,
        last_name: profile.lastName,
        image: profile.image,
        email: profile.email,
        uuid: profile.uuid,
        forms: null
    };
    return state;
}

function signUpErrorReducing(state, action){
    let errors = action.payload.errors;
    let message = action.payload.message;
    let formSignUpError = {
        first_name: errors.firstName,
        last_name: errors.lastName,
        email: errors.email,
        password: errors.password,
        confirmPassword: errors.confirmPassword
    };
    let forms = {
        signUp: formSignUpError
    };
    state.forms = null;
    state = {
        ...state,
        message,
        forms
    };
    return state;
}

function signInSuccessReducing(state, action){
    let profile = action.payload.profile;
    let message = action.payload.message;
    state = {
        ...state,
        message,
        token: profile.token,
        token_type: profile.tokenType,
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: profile.email,
        uuid: profile.uuid,
        image: profile.image,
        forms: null
    };
    return state;
}
function signInErrorsReducing(state, action){
    let errors = action.payload.errors;
    let message = action.payload.message;
    let formSignInError = {
       
        email: errors.email,
        password: errors.password,
       
    };
    let forms = {
        signIn: formSignInError
    };
    state.forms = null;
    state = {
        ...state,
        message,
        forms
    };
    return state;
}

export default function authReducer(state = authInitialState, action){
    switch(action.type){
        case SIGN_UP:
            return signUpSuccessReducing(state, action);
        case SIGN_UP_ERRORS:
            return signUpErrorReducing(state, action);
        case SIGN_IN:
            return signInSuccessReducing(state, action);
        case SIGN_IN_ERRORS:
            return signInErrorsReducing(state, action);
        default:
            return state;
    }
}

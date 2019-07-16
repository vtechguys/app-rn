import { EXCEPTION } from "./actionTypes";
export function actionExceptionOccured(exceptionAt, e){
    return {
        type: EXCEPTION,
        payload: {
            error: {
                message: "Something went wrong. Check internet connectivity or try again later.",
                exception_at: exceptionAt,
                error: e
            }
        }
    };
}

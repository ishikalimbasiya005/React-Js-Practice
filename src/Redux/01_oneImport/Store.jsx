import { createStore } from "redux";

const abc = {
    Greetingmsg : 'Hi Guys'
}

function reducer(state = abc , action){
    switch(action.type){
        case 'msg' :
            return {
                Greetingmsg : 'Hello World'
            }
            break;
        default:
            return state
            break;
    }
}

const Store = createStore(reducer);

export default Store;

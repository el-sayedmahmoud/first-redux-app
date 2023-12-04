import counterReduser from "./counterReduser";
import loggedReduser  from "./loggedReduser";
import { combineReducers } from "redux";


const redusers = combineReducers({
    counter : counterReduser,
    logged : loggedReduser,
})

export default redusers;
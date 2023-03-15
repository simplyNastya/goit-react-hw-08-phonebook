import { combineReducers } from "redux";

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import authReducer from "./auth/auth-slice";

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
})

export default rootReducer;
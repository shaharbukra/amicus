import { REQUEST_SW_PEOPLE } from "../actions/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_SW_PEOPLE:
      return action.people;
    default:
      return state;
  }
}

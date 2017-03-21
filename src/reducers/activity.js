import {CHANGE_ACTIVITY} from '../actions/activity';

function changeActivity(state, action) {
    return {
        state: action.state,
        order_id: action.order_id,
    };
}

export default function activityReducer(state = {}, action = {}) {
    switch(action.type) {
    case CHANGE_ACTIVITY:
        return changeActivity(state, action);
    default:
        return state;
    }
}

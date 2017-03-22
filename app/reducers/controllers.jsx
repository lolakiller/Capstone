import axios from 'axios'

const SET_DEVICE_TYPE = "SET_DEVICE_TYPE"

export const setDeviceType = deviceType => ({
    type: SET_DEVICE_TYPE, 
    deviceType
})


var initialState = {
    deviceType: ''
}

const reducer = (state=initialState, action) => {
    
    let newState = Object.assign({}, state)
    
    switch(action.type){
        case SET_DEVICE_TYPE:
            newState.deviceType = action.deviceType;

        default:
            return state;
    }
    return newState;
}

export default reducer;
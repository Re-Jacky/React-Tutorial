import { ACTION_WEATHER_FETCHED } from '../constants/constants'

const initialState = {
    location: '',
    desc: '',
    avgTmp: '',
    nightTmp: null,
    dayTmp: null,
    windSpeed: null,
    wind: '',
    updateTime: null
};

const weatherReducer = function(state = initialState, action) {
    switch(action.type) {
        case ACTION_WEATHER_FETCHED:
            const data = action.payload;
            return {
                desc: data.wea,
                location: data.city,
                avgTmp: data.tem,
                nightTmp: data.tem_night,
                dayTmp: data.tem_day,
                windSpeed: data.win_speed + ' ' + data.win_meter,
                wind: data.win,
                updateTime: data.update_time
            };
        default:
            return state;            
    }
}

export default weatherReducer;
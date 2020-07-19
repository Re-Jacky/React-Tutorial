import { ALLOW_REGISTRATION, DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT } from './actions/types';

export const toggleSetting = (action) => {
    const settings = JSON.parse(localStorage.getItem('settings'));

    if (action == ALLOW_REGISTRATION){
        settings.allowRegistration = !settings.allowRegistration
    } 
    else if(action == DISABLE_BALANCE_ON_ADD){
        settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd
    }
    else if(action == DISABLE_BALANCE_ON_EDIT){
        settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit
    }
    else {
        return null
    }

    localStorage.setItem('settings',JSON.stringify(settings));
    return settings;
}
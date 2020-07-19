import 
{ DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT, 
  ALLOW_REGISTRATION} 
from './types';
import { toggleSetting } from '../localStorage';

export const setDisableBalanceOnAdd = () => {
    const newSetting = toggleSetting(DISABLE_BALANCE_ON_ADD)
    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload: newSetting.disableBalanceOnAdd
    }
}

export const setDisableBalanceOnEdit = () => {
    const newSetting = toggleSetting(DISABLE_BALANCE_ON_EDIT)
    return {
        type: DISABLE_BALANCE_ON_EDIT,
        payload: newSetting.disableBalanceOnEdit
    }
}

export const setAllowRegistration = () => {
    const newSetting = toggleSetting(ALLOW_REGISTRATION)
    return {
        type: ALLOW_REGISTRATION,
        payload: newSetting.allowRegistration
    }
}
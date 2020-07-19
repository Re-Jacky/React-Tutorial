import {NOTIFY_USERS} from './types';

export const notifyUsers = (message, messageType)=>{
    return {
        type: NOTIFY_USERS,
        message,
        messageType
    }
}
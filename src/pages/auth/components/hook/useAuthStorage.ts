import { useLocalStorage, useSessionStorage } from 'usehooks-ts';

export type IUserStorage = {
    token: string;
    name: string;
};

export const useAuthStorage = () => {
    const [localUser, setLocalUser, removeLocalUser] = useLocalStorage('user', {});
    const [sessionUser, setSessionUser, removeSessionUser] = useSessionStorage('user', {});

    const saveUser = (user: IUserStorage, remember: boolean) => {
        if (remember) {
            setLocalUser(user);
            removeSessionUser();
        } else {
            setSessionUser(user);
            removeLocalUser();
        }
    };

    const removeAllStorage = () => {
        removeSessionUser();
        removeLocalUser();
    };

    return {
        localUser,
        sessionUser,
        saveUser,
        removeAllStorage,
        removeLocalUser,
        removeSessionUser,
    };
};

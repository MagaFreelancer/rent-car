import { useLocalStorage, useSessionStorage } from 'usehooks-ts';

export const useAuthStorage = () => {
    const [localUser, setLocalUser, removeLocalUser] = useLocalStorage('user', {});
    const [sessionUser, setSessionUser, removeSessionUser] = useSessionStorage('user', {});

    const saveUser = (user: any, remember: boolean) => {
        if (remember) {
            setLocalUser(user);
            removeSessionUser();
        } else {
            setSessionUser(user);
            removeLocalUser();
        }
    };

    return { localUser, sessionUser, saveUser, removeLocalUser, removeSessionUser };
};

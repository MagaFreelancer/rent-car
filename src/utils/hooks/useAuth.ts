const useAuth = () => {
    const data: { status: boolean; storage: any } = {
        status: false,
        storage: null,
    };

    const localUser = localStorage.getItem('user');
    const sessionUser = sessionStorage.getItem('user');

    if (localUser !== null) {
        data.storage = JSON.parse(localUser);
        data.status = true;
    } else if (sessionUser !== null) {
        data.storage = JSON.parse(sessionUser);
        data.status = true;
    }

    return data;
};

export default useAuth;

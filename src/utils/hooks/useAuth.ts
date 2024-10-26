const useAuth = () => {
    const data: { status: boolean; storage: any } = {
        status: false,
        storage: null,
    };

    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
        data.storage = user;
        data.status = true;
    } else if (sessionStorage.getItem('user')) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        data.storage = user;
        data.status = true;
    }

    return data;
};

export default useAuth;

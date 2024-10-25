const useAuth = () => {
    return !!sessionStorage.getItem('user');
};

export default useAuth;

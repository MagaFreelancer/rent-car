import { useState } from 'react';
interface UsePasswordInputReturn {
    show: boolean;
    toggleInputType: () => void;
}
const usePasswordInput = (): UsePasswordInputReturn => {
    const [show, setShow] = useState<boolean>(true);
    const toggleInputType = () => setShow(show => !show);

    return {
        show,
        toggleInputType,
    };
};

export default usePasswordInput;

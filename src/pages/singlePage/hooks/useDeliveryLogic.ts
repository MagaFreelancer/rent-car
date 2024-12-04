import { IRegistrationObj } from './useCarForm';

interface IUseDeliveryLogic {
    deliveryOption: string;
    setDeliveryOption: (value: string) => void;
    registrationObj: {
        deliveryOption: number;
    };
    setRegistrationObj: React.Dispatch<React.SetStateAction<IRegistrationObj>>;
}

const useDeliveryLogic = ({ setDeliveryOption, setRegistrationObj }: IUseDeliveryLogic) => {
    const onSelectChange = (value: string) => {
        setDeliveryOption(value);
        const deliveryPrice = value === 'delivery' ? 100 : 0;
        setRegistrationObj((prev: IRegistrationObj) => ({
            ...prev,
            deliveryOption: deliveryPrice,
        }));
    };

    return {
        onSelectChange,
    };
};

export default useDeliveryLogic;

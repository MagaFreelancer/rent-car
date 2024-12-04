interface IuseDeliveryLogic {
    registrationObj: any;
    setRegistrationObj: any;
    watch: any;
    setValue: any;
}
const useDeliveryLogic = ({
    watch,
    setValue,
    setRegistrationObj,
    registrationObj,
}: IuseDeliveryLogic) => {
    const deliveryOption = watch('deliveryOption');
    const onSelectChange = (value: string) => {
        let sum = 0;
        setValue('deliveryOption', value);
        if (value === 'delivery') {
            sum = 100;
        }
        setRegistrationObj({
            ...registrationObj,
            deliveryOption: sum,
        });
    };

    return {
        deliveryOption,
        onSelectChange,
    };
};

export default useDeliveryLogic;

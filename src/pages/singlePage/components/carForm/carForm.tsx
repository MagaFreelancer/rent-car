import React from 'react'

import { Button } from "@/shared/button"
import CarAddressForm from './components/carAddressForm';
import CarDateForm from './components/carDateForm';
import CarDriverForm from './components/carDriverForm';

const CarForm = ({ onSelectChange, deliveryOption, date, setDate }: any) => {

    return (

        <form >
            <CarAddressForm onSelectChange={onSelectChange} deliveryOption={deliveryOption} />
            <CarDateForm date={date} setDate={setDate} />
            <CarDriverForm />
            <Button className='w-full py-6 bg-blue hover:bg-blue/90'>Забронировать</Button>
        </form>
    )
}

export default CarForm
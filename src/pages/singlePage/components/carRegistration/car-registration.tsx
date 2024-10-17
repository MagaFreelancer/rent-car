import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/dialog.tsx';

import { Button } from '@/shared/button';
import CarForm from '../carForm/car-form';
const CarRegistration = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Перейти к оформлению</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[555px]">
                <DialogHeader>
                    <DialogTitle>Оформление</DialogTitle>
                    <DialogDescription>Пожалуйста, введите данные для оформления</DialogDescription>
                </DialogHeader>
                <div className="">
                    <CarForm />
                </div>
                <DialogFooter>3</DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CarRegistration;

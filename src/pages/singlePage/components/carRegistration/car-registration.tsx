import {
    Dialog,
    DialogContent,
    DialogDescription,
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
            <DialogContent className="sm:max-w-[855px]">
                <DialogHeader>
                    <DialogTitle>Оформление</DialogTitle>
                    <DialogDescription>Пожалуйста, введите данные для оформления</DialogDescription>
                </DialogHeader>
                <CarForm />
            </DialogContent>
        </Dialog>
    );
};

export default CarRegistration;

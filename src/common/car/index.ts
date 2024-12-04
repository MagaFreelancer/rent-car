interface ITextWithSupp {
    text: string;
    supp: string | null;
}
interface IReview {
    id: number;
    name: string;
    rating: number;
    text: string;
    createdDate: string;
}
interface IRentDate {
    from: string;
    to: string;
}
export interface ICar {
    id: number;
    brand: string;
    model: string;
    price: number;
    imgs: string[];
    year: number;
    sale: number;
    hit: boolean;
    new: boolean;
    delivery: boolean;
    carRentDate: IRentDate;
    carDetails: {
        rentalRules: Record<string, ITextWithSupp>; // Все свойства имеют одинаковую структуру
        carSpecifications: Record<string, ITextWithSupp>; // То же самое
    };
    reviews: IReview[];
}

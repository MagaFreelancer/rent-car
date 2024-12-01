import { TypeBrands } from '@/redux/slice/filters/filters-slice.ts';
import BrandItem from '@/components/filters/components/brands-sort/components/brand-item.tsx';

interface IBrandListProps {
    brands: TypeBrands[];
}

const BrandList = ({ brands }: IBrandListProps) => {
    return (
        <ul>
            {brands.map((item, index) => (
                <BrandItem key={index} value={item.value} status={item.status} label={item.label} />
            ))}
        </ul>
    );
};

export default BrandList;

import { TypeSort } from '@/redux/slice/filters/filters-slice.ts';
import ItemSort from '@/components/filters/components/sort/component/item-sort.tsx';

interface IListSort {
    list: TypeSort[];
}

const ListSort = ({ list }: IListSort) => {
    return (
        <ul>
            {list.map((item, i) => (
                <ItemSort key={i} status={item.status} value={item.value} label={item.label} />
            ))}
        </ul>
    );
};

export default ListSort;

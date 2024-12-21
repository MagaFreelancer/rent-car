import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import {
    getBrands,
    getBrandActiveItem,
    getDrives,
    getDrivesActiveItems,
    getSort,
    getSortActiveItem,
} from '@/redux/slice/filters/filters-selectors.ts';
import {
    setChangeBrands,
    setChangeSort,
    setToggleDrives,
} from '@/redux/slice/filters/filters-slice.ts';
import FilterPrice from '@/components/filters/components/filter-price.tsx';
import Sort from '@/components/filters/components/sort/sort.tsx';
import BrandsSort from '@/components/filters/components/brands-sort/brands-sort.tsx';
import FilterDrives from '@/components/filters/components/filter-drives/filter-drives.tsx';

const Filters = () => {
    const brandsActiveItem = useAppSelector(getBrandActiveItem);
    const drivesActiveItems = useAppSelector(getDrivesActiveItems);
    const sortActive = useAppSelector(getSortActiveItem);
    const sort = useAppSelector(getSort);
    const brands = useAppSelector(getBrands);
    const drives = useAppSelector(getDrives);
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between py-5">
            <div className="flex gap-3">
                <BrandsSort
                    onChange={value => dispatch(setChangeBrands(value))}
                    list={brands}
                    activeItem={brandsActiveItem}
                />

                <FilterDrives
                    onChange={value => dispatch(setToggleDrives(value))}
                    drives={drives}
                    activeItems={drivesActiveItems}
                />

                <FilterPrice />

                {/*<FiltersAll />*/}
            </div>

            <Sort
                onChange={value => dispatch(setChangeSort(value))}
                title={sortActive?.label}
                list={sort}
            />
        </div>
    );
};

export default Filters;

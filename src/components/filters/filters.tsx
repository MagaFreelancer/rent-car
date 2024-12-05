import { useAppDispatch, useAppSelector } from '@/redux/store.ts';
import {
    getBrands,
    getBrandActiveItem,
    getDrives,
    getDrivesActiveItems,
    getPrice,
    getSort,
    getSortActiveItem /*getModels,*/,
} from '@/redux/slice/filters/filters-selectors.ts';
import {
    setChangeBrands,
    setChangeSort /*setModelsChange,*/,
    setToggleDrives,
} from '@/redux/slice/filters/filters-slice.ts';
import FilterPrice from '@/components/filters/components/filter-price.tsx';
import Sort from '@/components/filters/components/sort/sort.tsx';
import BrandsSort from '@/components/filters/components/brands-sort/brands-sort.tsx';
import FilterDrives from '@/components/filters/components/filter-drives/filter-drives.tsx';
import FiltersAll from '@/components/filters/components/filters-all/filters-all.tsx';
// import FilterModel from '@/components/filters/components/filter-model/filter-model.tsx';

const Filters = () => {
    const brandsActiveItem = useAppSelector(getBrandActiveItem);
    const drivesActiveItems = useAppSelector(getDrivesActiveItems);
    const sortActive = useAppSelector(getSortActiveItem);
    const sort = useAppSelector(getSort);
    const price = useAppSelector(getPrice);
    const brands = useAppSelector(getBrands);
    const drives = useAppSelector(getDrives);
    // const models = useAppSelector(getModels);
    // const modelAllItem = useAppSelector((state) => state.filters.model.all);
    const dispatch = useAppDispatch();

    // const newList = brandsActiveItem?.value === 'all' ? [] : models[brandsActiveItem?.value];

    return (
        <div className="flex justify-between py-5">
            <div className="flex gap-3">
                <BrandsSort
                    onChange={value => dispatch(setChangeBrands(value))}
                    list={brands}
                    activeItem={brandsActiveItem}
                />

                {/*<FilterModel*/}
                {/*    onChange={(value: string) => dispatch(setModelsChange(value))}*/}
                {/*    modelAllItem={modelAllItem}*/}
                {/*    list={newList}*/}
                {/*/>*/}

                <FilterDrives
                    onChange={value => dispatch(setToggleDrives(value))}
                    drives={drives}
                    activeItems={drivesActiveItems}
                />

                <FilterPrice price={price} />

                <FiltersAll />
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

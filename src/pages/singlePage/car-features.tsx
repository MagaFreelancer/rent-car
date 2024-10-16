import clsx from 'clsx';
import { LifeBuoy } from 'lucide-react';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { EngineIcon } from '@/shared/icons';
import CarItem from './car-item';
const CarFeatures = ({ obj }: any) => {
    const featureItems = [
        {
            icon: <LocalGasStationIcon className="h-5 w-5" />,
            label: `${obj.fuel}L`,
        },
        {
            icon: <LifeBuoy className="h-5 w-5" />,
            label: obj.transmission,
        },
        {
            icon: <PeopleAltIcon className="h-5 w-5" />,
            label: `${obj.capacity} People`,
        },
        {
            icon: <EngineIcon className="h-6 w-6 fill-[#90A3BF]" />,
            label: `${obj.engine}L`,
        },
        {
            icon: <CalendarTodayIcon className="h-5 w-5" />,
            label: obj.year,
        },
    ];
    const itemClasses = clsx('flex items-center gap-[5px] text-grey');

    return (
        <div className="mb-5 border-dashed border-b border-[#90A3BF]">
            <h3 className="text-3xl mb-5 ">Car Features</h3>
            <ul className="grid grid-cols-2 gap-y-5 mb-6">
                {featureItems.map((item, index) => (
                    <CarItem
                        key={index}
                        className={itemClasses}
                        icon={item.icon}
                        label={item.label}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CarFeatures;

import clsx from 'clsx';

interface IPropsSliderBullet {
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
}

const SliderBullet = ({ className, onClick, isActive }: IPropsSliderBullet) => {
    return (
        <span
            onClick={onClick}
            className={clsx(
                'inline-block h-1 w-10 bg-black transition-opacity duration-700 cursor-pointer',
                {
                    'opacity-100': isActive, // Полная непрозрачность для активного элемента
                    'opacity-30 hover:opacity-100': !isActive, // Прозрачность для неактивных
                },
                className
            )}
        ></span>
    );
};

export default SliderBullet;

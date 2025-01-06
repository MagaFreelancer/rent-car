import { Skeleton } from '@/shared/skeleton.tsx';

const ProfileSkeleton = () => {
    return (
        <>
            <Skeleton className="max-w-[400px] h-[48px] rounded-xl mb-5" />
            <Skeleton className="max-w-[150px] h-[15px] rounded-xl mb-2" />
            <Skeleton className="w-full h-[40px] rounded-xl mb-2" />
            <Skeleton className="w-full h-[40px] rounded-xl mb-10" />
            <Skeleton className="max-w-[150px] h-[15px] rounded-xl mb-2" />
            <Skeleton className="w-full h-[40px] rounded-xl mb-2" />
            <Skeleton className="w-full h-[40px] rounded-xl mb-8" />
            <Skeleton className="max-w-[120px] h-[30px] rounded-xl" />
        </>
    );
};

export default ProfileSkeleton;

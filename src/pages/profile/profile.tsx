import NavMenu from '@/pages/profile/components/nav-menu.tsx';
import Container from '@/shared/container.tsx';
import { Route, Routes } from 'react-router-dom';
import ProfileUser from '@/pages/profile/components/profile-user/profile-user.tsx';
import { useAppSelector } from '@/redux/store.ts';
import { Suspense } from 'react';
import ProfileSkeleton from '@/pages/profile/components/profile-user/components/profile-skeleton.tsx';

const Profile = () => {
    const isLogged = useAppSelector(state => state.user.isLogged);
    const userData = useAppSelector(state => state.user.data.data);

    return (
        <Container className="grid pt-7 grid-cols-[300px_1fr] gap-x-7">
            <NavMenu />
            <div className="bg-white p-8 rounded-lg">
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <Suspense>
                                {isLogged ? (
                                    <ProfileUser userData={userData} />
                                ) : (
                                    <ProfileSkeleton />
                                )}
                            </Suspense>
                        }
                    />
                    <Route path="/applications" element={'text'} />
                </Routes>
            </div>
        </Container>
    );
};

export default Profile;

import NavMenu from '@/pages/profile/components/nav-menu.tsx';
import Container from '@/shared/container.tsx';
import { Route, Routes } from 'react-router-dom';
import ProfileUser from '@/pages/profile/components/profile-user/profile-user.tsx';

const Profile = () => {
    return (
        <Container className="grid pt-7 grid-cols-[300px_1fr] gap-x-7">
            <NavMenu />
            <div className="bg-white p-8 rounded-lg">
                <Routes>
                    <Route path="/*" element={<ProfileUser />} />
                    <Route path="/applications" element={'text'} />
                </Routes>
            </div>
        </Container>
    );
};

export default Profile;

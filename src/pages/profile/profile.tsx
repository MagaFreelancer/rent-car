import NavMenu from '@/pages/profile/components/nav-menu.tsx';
import Container from '@/shared/container.tsx';

const Profile = () => {
    return (
        <Container className="grid pt-7 grid-cols-[300px_1fr] gap-x-7">
            <NavMenu />
            <div className="bg-white">test</div>
        </Container>
    );
};

export default Profile;

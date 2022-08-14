import Layout from '../components/Layout';
import UserCard from '../components/UserCard';
import { selectUser } from '../features/user/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';
const Contact = () => {
  const user: UserType = useAppSelector(selectUser);
  return (
    <Layout title="contact">
      {user.uname !== '' ? <UserCard user={user} /> : <p>login is needed</p>}
    </Layout>
  );
};

export default Contact;

import Card from '../components/Card';
import Layout from '../components/Layout';
import { selectUser } from '../features/user/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';
const Contact = () => {
  const user: UserType = useAppSelector(selectUser);
  console.log('🚀 ~ file: contact-page.tsx ~ line 7 ~ Contact ~ user', user);
  return (
    <Layout title="contact">
      {user.uname !== '' ? <Card user={user} /> : <p>login is needed</p>}
    </Layout>
  );
};

export default Contact;

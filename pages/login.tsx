import { signIn, signOut, useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import { useLoginCheck } from '../hooks/useLoginCheck';

const Login = () => {
  const { data: session } = useSession();
  const isLogin = useLoginCheck();

  if (session) {
    return (
      <Layout>
        Signed in as {session.user!.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </Layout>
    );
  }
  return (
    <Layout>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </Layout>
  );
};

export default Login;

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { login, logout } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks/useRTK';

export const useLoginCheck = (): string => {
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();
  useEffect(() => {
      if (status === "authenticated") {
        dispatch(
          login({
            uname: session.user!.name,
            photoUrl: session.user!.image,
          })
        );
      } else {
        dispatch(logout());
      }
  }, [dispatch, session, status]);
  return status
};
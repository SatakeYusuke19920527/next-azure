import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { login, logout, selectUser } from '../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';

export const useLoginCheck = (): string => {
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();
  const user: UserType = useAppSelector(selectUser);
  useEffect(() => {
    if (status === "authenticated") {
        if(user.uname !== "") return 
        dispatch(
          login({
            uname: session.user!.name,
            photoUrl: session.user!.image,
          })
        );
    } else {
      if(user.uname === "") return 
        dispatch(logout());
      }
  }, [dispatch, session, status, user]);
  return status
};
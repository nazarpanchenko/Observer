import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthProps {
  children: ReactElement;
}

const Auth: FC<IAuthProps> = ({ children }: IAuthProps): ReactElement => {
  const navigate = useNavigate();

  const accessToken: string | null = localStorage.getItem('accessToken') || null;
  if (!accessToken) {
    navigate('/signin');
  }
  return children;
};

export default Auth;

import { useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../middlewares/redux/actions/auth';
import { setUserToken } from '../../middlewares/helpers';

const Auth = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const userToken: string | any  = params.get('token');

  useEffect(() => {
    setUserToken(userToken);
    dispatch(auth(navigate, userToken));
  }, [dispatch, userToken, navigate]);

  return (
    <div></div>
  );
};

export default Auth;
import s from './ProfileHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../middlewares/redux/hooks';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../../middlewares/redux/actions/auth';
import { IconButton } from '../Buttons/IconButton';

export const ProfileHeader = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={s.container}>
      <div className={s.headerImage}>
        <div className={s.userdata}>
          <div className={s.imageContainer}>
            <img src={currentUser?.profilePic || undefined} alt="" width="100%" />
          </div>
          <h2>{currentUser?.username}</h2>
          <p>{currentUser?.role}</p>
          <IconButton solid icon={faRightFromBracket} onClick={handleLogout}>Cerrar Sesión</IconButton>
        </div>
      </div>
    </div>
  )
}

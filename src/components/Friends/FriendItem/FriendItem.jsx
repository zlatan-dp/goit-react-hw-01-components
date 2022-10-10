import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <div className={css.frienditem_wrap}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendname}>{name}</p>
    </div>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

import css from './FriendsList.module.css';
import { FriendItem } from 'components/Friends/FriendItem/FriendItem';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.wrap}>
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <li className={css.friendlist_item} key={friend.id}>
            <FriendItem friends={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

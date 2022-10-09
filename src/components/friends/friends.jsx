import css from './friends.module.css';
import { FriendItem } from 'components/friend-item/frienditem';

export const Friends = ({ friends }) => {
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

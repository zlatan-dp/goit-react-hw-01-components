import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList/FriendsList';
import { Transaction } from './Transactions/Transaction';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploading Stats" data={data} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
};

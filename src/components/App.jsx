import { ProfUser } from './ProfUser/ProfUser';
import { Stats } from './Stats/Stats';
import { FriendsList } from './Friends/FriendsList/FriendsList';
import { Transaction } from './Transactions/Transaction';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <ProfUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Uploading Stats" data={data} />
      <Stats data={data} />
      <FriendsList friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
};

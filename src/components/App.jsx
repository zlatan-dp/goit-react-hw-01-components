import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { Friends } from './friends/friends';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <>
      <Profile profile={user} />
      <Statistics title="Uploading Stats" data={data} />
      <Friends friends={friends} />
    </>
  );
};

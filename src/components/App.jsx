import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile profile={user} />
      <Statistics title="Uploading Stats" data={data} />
    </>
  );
};

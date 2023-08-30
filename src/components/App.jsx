import friends from './Data/friends.json';
import data from './Data/data.json';
import user from './Data/user.json';
import Transactions from './Data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile users={user}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={Transactions} />
    </>
  );
};

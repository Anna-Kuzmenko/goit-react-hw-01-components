import CreateProfile from '../Profile/User';
import FriendList from '../Friendlist/FriendList';
import Statistics from '../Statistics/Statistics';
import StatList from '../StatList/StatList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export default function App() {
  return (
    <Container>
      <CreateProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats">
        <StatList stats={data} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

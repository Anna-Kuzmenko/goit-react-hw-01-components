import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import CreateProfile from '../components/Profile/User';
import FriendList from '../components/Friendlist/FriendList';
import Statistics from '../components/Statistics/Statistics';
import StatList from '../components/StatList/StatList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <CreateProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats">
        <StatList stats={data} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

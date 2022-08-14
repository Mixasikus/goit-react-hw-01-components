import Profile from 'components/Profile/Profile';
import StatisticsList from 'components/Statistics/Statistics'
import FriendList from 'components/Friends/Friends';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json'
import { Container } from 'components/App/App.styled';

export default function App () {
  return <Container><Profile
  key={user.tag}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  statsFollowers={user.stats.followers}
  statsViews={user.stats.views}
  statsLikes={user.stats.likes}/>
  <StatisticsList title="Upload stats" items={data} />
  <FriendList items={friends}/></Container>
};

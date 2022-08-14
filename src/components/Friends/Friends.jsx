import FriendListItem from "./FriendsListItem"
import { Friendlist} from "./Friends.styled"

export default function FriendList({ items }) {
   return (<Friendlist>
    {items.map(item => (<FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />))}</Friendlist>
    )
}

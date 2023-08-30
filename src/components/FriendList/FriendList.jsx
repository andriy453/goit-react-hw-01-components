import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends && friends.map((friend)=>{
        return(
          <FriendListItem  key={nanoid()} friends={friend} />
        )
      })}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
const FriendList = ({ friends }) => {
  return (
      <ul className={css.friend_list}>
        <FriendListItem friends={friends[0]} />
        <FriendListItem friends={friends[1]} />
        <FriendListItem friends={friends[2]} />
        <FriendListItem friends={friends[3]} />
        <FriendListItem friends={friends[4]} />
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

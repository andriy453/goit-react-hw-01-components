import css from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ friends }) => {
    const isOnline = friends.isOnline;
  return (
    <>
      <li className={css.item} key={friends.id}>
        {isOnline === true ? (
          <span className={css.status}>{friends.isOnline}</span>
        ) : (
          <span className={css.status_red}>{friends.isOnline}</span>
        )}

        <img
          className={css.avatar}
          src={friends.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friends.name}</p>
      </li>
    </>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

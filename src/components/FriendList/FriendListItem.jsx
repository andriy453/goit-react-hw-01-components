import css from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendListItem = ({ friends }) => {
  const {id,isOnline,avatar,name} =friends
  return (
    <>
      <li className={css.item} key={id}>
        {isOnline === true ? (
          <span className={css.status}>{isOnline}</span>
        ) : (
          <span className={css.status_red}>{isOnline}</span>
        )}

        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{name}</p>
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

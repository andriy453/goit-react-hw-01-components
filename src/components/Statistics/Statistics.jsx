import css from './Statistics.module.css';
import PropTypes from 'prop-types'; 
const Statistics = ({ title = '', stats = ''}) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.stat_list}>
          <li key={stats[0].id} className={css.item}  style={{background:getRandomHexColor()}}>
            <span className={css.label}>{stats[0].label}</span>
            <span className={css.percentage}>{stats[0].percentage}%</span>
          </li>
          <li key={stats[1].id} className={css.item} style={{background: getRandomHexColor()}}>
            <span className={css.label}>{stats[1].label}</span>
            <span className={css.percentage}>{stats[1].percentage}%</span>
          </li>
          <li key={stats[2].id} className={css.item} style={{background:getRandomHexColor()}}>
            <span className={css.label}>{stats[2].label}</span>
            <span className={css.percentage}>{stats[2].percentage}%</span>
          </li>
          <li key={stats[3].id} className={css.item} style={{background:getRandomHexColor()}}>
            <span className={css.label}>{stats[3].label}</span>
            <span className={css.percentage}>{stats[3].percentage}%</span>
          </li>
          <li key={stats[4].id} className={css.item} style={{background:getRandomHexColor()}}>
            <span className={css.label}>{stats[4].label}</span>
            <span className={css.percentage}>{stats[4].percentage}%</span>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
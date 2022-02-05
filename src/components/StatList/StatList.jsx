import PropTypes from 'prop-types';

import StatItem from '../StatItem/StatItem';

import { StatisticsList, StatItems } from './StatList.styled';

function StatList({ stats }) {
  return (
    <StatisticsList>
      {stats.map(stat => (
        <StatItems key={stat.id}>
          <StatItem label={stat.label} percentage={stat.percentage} />
        </StatItems>
      ))}
    </StatisticsList>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatList;

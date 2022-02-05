import PropTypes from 'prop-types';

import { StatisticsSection, StatisticTitle } from './Statistics.styled';

function Statistics({ title, children }) {
  return (
    <StatisticsSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      {children}
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;

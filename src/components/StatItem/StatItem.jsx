import PropTypes from 'prop-types';

import { ItemLabel, ItemPercentage } from './StatItem.styled';

function StatItem({ label, percentage }) {
  return (
    <>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;

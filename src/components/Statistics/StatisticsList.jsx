import PropTypes from 'prop-types'
import {StatisticsItem, StatisticsLabel} from './Statistics.styled'

export default function Statistics({statsLabel, statsPercentage}) {
  return (<StatisticsItem>
    <StatisticsLabel>{statsLabel}</StatisticsLabel>
      <span className='percentage'>{statsPercentage}</span>
    </StatisticsItem>
);
}

Statistics.propTypes = {
  statsLabel: PropTypes.string.isRequired,
  statsPercentage: PropTypes.string.isRequired,
}

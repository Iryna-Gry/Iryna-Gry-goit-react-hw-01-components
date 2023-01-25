import PropTypes from 'prop-types';
import {
  Section,
  StatList,
  SectionTitle,
  StatListItem,
  StatListElementLabel,
  StatListElementValue,
} from 'components';

import { getRandomColor } from 'utils/getRandomColor';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatList>
        {stats.map(item => (
          <StatListItem
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <StatListElementLabel>{item.label}</StatListElementLabel>
            <StatListElementValue>{item.percentage}%</StatListElementValue>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

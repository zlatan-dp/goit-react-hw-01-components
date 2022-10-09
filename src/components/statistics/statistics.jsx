import PropTypes from 'prop-types';
import { StatsItem } from 'components/stats-item/stats-item';
import { Section, Title, StatList, StatListItem } from './statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(d => (
          <StatListItem key={d.id}>
            <StatsItem data={d} />
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

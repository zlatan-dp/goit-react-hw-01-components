import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  Wrap,
  StatLabel,
  StatPercentage,
} from './Stats.styled';

export const Stats = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(d => (
          <StatListItem key={d.id}>
            <Wrap
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <StatLabel>{d.label}</StatLabel>
              <StatPercentage>{d.percentage}%</StatPercentage>
            </Wrap>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

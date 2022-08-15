import Statistic from './StatisticsList';
import { SectionStatistics, Title, MetadataList } from './Statistics.styled';

export default function StatisticsList({ items }) {
  return (
    <SectionStatistics>
      <Title>Upload stats</Title>
      <MetadataList>
        {items.map(item => (
          <Statistic
            key={item.id}
            statsLabel={item.label}
            statsPercentage={item.percentage + `%`}
          />
        ))}
      </MetadataList>
    </SectionStatistics>
  );
}

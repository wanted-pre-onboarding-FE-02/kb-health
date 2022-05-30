import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { CallbackArgs } from 'victory-core';

interface IDataSet {
  status: string;
  score: number;
}

interface IProps {
  data: IDataSet[];
  unit?: boolean;
}

const ScoreChart = ({ unit = true, data }: IProps) => {
  return (
    <VictoryChart width={320} height={140} padding={{ top: -40, bottom: 40, right: 50, left: 50 }}>
      <VictoryAxis
        crossAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fontSize: 14, padding: 10, fontWeight: 900 },
        }}
      />
      <VictoryBar
        barWidth={40}
        x='status'
        y='score'
        style={{
          data: {
            fill: ({ index }) => (index === 0 ? '#ffc000' : '#ff833d'),
          },
        }}
        data={data}
      />
      <VictoryLine
        data={data}
        x='status'
        y='score'
        style={{
          data: {
            stroke: 'grey',
            strokeWidth: 1,
          },
        }}
      />
      <VictoryScatter
        style={{
          data: {
            fill: ({ index }) => (index === 0 ? 'grey' : 'white'),
            stroke: 'grey',
            strokeWidth: 1,
          },
          labels: {
            fontSize: 14,
            fill: ({ index }: CallbackArgs) => (index === 0 ? '#ff833d' : 'grey'),
            fontWeight: 700,
          },
        }}
        labels={({ datum }) => `${datum.score.toLocaleString()}${unit ? '점' : ''}`}
        x='status'
        y='score'
        symbol='circle'
        size={4}
        data={data}
      />
    </VictoryChart>
  );
};

export default ScoreChart;

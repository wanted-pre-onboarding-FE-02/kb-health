import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { CallbackArgs } from 'victory-core';

interface IDataSet {
  status: string;
  score: number;
}

interface IProps {
  data: IDataSet[];
}

const ScoreChart = ({ data }: IProps) => {
  return (
    <VictoryChart width={260} height={200} padding={{ top: 0, bottom: 40, right: 60, left: 60 }}>
      <VictoryAxis
        crossAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 10, fontWeight: 900 },
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
        labels={({ datum }) => `${datum.score}점`}
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

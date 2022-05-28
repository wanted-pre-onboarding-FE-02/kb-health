import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { CallbackArgs } from 'victory-core';

interface IProps {
  chartData: IChart[];
  lastIndex: number;
}

interface IChart {
  x: string;
  y: number;
}

const Chart = ({ chartData, lastIndex }: IProps) => {
  return (
    <VictoryChart>
      <VictoryAxis
        style={{ axis: { strokeWidth: 0 }, tickLabels: { fontSize: 16, fontWeight: 900, fontFamily: 'inter' } }}
      />
      <VictoryBar
        data={chartData}
        labels={({ datum }) => `${datum.y}점`}
        barRatio={1}
        style={{
          data: { fill: ({ index }) => (+index === lastIndex ? '#FFD300' : '#eeeeee') },
          labels: {
            fill: ({ index }: CallbackArgs) => (index === lastIndex ? '#ff833d' : 'gray'),
            fontWeight: 900,
            fontFamily: 'inter',
          },
        }}
      />
      <VictoryLine data={chartData} style={{ data: { stroke: 'gray', strokeWidth: 2 } }} />
      <VictoryScatter
        data={chartData}
        size={4}
        symbol='circle'
        style={{
          data: {
            fill: ({ index }) => (+index === lastIndex ? '#fe833d' : '#ffffff'),
            stroke: ({ index }) => (+index === lastIndex ? '#fe833d' : 'gray'),
            strokeWidth: 2,
          },
        }}
      />
    </VictoryChart>
  );
};

export default Chart;

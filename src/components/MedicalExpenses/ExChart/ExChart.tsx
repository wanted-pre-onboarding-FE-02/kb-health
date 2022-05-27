import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import { CallbackArgs } from 'victory-core';
import { IMedicalExpenseChartData } from '../../../types/health';

interface ExChartProps {
  chartData: IMedicalExpenseChartData[];
}

const ExChart = ({ chartData }: ExChartProps) => {
  const setWon = (won: number) => {
    return won.toLocaleString('ko-KR');
  };
  return (
    <VictoryChart width={360} height={260}>
      <VictoryAxis style={{ axis: { strokeWidth: 0 }, tickLabels: { fontSize: 16, fontWeight: 900 } }} />
      <VictoryBar
        data={chartData}
        labels={({ datum }) => setWon(datum.y)}
        barRatio={0.5}
        style={{
          data: { fill: ({ index }) => (+index % 2 === 0 ? '#FFD300' : '#FF833D') },
          labels: { fill: ({ index }: CallbackArgs) => (+index % 2 === 0 ? '#FF833D' : 'gray'), fontWeight: 900 },
        }}
      />
      <VictoryLine data={chartData} style={{ data: { stroke: 'gray' } }} />
      <VictoryScatter
        data={chartData}
        size={6}
        symbol='circle'
        style={{
          data: { fill: ({ index }) => (+index % 2 === 0 ? 'gray' : 'white'), stroke: 'gray', strokeWidth: 2 },
        }}
      />
    </VictoryChart>
  );
};
export default ExChart;

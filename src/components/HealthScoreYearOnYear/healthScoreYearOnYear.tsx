import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory';
import styles from './healthScoreYearOnYear.module.scss';
import healthData from '../../data/healthData.json';
import { useMemo } from 'react';

const HealthScoreYearOnYear = () => {
  const { healthScoreList } = healthData;

  const sortedList = healthScoreList.sort(
    (a, b) => Number(a.SUBMIT_DATE.substring(0, 4)) - Number(b.SUBMIT_DATE.substring(0, 4))
  );

  const lastIndex = sortedList.length - 1;

  const current = sortedList[lastIndex];
  const currentYear = Number(current.SUBMIT_DATE.substring(0, 4));
  const currentScore = Number(current.SCORE);

  const mentComponent = useMemo(() => {
    if (lastIndex === 0) return <p>{`${currentYear}년 건강점수는 ${currentScore}점입니다.`}</p>;

    const prev = sortedList[lastIndex - 1];
    const prevYear = Number(prev.SUBMIT_DATE.substring(0, 4));
    const PrevScore = Number(prev.SCORE);

    const yearDiff = currentYear - prevYear;
    const scoreDiff = currentScore - PrevScore;

    const now = new Date();
    const prevYearMent = currentYear === now.getFullYear() && yearDiff === 1 ? '지난해 보다' : `${prevYear}년 보다`;
    const scoreMent = `${Math.abs(scoreDiff)} 점`;
    const varianceMent = scoreDiff > 0 ? '높아졌어요.' : '낮아졌어요.';

    return (
      <>
        <p>총점이</p>
        <div>
          <p>{prevYearMent}</p>
          <p>
            <strong>
              <span>{scoreMent}</span>
              <span>{varianceMent}</span>
            </strong>
          </p>
        </div>
      </>
    );
  }, [currentScore, currentYear, lastIndex, sortedList]);

  const chartData: any = [];

  for (let i = 0; i < sortedList.length; i += 1) {
    chartData.push({
      x: sortedList[i].SUBMIT_DATE.substring(0, 4),
      y: Number(sortedList[i].SCORE),
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>{mentComponent}</div>
      <div className={styles.exChart} />
      <VictoryChart width={360} height={260}>
        <VictoryAxis
          style={{ axis: { strokeWidth: 0 }, tickLabels: { fontSize: 16, fontWeight: 900, fontFamily: 'inter' } }}
        />
        <VictoryBar
          data={chartData}
          labels={({ datum }) => datum.y}
          barRatio={1}
          style={{
            data: { fill: ({ index }) => (+index === lastIndex ? '#FFD300' : '#c9c9c9') },
            labels: { fill: 'gray', fontWeight: 900, fontFamily: 'inter' },
          }}
        />
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: { duration: 500 },
          }}
          data={chartData}
          style={{ data: { stroke: 'gray', strokeWidth: 2 } }}
        />
        <VictoryScatter
          data={chartData}
          size={4}
          symbol='circle'
          style={{
            data: {
              fill: ({ index }) => (+index === lastIndex ? 'orange' : 'white'),
              stroke: ({ index }) => (+index === lastIndex ? 'orange' : 'gray'),
              strokeWidth: 2,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default HealthScoreYearOnYear;

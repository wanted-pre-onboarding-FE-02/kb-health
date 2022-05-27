import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';
import styles from './healthMain.module.scss';
import healthData from '../../data/healthData.json';

const HealthMain = () => {
  const percent = Number(healthData.userInfo.healthScore) / 1000;
  const getData = () => {
    return [
      { x: 1, y: 100 - percent * 100 },
      { x: 2, y: percent },
    ];
  };

  return (
    <div className={styles.app}>
      <h2>김헬스님의 건강점수</h2>
      <svg viewBox='0 0 400 400' width='360px' height='100%'>
        <VictoryPie
          standalone={false}
          // animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={getData()}
          innerRadius={120}
          labels={() => null}
          endAngle={280}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = 'yellow';
                return datum.x === 1 ? color : 'rgba(255,255,255,0.3)';
              },
            },
          }}
        />
        <VictoryLabel
          textAnchor='middle'
          verticalAnchor='middle'
          x={200}
          y={200}
          text={healthData.userInfo.healthScore}
          style={{ fontSize: 45 }}
        />
      </svg>
      <p>건강검진결과 가져오기 &gt;</p>
    </div>
  );
};

export default HealthMain;

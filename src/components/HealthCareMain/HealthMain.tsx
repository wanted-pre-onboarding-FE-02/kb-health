import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';
import styles from './healthMain.module.scss';
import healthData from '../../data/healthData.json';

const HealthMain = () => {
  const percent = (Number(healthData.userInfo.healthScore) / 1000) * 100;
  console.log(percent * 100, 100 - percent * 100);
  const getData = () => {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  };

  return (
    <div className={styles.app}>
      <h3>김헬스님의 건강점수</h3>
      <svg viewBox='0 0 300 270' width='260px' height='100%'>
        <VictoryPie
          standalone={false}
          width={300}
          height={300}
          data={getData()}
          innerRadius={120}
          labels={() => null}
          endAngle={485}
          startAngle={235}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = '#ffd300';
                return datum.x === 1 ? color : '#eee';
              },
            },
          }}
        />
        <VictoryLabel
          textAnchor='middle'
          verticalAnchor='middle'
          x={150}
          y={150}
          text={`${healthData.userInfo.healthScore}점`}
          style={{ fontSize: 50 }}
        />
      </svg>

      <span>{healthData.userInfo.healthDate}</span>
      <p>건강검진결과 가져오기 &gt;</p>
    </div>
  );
};

export default HealthMain;

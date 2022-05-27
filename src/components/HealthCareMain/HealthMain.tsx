import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';
import styles from './healthMain.module.scss';
import healthData from '../../data/healthData.json';
import { useEffect, useState } from 'react';

const HealthMain = () => {
  const [dataState, setDataState] = useState({
    percent: 25, data: getData(0)
  })


  useEffect(()=> {
    let percent = 25;
    const setStateInterval = window.setInterval(() => {
      percent += (Math.random() * 25);
      percent = (percent > 100) ? 0 : percent;
      setDataState({
        percent, data: getData(percent)
      });
    }, 2000);
  })

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }


  return (
    <div className={styles.app}>
        <h2>김헬스님의 건강점수</h2>
      <svg viewBox='0 0 400 400' width='100%' height='100%'>
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={healthData.userInfo.healthScore}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? 'green' : 'red';
                return datum.x === 1 ? color : 'transparent';
              },
            },
          }}
        />
        <VictoryAnimation duration={1000} data={healthData.userInfo.healthScore}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor='middle'
                verticalAnchor='middle'
                x={200}
                y={200}
                text={`${dataState.percent}%`}
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
      <p>건강검진결과 가져오기 &gt;</p>
    </div>
  );
};

export default HealthMain;

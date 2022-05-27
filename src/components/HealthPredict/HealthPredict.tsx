import styles from './healthPredict.module.scss';
import HEALTH_DATA from '../../data/healthData.json';
import { cx } from '../../styles';
import ScoreChart from './ScoreChart';

function convertCase(number: number) {
  const absNum = Math.abs(number);
  const numReduce = number / absNum;
  switch (numReduce) {
    case -1:
      return {
        frontText: '현재 보다',
        switchText: ` ${absNum}점 낮아요`,
        switchClass: 'textRed',
      };
    case 1:
      return {
        frontText: '현재 보다',
        switchText: ` ${absNum}점 높아요`,
        switchClass: 'textBlue',
      };
    default:
      return {
        frontText: '',
        switchText: ' 현재와 같아요',
        switchClass: 'textGrey',
      };
  }
}

const HealthPredict = () => {
  const { wHscore, wHscoreDy } = HEALTH_DATA.wxcResultMap;
  const LAST_INDEX = wHscoreDy.length - 1;
  const interval = Number(wHscoreDy[LAST_INDEX]) - Number(wHscore);
  const data = [
    { status: '나', score: Number(wHscore) },
    { status: '10년 후', score: Number(wHscoreDy[LAST_INDEX]) },
  ];

  const { switchText, switchClass, frontText } = convertCase(interval);

  return (
    <section className={styles.predictWrapper}>
      <div className={styles.predictInner}>
        <h3>나의 10년 후 건강 예측</h3>
        <dl>
          <dt>예측 건강 점수</dt>
          <dd>
            <p>
              10년 후 예상 건강 점수는
              <br />
              {frontText}
              <span className={cx(styles.highlightTxt, styles[switchClass])}>{switchText}</span>
            </p>
          </dd>
        </dl>
        <ScoreChart data={data} />
      </div>
    </section>
  );
};

export default HealthPredict;

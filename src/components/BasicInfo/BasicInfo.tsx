import heathData from '../../data/healthData.json';
import styles from './basicInfo.module.scss';

const BasicInfo = () => {
  const { sex, resHeight, age } = heathData.wxcResultMap.paramMap;
  const gender = sex === `1` ? '남성' : '여성';

  return (
    <div className={styles.basicInfo}>
      <dl>
        <dt>기본정보</dt>
        <div className={styles.infoList}>
          <dd>{gender}</dd>
          <dd>{age}세</dd>
          <dd>{resHeight}cm</dd>
        </div>
      </dl>
    </div>
  );
};

export default BasicInfo;

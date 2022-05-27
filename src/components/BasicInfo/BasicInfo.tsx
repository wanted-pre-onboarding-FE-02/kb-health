import { cx } from '../../styles';
import styles from './basicInfo.module.scss';

interface IProps {
  cardNum: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  bordText?: string;
  healthState?: string;
  textColor?: string;
  tipList: string[];
  tagText: string[];
}

const BasicInfo = () => {
  return (
    <div className={styles.basicInfo}>
      <dl>
        <dt>기본정보</dt>
        <div className={styles.infoList}>
          <dd>남성</dd>
          <dd>38세</dd>
          <dd>176.8cm</dd>
        </div>
      </dl>
    </div>
  );
};

export default BasicInfo;

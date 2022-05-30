import { cx } from '../../styles';
import TagCard from '../TagCard/TagCard';
import styles from './healthCareCard.module.scss';

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

const HealthCareCard = ({ cardNum, icon, title, desc, bordText, healthState, textColor, tipList, tagText }: IProps) => {
  const sliceDesc = desc.split('로', 5);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{cardNum}</h2>
        {icon}
      </div>
      <h2 className={cx(styles.title, { [styles[`${textColor}`]]: textColor })}>{title}</h2>

      <p className={styles.desc}>
        {sliceDesc[0]}
        {bordText && '로'}
        <br />
        <mark>{bordText}</mark> {sliceDesc[1]}
      </p>

      <p className={styles.healthState}>{healthState}</p>

      <ul className={styles.cardContainer}>
        {tagText.map((tag, index) => (
          <TagCard key={`tagText${tag + index}`} tagText={tag} />
        ))}
      </ul>
      <div className={styles.line} />
      <p className={cx(styles.tipTitle, { [styles[`${textColor}`]]: textColor })}>이렇게 관리해 보세요!</p>
      <ul className={styles.tipListWrapper}>
        {tipList.map((item, index) => (
          <li key={`tip${item + index}`}>
            <div>{item}</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthCareCard;

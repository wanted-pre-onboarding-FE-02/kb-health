import styles from './tagCard.module.scss';

interface IProps {
  tagText: string;
}

const TagCard = ({ tagText }: IProps) => {
  return (
    <li>
      {tagText && (
        <div className={styles.card}>
          <mark>{tagText}</mark>
        </div>
      )}
    </li>
  );
};

export default TagCard;

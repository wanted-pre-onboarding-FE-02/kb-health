import styles from './tagCard.module.scss';

interface IProps {
  tagText: string[];
}

const TagCard = ({ tagText }: IProps) => {
  return (
    <div className={styles.cardContainer}>
      {tagText.map((tag) => (
        <div key={tag} className={styles.card}>
          <strong>{tag}</strong>
        </div>
      ))}
    </div>
  );
};

export default TagCard;

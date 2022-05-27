import styles from './tagCard.module.scss';

interface IProps {
  tagText: string;
}

const TagCard = ({ tagText }: IProps) => {
  return (
    <div>
      {tagText && (
        <div className={styles.card}>
          <strong>{tagText}</strong>
        </div>
      )}
    </div>
  );
};

export default TagCard;

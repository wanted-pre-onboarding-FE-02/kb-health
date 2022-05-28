import styles from './iphoneModel.module.scss';

interface Props {
  children: React.ReactNode;
}

const IphoneModel = ({ children }: Props) => {
  return (
    <div className={styles.phone}>
      <div className={styles.top}>
        <div className={styles.camera} />
        <div className={styles.speaker} />
      </div>
      <div className={styles.screen}>{children}</div>
      <div className={styles.bottom}>
        <div className={styles.homeBtn} />
      </div>
    </div>
  );
};
export default IphoneModel;

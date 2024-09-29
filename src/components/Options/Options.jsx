import clsx from 'clsx';
import styles from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button
        className={clsx(styles.btn, styles.good)}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>

      <button
        className={clsx(styles.btn, styles.neutral)}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>

      <button
        className={clsx(styles.btn, styles.bad)}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button
          className={clsx(styles.btn, styles.reset)}
          onClick={() => updateFeedback('reset')}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

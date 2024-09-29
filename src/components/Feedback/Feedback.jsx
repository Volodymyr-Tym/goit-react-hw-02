import styles from './Feedback.module.css';

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.feedback_list}>
      <li className={styles.feedback_item}>Good: {feedbacks.good}</li>
      <li className={styles.feedback_item}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.feedback_item}>Bad: {feedbacks.bad}</li>
      <li className={styles.feedback_item}>Total: {totalFeedback}</li>
      <li className={styles.feedback_item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;

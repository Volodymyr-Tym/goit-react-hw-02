const Feedback = ({ feedbacks }) => {
  return (
    <ul>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
    </ul>
  );
};

export default Feedback;

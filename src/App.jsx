import './App.css';
import { useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setRating({ ...rating, [feedbackType]: rating[feedbackType] + 1 });

    const reset = { good: 0, neutral: 0, bad: 0 };
    feedbackType === 'reset' && setRating({ ...reset });
  };

  const totalFeedback = rating.good + rating.neutral + rating.bad;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={rating}></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
}

export default App;

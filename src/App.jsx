import './App.css';
import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const initialRating = { good: 0, neutral: 0, bad: 0 };

  const [rating, setRating] = useState(() => {
    const fromStorageRating = JSON.parse(
      window.localStorage.getItem('storage-rating')
    );

    return fromStorageRating ?? initialRating;
  });

  useEffect(() => {
    window.localStorage.setItem('storage-rating', JSON.stringify(rating));
  }, [rating]);

  const updateFeedback = feedbackType => {
    setRating({ ...rating, [feedbackType]: rating[feedbackType] + 1 });

    feedbackType === 'reset' && setRating({ ...initialRating });
  };

  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positiveFeedback = Math.round((rating.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={rating}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
}

export default App;

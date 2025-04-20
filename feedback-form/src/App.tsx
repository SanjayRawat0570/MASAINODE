import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

import { Feedback } from "./types/Feedback";

const App = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const handleAddFeedback = (feedback: Feedback) => {
    setFeedbacks(prev => [feedback, ...prev]);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Aromatic Bar Feedback & Grievance System</h1>
      <FeedbackForm onSubmit={handleAddFeedback} />
      <hr />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;

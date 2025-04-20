import { useState } from "react";
import { Feedback } from "../types/Feedback";

interface Props {
  onSubmit: (feedback: Feedback) => void;
}

const FeedbackForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const feedback: Feedback = {
      id: Date.now(),
      name,
      email,
      rating,
      message,
      date: new Date().toISOString(),
    };

    onSubmit(feedback);
    setName("");
    setEmail("");
    setRating(5);
    setMessage("");
    alert("Thank you for your feedback!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave Your Feedback</h2>
      <label>
        Name: <br />
        <input value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Email: <br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Rating (1–10): <br />
        <input
          type="number"
          min={1}
          max={10}
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
          required
        />
      </label>
      <br />
      <label>
        Message: <br />
        <textarea value={message} onChange={e => setMessage(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

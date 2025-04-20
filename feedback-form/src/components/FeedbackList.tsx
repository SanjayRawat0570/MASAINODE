import { Feedback } from "../types/Feedback";

interface Props {
  feedbacks: Feedback[];
}

const FeedbackList = ({ feedbacks }: Props) => {
  return (
    <div>
      <h2>Feedback Received</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          {feedbacks.map(fb => (
            <li key={fb.id}>
              <strong>{fb.name}</strong> ({fb.email}) rated {fb.rating}/10
              <p>{fb.message}</p>
              <small>{new Date(fb.date).toLocaleString()}</small>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;

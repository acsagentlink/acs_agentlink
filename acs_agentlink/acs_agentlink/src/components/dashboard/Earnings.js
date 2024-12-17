import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Earnings = () => {
  const percentage = 80; // example, can be dynamic

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold">Earnings</h2>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={percentage} maxValue={1000} text={`$800`} />
      </div>
      <p className="mt-4 text-gray-600">Based on your performance, you have earned $800 out of $1,000.</p>
    </div>
  );
};

export default Earnings;

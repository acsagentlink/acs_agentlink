import Layout from './Layout';

export default function Jobs() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Jobs</h1>
        {/* Add your jobs page content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Glassdoor</h3>
            <p>Lagos, Nigeria</p>
            <p className="text-gray-600 mt-4">Task: ...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">MTN Nigeria</h3>
            <p>Lagos, Nigeria</p>
            <p className="text-gray-600 mt-4">Task: ...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

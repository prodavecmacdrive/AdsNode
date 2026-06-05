import { useParams } from 'react-router-dom';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Project Workspace</h1>
      <p className="mt-2 text-gray-500">
        Project ID: <code className="text-indigo-600">{id}</code>
      </p>
      <div className="mt-6 grid grid-cols-4 gap-2">
        {['Preview', 'Comments', 'Chat', 'Settings'].map((tab) => (
          <button
            key={tab}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

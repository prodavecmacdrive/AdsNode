import { useParams } from 'react-router-dom';

export function ClientEntryPage() {
  const { token } = useParams<{ token: string }>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Magic Link</h1>
        <p className="text-gray-500">
          Validating access token: <code className="text-indigo-600">{token}</code>
        </p>
      </div>
    </div>
  );
}

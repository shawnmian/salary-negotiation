// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Salary Negotiation Guide</h1>
      <p className="text-lg leading-relaxed text-center mb-6">
        Learn how to prepare for your interview, ace the salary discussion, and follow up professionally afterward.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-700 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">Preparation</h2>
          <p className="text-sm mb-4">Get tips on how to prepare for your interview.</p>
          <a href="/preparation" className="text-blue-500 hover:underline">Learn More</a>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">During Interview</h2>
          <p className="text-sm mb-4">How to handle salary discussions and negotiate effectively.</p>
          <a href="/during-interview" className="text-blue-500 hover:underline">Learn More</a>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">Post Interview</h2>
          <p className="text-sm mb-4">Follow up professionally and make sure you stand out.</p>
          <a href="/post-interview" className="text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
}

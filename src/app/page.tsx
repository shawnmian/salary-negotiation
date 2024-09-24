// src/app/landing/page.tsx

export default function LandingPage() {
  return (
    <div>
      {/* Section 1: Background image with text overlay */}
      <div
  className="relative bg-cover bg-center h-screen"
  style={{ backgroundImage: "url('/background.jpg')" }} // No need for 'src/app', just reference from 'public'
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
  <div className="relative flex justify-center items-center h-full">
    <div className="bg-white bg-opacity-75 p-8 rounded-md text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Product</h1>
      <p className="text-lg mb-6">
        Discover how our platform can help students reach their potential.
      </p>
      <a href="/home" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Check it out
      </a>
    </div>
  </div>
</div>


      {/* Section 2: Simple text box */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Maximize Your Potential</h2>
          <p className="text-lg">
            Our tool is designed to help professionals and students prepare for salary negotiations with confidence. Learn how to evaluate offers, set expectations, and ensure you’re getting the compensation you deserve.
          </p>
        </div>
      </div>
    </div>
  );
}

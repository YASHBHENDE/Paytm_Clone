import React from "react";

export default function PhonePayLandingPage() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">PhonePay</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Ultimate Payment Partner</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">Send, receive and manage money effortlessly with PhonePay.</p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Why PhonePay?</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
            <p>Military-grade encryption ensures your transactions are always safe.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Instant Transfers</h4>
            <p>Send and receive money instantly anytime, anywhere.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-2">Track Your Expenses</h4>
            <p>Detailed insights to help you manage and grow your finances.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section id="testimonials" className="bg-gray-200 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">What our users say</h3>
        <p className="text-gray-600 italic">Coming soon...</p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-center py-6 border-t">
        <p>&copy; {new Date().getFullYear()} PhonePay. All rights reserved.</p>
      </footer>
    </div>
  );
}

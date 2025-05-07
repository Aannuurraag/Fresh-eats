import React from 'react';

const About = () => {
  return (
  <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our story, mission, and the team behind your favorite meals.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Fresh eats, we are committed to delivering delicious, high-quality meals to your doorstep.
          Our mission is to make dining convenient, enjoyable, and accessible for everyone.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Our Values</h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-700">
          <li>🍽️ Quality Ingredients</li>
          <li>🚚 Fast Delivery</li>
          <li>🤝 Customer Satisfaction</li>
          <li>🌱 Sustainability</li>
        </ul>
      </section>
    </div>
  </div>
)};

export default About;

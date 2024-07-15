import React from "react";
import placeholderImage from "../assets/img/boy.png"; // Make sure to replace with the actual path to the placeholder image

const BlogGrid = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Parent",
      content:
        "My child's addiction to smartphones is alarming. She can no longer sit through a homework session without getting distracted. Her teachers have also noticed her declining attention in class. We've tried setting screen time limits, but she always finds a way around them. I'm looking for a constructive solution that can keep her engaged and help her regain her focus. A game designed to boost mental stamina while being educational and fun could be the key to solving this problem.",
    },
    {
      name: "Jane Smith",
      role: "Teacher",
      content:
        "As a father, it's distressing to see my son lose interest in activities he once loved, all because of his obsession with his phone. His ability to focus on tasks has drastically decreased, and it's affecting his performance in school. We need a solution that can redirect his attention towards something productive and mentally stimulating. I'm on the lookout for an engaging tool that can help improve his concentration and cognitive abilities while still being enjoyable for him.",
    },
    {
      name: "Alex Johnson",
      role: "Parent",
      content:
        "My daughter's constant phone use is causing her to lose focus on important tasks. She used to be an avid reader and a curious learner, but now, she can barely concentrate on her schoolwork. I'm deeply concerned about the long-term effects this could have on her education and overall development. We need a solution that can help her break free from this digital addiction and rebuild her attention span. An interactive and educational game that promotes mental stamina would be a fantastic way to address this issue and help her thrive.",
    },
  ];

  return (
    <div className="p-6 relative z-10">
      <h2 className="text-3xl font-bold text-center mb-6">प्रशंसापत्र</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 p-4 h-auto" // Adjust height to auto
          >
            <img
              src={placeholderImage}
              alt={testimonial.name}
              className="w-full h-32 object-contain"
            />
            <div className="p-2 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-600 mt-2">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;

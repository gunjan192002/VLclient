import React, { useState } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import headlogo from "./assets/dlogo.png";
import logo from "./assets/bullet.png";
import LogoutButton from "./components/Logout"; // Import LogoutButton component here

const HomePage = () => {
  // Sample topics
  const topicsWithLogos = [
    { name: "Open Intelligence", logo: logo },
    { name: "Cryptography", logo: logo },
    { name: "Digital Forensics", logo: logo },
    { name: "Network Packet Analysis", logo: logo },
    { name: "Web Application Security Testing", logo: logo },
    { name: "Mobile Application Security Testing", logo: logo },
    { name: "Information Gathering", logo: logo },
    { name: "Security Operation Centre", logo: logo },
    { name: "System Information Event Management", logo: logo },
    { name: "Malware Analysis", logo: logo },
    { name: "Topic 11", logo: logo },
    { name: "Topic 12", logo: logo },
    { name: "Topic 13", logo: logo },
    { name: "Topic 14", logo: logo },
    { name: "Topic 15", logo: logo },
  ];

  // Sample problems
  const problems = [
    {
      id: 1,
      name: "Problem 1",
      description: "Description for Problem 1",
      difficulty: "easy",
    },
    {
      id: 2,
      name: "Problem 2",
      description: "Description for Problem 2",
      difficulty: "easy",
    },
    {
      id: 3,
      name: "Problem 3",
      description: "Description for Problem 3",
      difficulty: "easy",
    },
    {
      id: 4,
      name: "Problem 4",
      description: "Description for Problem 4",
      difficulty: "medium",
    },
    {
      id: 5,
      name: "Problem 5",
      description: "Description for Problem 5",
      difficulty: "easy",
    },
    {
      id: 6,
      name: "Problem 6",
      description: "Description for Problem 6",
      difficulty: "easy",
    },
    {
      id: 7,
      name: "Problem 7",
      description: "Description for Problem 7",
      difficulty: "medium",
    },
    {
      id: 8,
      name: "Problem 8",
      description: "Description for Problem 8",
      difficulty: "easy",
    },
    {
      id: 9,
      name: "Problem 9",
      description: "Description for Problem 9",
      difficulty: "hard",
    },
  ];

  // State to manage mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // Define gradient colors for each difficulty level
  const colors = {
    easy: "linear-gradient(to right, #26c585, #24c6c0)", // Green
    medium: "linear-gradient(to right, #f95b37, #fca339)", // Orange
    hard: "linear-gradient(to right, #f43150, #f2512e)", // Red
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left column */}
      <div
        className={`w-1/5 h-full overflow-y-auto border-r bg-gray-100 ${
          showMenu ? "block" : "hidden"
        } sm:block`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#a5a5a5 #f3f4f6",
        }}
      >
        {/* Scrollable content */}
        <div className="p-4">
          <img src={headlogo} alt="HeadLogo" className="w-full mb-4" />{" "}
          {/* Replace "Scroll Down Column" with custom image */}
          {/* Displaying topics with logos */}
          <div className="space-y-4">
            {topicsWithLogos.map((topic, index) => (
              <div
                key={index}
                className="p-2 rounded-md font-medium text-sm hover:bg-gray-400 hover:text-white transition duration-300 flex items-center"
              >
                <img src={topic.logo} alt="Logo" className="w-4 h-4 mr-2" />{" "}
                {/* Adjust the size as needed */}
                {topic.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        className="flex-1"
        style={{
          background: "#e0efee",
        }}
      >
        {/* Top navigation bar */}
        <div
          className="flex justify-between items-center p-4"
          style={{
            background: "linear-gradient(315deg, #2234ae 0%, #191714 74%)",
          }}
        >
          <div className="text-xl font-bold text-white flex items-center">
            Navigation
            {/* Navigation text removed */}
          </div>
          <div className="flex items-center">
            <LogoutButton /> {/* Place LogoutButton component here */}
            <Link to="/Profile">
              <FaUser className="text-2xl text-white cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Card section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Problems</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            style={{ marginTop: "5%" }}
          >
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="border border-gray-300 p-6 rounded-md"
                style={{
                  background: colors[problem.difficulty],
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Adds shadow
                  transition: "all 0.3s ease", // Smooth transition for hover effect
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {problem.name}
                  </h3>
                  <span
                    className="text-sm font-bold text-black bg-white px-2 py-1 rounded-md"
                    style={{ marginLeft: "8px", alignSelf: "flex-start" }}
                  >
                    {problem.difficulty.charAt(0).toUpperCase() +
                      problem.difficulty.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 text-white">
                  {problem.description}
                </p>
                <Link
                  to="/Problem"
                  className="bg-cyan-50 hover:bg-gray-300 text-black px-4 py-2 rounded-md font-bold hover:text-cyan-500 transition duration-300"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hamburger icon for small screens */}
      <FaBars
        className="sm:hidden absolute top-4 left-4 text-2xl text-gray-600 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
  );
};

export default HomePage;

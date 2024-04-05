import React, { useState } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import headlogo from "./assets/dlogo.png";
import logo from "./assets/bullet.png";

const ProblemPage = () => {
  // Sample topics
  const topicsWithLogos = [
    { name: "Open Source Intelligence", logo: logo },
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

  // State to manage mobile menu
  const [showMenu, setShowMenu] = useState(false);
  //message constant for endpoint
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to request virtual machine
  const requestVirtualMachine = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://3.111.169.113/req_vm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to request virtual machine.");
      }

      const data = await response.json();
      setResponseMessage(data); // Update to set the entire response object
    } catch (error) {
      console.error("Error requesting virtual machine:", error);
      setResponseMessage({ message: "An error occurred while requesting the virtual machine." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen font-sans overflow-hidden">
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
        {/* Scroll column */}
        <div className="p-4">
          <img src={headlogo} alt="HeadLogo" className="w-full mb-4" />

          <div className="space-y-4">
            {topicsWithLogos.map((topic, index) => (
              <div
                key={index}
                className="p-2 rounded-md font-medium text-sm hover:bg-gray-400 hover:text-white transition duration-300 flex items-center"
              >
                <img src={topic.logo} alt="Logo" className="w-4 h-4 mr-2" />

                {topic.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        className="flex-1 overflow-y-auto"
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
          </div>
          <div className="flex items-center">
            <Link to="/Profile">
              <FaUser className="text-2xl text-white cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4">
          <div className="container mx-auto p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4">Problem Name</h1>
            </div>
            <div className="flex mb-8">
              <div className="w-1/2 pr-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="border-b-2 border-blue-900 text-lg font-bold mb-4 ">
                    Problem Statement
                  </h2>

                  <p>
                    Problem statement goes here... Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus exercitationem quidem
                    fuga nobis, maxime dolor aperiam eligendi, ad voluptates
                    quaerat, aliquam nam eveniet modi quas tempore reiciendis
                    culpa temporibus quis?
                  </p>
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="border-b-2 border-blue-900 text-lg font-bold mb-4">
                    Prohibited Activities
                  </h2>
                  <p>
                    Constraints go here... Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis nemo suscipit, autem
                    possimus adipisci officiis obcaecati recusandae! Dolores,
                    corporis eligendi. Eum, eius ex hic excepturi ipsam
                    laudantium. Eius amet deserunt aspernatur quia, maxime
                    voluptate mollitia, aliquam quam excepturi, veritatis animi?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="w-1/2 pr-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-semibold mb-4 text-center text-white">
                    Open the Virtual Lab
                  </h2>
                  <div className="flex justify-center">
                    <button
                      className="bg-white font-semibold text-003366 px-4 py-2 rounded hover:bg-blue-200"
                      onClick={requestVirtualMachine}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Start Virtual Lab"}
                    </button>
                  </div>
                  {responseMessage && (
                    <div className="flex flex-col items-center mt-4 text-sm">
                      <div>{responseMessage.message}</div>
                      {responseMessage.vm_url && (
                        <a href={responseMessage.vm_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">VM URL: {responseMessage.vm_url}</a>
                      )}
                      {responseMessage.password && (
                        <div>Password: {responseMessage.password}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2 pl-4">
                <div
                  style={{ backgroundColor: "#11255a" }}
                  className="p-6 rounded-lg shadow-lg relative"
                >
                  <h2 className="text-lg font-semibold mb-4 text-white text-center">
                    Submit Answer
                  </h2>
                  <p className="text-sm text-white mb-4 text-center">
                    Enumerate users and submit with comma separation
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <input
                      type="text"
                      placeholder="Your answer..."
                      className="w-85p px-4 py-2 rounded-l border border-003366 focus:outline-none focus:border-blue-400 text-003366"
                    />
                    <button className="bg-white text-11255a px-4 py-2 rounded-r font-semibold hover:text-black ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
                  Download Solution
                </h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Download
                </button>
              </div>
            </div>
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

export default ProblemPage;

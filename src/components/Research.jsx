import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const researchData = [
  {
    title: "Demystifying AI Agents: Your Guide to Intelligent Automation",
    description:
      "An overview of AI agents, their architectures, and real-world applications in industries like healthcare, finance, and robotics.",
    pdfLink: "/Demystifying-AI-Agents-Your-Guide-to-Intelligent-Automation.pdf",
  },
  {
    title: "From Input to Output: The LLM Pipeline",
    description:
      "A detailed breakdown of how Large Language Models process inputs through tokenization, embedding, attention, and decoding.",
    pdfLink: "/From-Input-to-Output-The-LLM-Pipeline.pdf",
  },
  {
    title: "Generative AI: A Beginner's Guide",
    description:
      "An introductory guide to generative AI, its core concepts, and real-world applications in content creation and code generation.",
    pdfLink: "/Generative-AI-A-Beginners-Guide.pdf",
  },
  {
    title: "Prompt Engineering",
    description:
      "A comprehensive overview of prompt engineering, its components, and practical strategies for effective AI prompts.",
    pdfLink: "/Prompt-Engineering.pdf",
  },
  {
    title: "Prompt Engineering: A Comprehensive Guide",
    description:
      "An advanced guide on how to design and optimize prompts for AI models, including role-playing, templates, and error mitigation.",
    pdfLink: "/Prompt-Engineering-A-Comprehensive-Guide.pdf",
  },
  {
  title: "Python Interview Q&A: Complete Prep Guide",
  description:
    "A detailed question and answer guide for Python interviews, covering Object-Oriented Programming, Pandas, and NumPy with practical examples for data analysis roles.",
  pdfLink: "https://app.eraser.io/workspace/J1NAylJrCNnPAx9kDk0t?origin=share"
}
];

export default function Research() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="p-6">
      <button
        onClick={() => {
          if (location.key !== "default") {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        className="bg-purple-500 text-white text-sm font-thin px-3 py-1 mb-9 rounded-lg hover:bg-purple-700 transition"
      >
        Back
      </button>

      <h1 className="text-2xl font-bold mb-4 text-purple-400">My Research Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchData.map((research, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 transition-all duration-300 hover:shadow-purple-500/40"
          >
            <h2 className="text-xl text-purple-400 font-semibold mb-2">{research.title}</h2>
            <p className="text-sm mb-4 leading-relaxed">{research.description}</p>
            <a
              href={research.pdfLink}
              download
              className="bg-purple-500 text-white text-xs px-2 py-2 rounded hover:bg-purple-600 transition"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

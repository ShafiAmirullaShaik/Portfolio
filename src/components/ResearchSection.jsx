import React from 'react';
import { Link } from 'react-router-dom';

export default function ResearchSection() {
  return (
    <div className="bg-white/10 text-center dark:bg-white/5 backdrop-blur-md px-6 py-8 rounded-xl shadow-lg border border-white/20 hover:shadow-purple-500/40 transition-all duration-300">
      <h1 className="text-2xl mb-4 text-purple-400 font-semibold">Research and Insights</h1>
      <p className="text-sm mb-3 text-black leading-relaxed">
        Dive into my collection of research work, exploring cutting-edge technologies and emerging trends in AI, LLMs, and automation.
      </p>
      <Link
        to="/research"
        className="bg-purple-500 text-white text-xs mt-6 px-2 py-2 rounded hover:bg-purple-600 transition"
      >
        Explore Research
      </Link>
    </div>
  );
}

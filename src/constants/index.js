

export const HERO_CONTENT = `I’m a Python backend engineer and AI developer with about 2+ years of hands-on experience. Most of my work revolves around building reliable backend systems with Django and FastAPI, and developing AI-powered products using LLMs, RAG pipelines, and agent-based architectures. I’ve worked on real applications like WMS automation, intelligent chatbots, and transcription tools—taking ideas from concept to production. I also enjoy the frontend side when needed, using React and Tailwind to bring features to life. Overall, I like solving real problems, building things that scale, and exploring how AI can make systems smarter and more useful in the real world.`
;

export const ABOUT_TEXT = `I’m a Backend Engineer and AI Developer with 2+ years of experience building reliable and scalable software systems — and turning AI ideas into fully working, production-ready applications. My core strength lies in backend development using Python, Django, FastAPI and AI while also being comfortable working across the stack with React.js and Tailwind CSS to deliver polished, user-focused experiences.

Across my journey, I’ve worked on projects in Warehouse Management Systems (WMS), automation, conversational AI, and intelligent tooling — contributing to platforms that solve meaningful, real-world challenges. I’ve built and deployed solutions like RAG-based chatbots, agentic AI systems, dynamic tool invocation pipelines, and LLM-powered automation workflows that improve operational efficiency and decision-making.

My work often involves integrating machine learning models, optimizing LLM responses through prompt engineering and evaluation, and designing scalable backend architectures that support AI applications at scale. Some standout projects include AI Scribe, a medical transcription system, and AI-driven restaurant chatbots that improve customer interaction and conversion.

Beyond what I’ve already built, I'm driven by curiosity and constant improvement. I’m currently exploring LLM streaming, multilingual speech processing, advanced RAG workflows, and self-governing AI agents that can perform tasks end-to-end with minimal human guidance.

At the core, I enjoy solving problems, building systems that feel seamless, and exploring how AI can make technology more useful, intuitive, and human. With a balance of development experience, research mindset, and product thinking, I aim to create solutions that perform well today — and are ready for what's next.`;

export const EXPERIENCES = [
  {
  year: "Aug 2025 - Present",
  role: "Prompt Engineer & AI Developer",
  company: "CBRE (via TechStar)",
  description: `Currently working as a Prompt Engineer on the CBRE client project, focusing on automating and improving commercial real estate lease abstraction using AI-driven workflows. My primary responsibility is to research, design, and optimize LLM-based extraction prompts for key lease and amendment fields (such as leased area, lease commencement, rental terms, etc.). I analyze business logic requirements, refine field-level instructions, and create scalable prompt templates aligned with domain context.

  I rigorously validate prompt performance using Postman and large document datasets, iteratively tuning prompts based on extraction accuracy, edge cases, and failure analysis. Once validated, prompts are deployed for automated large-scale processing and accuracy tracking.

  Alongside prompt engineering, I contribute to backend enhancements, automation scripts, and workflow optimization using Python. My work ensures improved data accuracy, reduced manual effort, and streamlined document processing across the enterprise AI pipeline.`,
  technologies: [
    "Python", 
    "API", 
    "Postman", 
    "Prompt Engineering", 
    "Agentic AI", 
    "Gen AI", 
    "RAG", 
    "LLMs"
  ],
  },
  {
    year: "Dec 2024 - Mar 2025",
    role: "Freelance Backend Engineer, AI research and development",
    company: "NeurozAI",
    description: `As an AI Research and Development, AI/ML Engineer at Neurozai, I played a key role in developing and optimizing the Live Voice Agent for real-time AI-driven interactions. I implemented streaming agent responses to enhance conversational AI performance and integrated noise reduction and WebRTC VAD to improve speech clarity. Additionally, I fine-tuned LLM responses for accuracy and context awareness, designed dynamic tool selection mechanisms to optimize AI workflows, and conducted LLM evaluations to refine model performance. My contributions focused on enhancing AI-driven voice processing, ensuring seamless, intelligent, and efficient interactions.`,
    technologies: ["Python", "FastAPI", "AI", "Gen AI", "LLM's", "Prompt Engineering", "WebRTC VAD", "Agentic AI"],
  },
  {
    year: "Jun 2023 - Nov 2024",
    role: "Trainee Consultant",
    company: "eSoftLabs .Inc",
    description: `As a Trainee Consultant at eSoftLabs, I worked on both frontend and backend development, building scalable and user-friendly applications using React.js, Tailwind CSS, and JavaScript. On the backend, I developed robust systems using Python, Django, and FastAPI, integrating Machine Learning (ML), Large Language Models (LLMs), and Generative AI to streamline warehouse operations. My contributions focused on optimizing inventory management and demand forecasting, ensuring smooth and efficient workflows through AI-driven automation and predictive analytics.`,
    technologies: ["Javascript", "React.js", "Tailwind", "HTML", "CSS", "Python", "MsSql", "ML", "Gen AI", "LLMs", "Prompt Engineering", "Fast API"],
  },
];

export const PROJECTS = [
  {
  title: "Lease Abstraction Automation",
  description: `
  Worked on automating commercial real estate lease abstraction using AI-powered data extraction and large language models. The system identifies and extracts critical lease metadata (such as leased area, lease commencement date, rent terms, renewal clauses, etc.) with high accuracy.

  I designed and optimized domain-specific prompts aligned with business logic requirements, ran iterative evaluations on real-world lease and amendment documents, and fine-tuned extraction workflows based on model accuracy and failure case analysis. The outcome significantly reduced manual abstraction time and improved processing efficiency across large document volumes.`,
  technologies: [
    "Python",
    "Prompt Engineering",
    "LLMs",
    "Gen AI",
    "Postman",
    "RAG"
  ]
  },
  {
    title: "Lease Intelligent Agent",
    description: `
    Built an intelligent agent framework to streamline and accelerate the lease abstraction prompt development workflow. Instead of creating or modifying prompts manually for each Lease of Business (LOB) field, this agent automatically understands field definitions, expected output formats, and underlying domain rules.

    I consolidated existing knowledge sources — including field glossaries, LAE definitions, abstraction standards, and legacy prompt templates — into a structured reference PDF and designed a dynamic prompt-generation skeleton. Using this, the agent auto-generates context-aware prompts for any field across multiple LOBs with minimal setup.

    This solution reduced repetitive effort, improved consistency in extraction quality, and introduced scalability to future LLM-based document automation use cases.`,
    technologies: [
      "Python",
      "Agentic AI",
      "Prompt Engineering",
      "Gen AI",
      "RAG",
      "LLMs",
      "Knowledge Embedding"
    ]
  },
  {
    title: "Txenia",
    description:
      "Txenia is a versatile AI platform built to help businesses solve various challenges efficiently. Users can connect their data, choose from pre-built AI models (like prediction and classification models), and quickly deploy customized solutions. The platform’s design focuses on ease of use, speed, and adaptability for a wide range of applications.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Python", "Django", "ML", "AI", "Gen AI", "LLMs", "Prompt Engineering", "Fast API"],
  },
  {
    title: "Medozai",
    description:
      "Medozai is an AI-powered IVR (Interactive Voice Response) booking appointment agent designed to streamline automated scheduling and customer interactions in healthcare. As part of this project, you contributed to developing AI Scribe, which processes .wav audio files into structured SOAP notes, improving medical documentation efficiency. You also worked on Streaming LLM responses, enabling real-time AI interactions for better user experience. Your role included integrating Noise Reduction & WebRTC VAD to enhance speech clarity in voice-based interactions. Additionally, you implemented Dynamic Tool Invocation, allowing AI to adapt its capabilities based on user input. Through LLM fine-tuning and evaluation, you optimized chatbot accuracy, making the IVR system more natural and efficient for appointment bookings.",
    technologies: ["Python", "Streamlit", "LLMs", "WebRTC VAD", "Gen AI", "AI", "Fast API", "Prompt Engineering"],
  },
  {
    title: "Multi Functional Chatbot Suite",
    description:
      "Developed a versatile chatbot suite powered by OpenAI’s LLM with RAG architecture, allowing users to interact with uploaded documents, extract information from URLs, and perform real-time translations. The chatbot provides a seamless user experience with an intuitive React frontend and a FastAPI backend for efficient data handling and processing.",
    technologies: ["React", "Tailwind CSS", "AI Chatbot", "LLMs", "Prompt Engineering", "Gen AI"],
  },
  {
    title: "Medical SOAP Notes Generator",
    description:
      "Built using Streamlit, this AI tool converts .wav files to SOAP medical notes. Enhanced with noise reduction, LLM evaluations, and speech processing to improve transcription accuracy.",
    technologies: ["Python", "Streamlit", "Gen AI", "LLMs", "Speech Processing", "Prompt Engineering"],
  },
  {
    title: "Restaurant Chatbot - (POC)",
    description:
      "Developed a chatbot for restaurants to assist users with queries about the menu, orders, and general interactions using AI and streaming responses for real-time communication.",
    technologies: ["Python", "AI", "Gen AI", "LLMs", "Agentic AI", "Prompt Engineering", "Streamlit"],
  },
  {
    title: "NL2SQL Warehouse Operations Chatbot",
    description:
      "Implemented a chatbot for warehouse managers to query inventory data using natural language. The chatbot converts user queries into SQL queries, interacts with the database, and leverages LLMs to provide accurate responses based on the queried data.",
    technologies: ["Python", "MS SQL", "AI", "Gen AI", "LLMs", "Natural Language Processing", "Streamlit"],
  },
  {
    title: "Data Engineering for WMS AI Operations",
    description:
      "Designed and developed a comprehensive dataset for Warehouse Management System (WMS) operations to feed AI models. The dataset includes structured data related to inventory, orders, and warehouse processes, enabling effective AI-driven decision-making and process automation.",
    technologies: ["Python", "SQL", "Data Engineering", "Pandas", "NumPy", "Data Cleaning", "Data Transformation"],
  },
];


export const CERTIFICATIONS = [
  {
    name: "Introduction to AI Agents",
    year: "2025"
  },
  {
    name: "Generative AI Fundamentals",
    year: 2025
  },
  {
    name: "Python",
    year: 2022
  },
  {
    name: "Node.js",
    year: 2023
  },
  {
    name: "Introduction to Databases",
    year: 2023
  },
  {
    name: "MS SQL",
    year: 2023
  },
  {
    name: "Dynamic Web Application",
    year: 2022
  },
  {
    name: "Programming Foundations",
    year: 2022
  },
  {
    name: "Responsive Websites",
    year: 2022
  },
  {
    name: "Advanced SQL",
    year: 2022
  },
  {
    name: "Prompt Engineering",
    year: 2025
  }

]


export const CONTACT = {
  address: "Thotapeta, Draksharamam, AP, 533262.",
  phoneNo: "+6281199239",
  email: "shafishaikdata@gmail.com",
};
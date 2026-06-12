import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Fraud Detection System',
      description: 'A machine learning system utilizing Isolation Forest for high-accuracy fraud detection in financial transactions.',
      link: 'https://github.com/shrilakshmikakati/Machine-Learning/blob/main/fraud_detection.ipynb',
      points: [
        'Developed a Fraud Detection System utilizing Isolation Forest on a simulated financial dataset, achieving 92% detection accuracy.',
        'Enhanced model performance by engineering time and amount-based features.',
        'Rigorously evaluated detection performance using anomaly scoring and true fraud labels.'
      ],
      tech: ['Python', 'Isolation Forest', 'Machine Learning', 'Data Engineering']
    },
    {
      title: 'Movie Recommender System',
      description: 'A machine learning system that recommends movies based on user preferences and movie metadata.',
      link: 'https://github.com/shrilakshmikakati/Machine-Learning/blob/main/MovieRecommender.ipynb',
      points: [
        'Developed a Movie Recommendation System utilizing content-based filtering techniques.',
        'Processed and analyzed movie datasets to extract meaningful features for similarity matching.',
        'Implemented algorithms to suggest the most relevant movies based on input selections.'
      ],
      tech: ['Python', 'Pandas', 'Scikit-Learn', 'Machine Learning', 'Data Processing']
    },
    {
      title: 'Academic Credential Verification System',
      description: 'A secure and transparent blockchain-based system for verifying academic credentials and marksheets using Solana.',
      points: [
        'Contributed as a Backend Developer to a blockchain-based academic credential verification system.',
        'Leveraged Solana blockchain and Rust smart contracts for secure and transparent verification logic.',
        'Integrated Google APIs (Cloud, Drive) to enable secure and efficient certificate storage and credential/marksheet verification.',
        'Utilized Phantom wallet to facilitate user transactions and interactions with the Solana blockchain.'
      ],
      tech: ['Solana', 'Rust', 'Google Cloud', 'Google Drive API', 'Phantom Wallet', 'Blockchain']
    },
    {
      title: 'Coal Mining Security Protocol',
      description: 'A blockchain-based system designed to prevent coal theft during concession using tamper-proof ledgers.',
      link: 'https://coal-mining-gma4gq9hl-shrilakshmikakatis-projects.vercel.app/',
      points: [
        'Implemented an Ethereum-based blockchain solution utilizing the Proof of Stake (PoS) protocol for immutable record keeping.',
        'Developed a responsive frontend interface using Next.js to provide real-time tracking and transparency.',
        'Built the backend architecture with Express.js to handle secure API requests and business logic.',
        'Integrated MongoDB for efficient and scalable database storage of off-chain metadata.'
      ],
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Ethereum Blockchain', 'Solidity']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-3 text-gradient">{project.title}</h3>
              <p className="text-text-secondary mb-6">{project.description}</p>
              
              <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-accent hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 w-fit"
                  >
                    View Project 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

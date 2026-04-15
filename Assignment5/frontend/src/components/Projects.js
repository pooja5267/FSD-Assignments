import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p className="tech">{project.technologies.join(' | ')}</p>
            <p className="desc">{project.description}</p>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

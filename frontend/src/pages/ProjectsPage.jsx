import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects, categories } from '../data/mock';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-page pt-24">
      {/* Hero Section */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-4 fade-in">My Projects</h1>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              A collection of projects that showcase my skills in web development, 
              AI/ML, and innovative problem-solving. Each project represents a unique 
              challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-sm bg-secondary-olive/10">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-accent" />
              <span className="font-semibold text-white">Filter by category:</span>
            </div>
            
            {/* Desktop Filter */}
            <div className="hidden sm:flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent text-inverse font-semibold'
                      : 'bg-secondary-olive/50 text-white hover:bg-secondary-olive hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="sm:hidden btn-secondary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={16} />
              Categories
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="sm:hidden mb-8 p-4 bg-secondary-olive/20 rounded-lg fade-in">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-accent text-inverse font-semibold'
                        : 'bg-secondary-olive/50 text-white hover:bg-secondary-olive hover:text-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-secondary mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-secondary-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="heading-3 text-secondary mb-4">No projects found</h3>
              <p className="body-medium text-secondary">
                Try selecting a different category to see more projects.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="card group cursor-pointer hover:scale-105 transition-all duration-300 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-accent text-inverse px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-secondary-yellow text-inverse px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5 text-black" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5 text-black" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="heading-3 text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="body-medium">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary-olive/50 text-sm rounded-full text-secondary hover:bg-secondary-olive/70 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost flex-1 text-center"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost flex-1 text-center"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {!project.githubUrl && !project.liveUrl && (
                        <div className="btn-ghost flex-1 text-center cursor-not-allowed opacity-50">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-olive/10 curve-divider">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4 fade-in">Have a Project in Mind?</h2>
            <p className="body-large text-secondary mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              I'm always excited to work on new and challenging projects. 
              Let's discuss your ideas and see how we can bring them to life together.
            </p>
            <a
              href="/contact"
              className="btn-primary fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
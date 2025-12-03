'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: number
  title: string
  url: string
  description: string
  technologies: string[]
  details: string
}

interface ResearchItem {
  id: number
  title: string
  topic: string
  url: string
  summary: string
  details: string
  tags: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'applyied',
    url: 'applyied.com',
    description: 'Job application tracking platform',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    details: 'Co-founded job application tracker and assistant. Collaborated with two other developers and maintained for 50+ users.'
  }
]

const researchItems: ResearchItem[] = [
  {
    id: 1,
    title: 'Ethical Analysis of Khanmigo',
    topic: 'AI in Education',
    url: 'https://docs.google.com/presentation/d/1s3i7D1mswQfr8_u7wT5xJOQgqyjwMOQrppyviB2uF1A/edit?usp=sharing',
    summary: 'An ethical analysis examining Khanmigo\'s AI tutoring system',
    details: 'Working in a team of 4, we conducted an ethical analysis on Khan Academy\'s Educational LLM tool Khanmigo. See link for more info on methodology, findings, and conclusions for our presentation.',
    tags: ['AI Ethics', 'Education', 'EdTech', 'Khanmigo']
  }
]

export default function Home() {
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [researchOpen, setResearchOpen] = useState(false)
  const [expandedPortfolio, setExpandedPortfolio] = useState<number | null>(null)
  const [expandedResearch, setExpandedResearch] = useState<number | null>(null)

  return (
    <main className="min-h-screen p-8 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            chris johnson
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Portfolio Section */}
        <section className="animate-slide-up">
          <button
            onClick={() => setPortfolioOpen(!portfolioOpen)}
            className="w-full group relative px-8 py-6 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Portfolio
              </span>
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {portfolioOpen && (
            <div className="mt-4 space-y-4 animate-slide-up">
              {portfolioItems.map((item) => (
                <div key={item.id} className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedPortfolio(expandedPortfolio === item.id ? null : item.id)}
                    className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <a 
                          href={`https://${item.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 text-sm mb-2 inline-flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.url}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedPortfolio === item.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedPortfolio === item.id && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-700 animate-slide-up">
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Details</h4>
                          <p className="text-gray-300">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Personal Research Section */}
        <section className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => setResearchOpen(!researchOpen)}
            className="w-full group relative px-8 py-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Personal Research
              </span>
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${researchOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {researchOpen && (
            <div className="mt-4 space-y-4 animate-slide-up">
              {researchItems.map((item) => (
                <div key={item.id} className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedResearch(expandedResearch === item.id ? null : item.id)}
                    className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-blue-400 text-sm mb-2">{item.topic}</p>
                        <a 
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm mb-2 inline-flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Presentation
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <p className="text-gray-400">{item.summary}</p>
                      </div>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedResearch === item.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedResearch === item.id && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-700 animate-slide-up">
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Details</h4>
                          <p className="text-gray-300">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Decorative Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </main>
  )
}

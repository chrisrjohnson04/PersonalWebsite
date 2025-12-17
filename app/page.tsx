'use client'

import { useState } from 'react'
import Image from 'next/image'

type ItemType = 'portfolio' | 'research' | null

interface PortfolioItem {
  id: string
  type: 'portfolio'
  title: string
  url: string
  logo?: string
  description: string
  technologies: string[]
  details: string
}

interface ResearchItem {
  id: string
  type: 'research'
  title: string
  topic: string
  url: string
  summary: string
  details: string
  tags: string[]
}

type Item = PortfolioItem | ResearchItem

const portfolioItems: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    type: 'portfolio',
    title: 'applyied',
    url: 'applyied.com',
    logo: '/applyied_star.jpg',
    description: 'Job application tracking platform',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
    details: 'Co-founded job application tracker and assistant. Collaborated with two other developers and maintained for 50+ users.'
  },
  {
    id: 'portfolio-2',
    type: 'portfolio',
    title: 'Stock Portfolio Analysis',
    url: 'github.com/samparkk13/Stock-Portfolio-Analysis',
    description: 'LLM for Financial Tools',
    technologies: ['Python', 'OpenAI API', 'LangChain'],
    details: 'Cornell University capstone project with Sam Park and Lucas Guillet. Fine-tuned OpenAI API model to use Python tools that we created for stock portfolio analysis. Built a web app using Flask to interact with the LLM.'
  },
  {
    id: 'portfolio-3',
    type: 'portfolio',
    title: 'BeanSearch',
    url: 'http://4300showcase.infosci.cornell.edu:5244/',
    description: 'Search engine implementation for INFO 4300',
    technologies: ['Python', 'Information Retrieval', 'Flask'],
    details: 'A search engine built for Cornell course INFO 4300 Language and Information. Used cosine similarity and Singular Value Decomposition (SVD) for document similarity. Prepared dataset of coffee beans and attached natural language documents to use for search engine.'
  }
]

const researchItems: ResearchItem[] = [
  {
    id: 'research-1',
    type: 'research',
    title: 'Ethical Analysis of Khanmigo',
    topic: 'AI in Education',
    url: 'docs.google.com/presentation/d/1s3i7D1mswQfr8_u7wT5xJOQgqyjwMOQrppyviB2uF1A/edit?usp=sharing',
    summary: 'An ethical analysis examining Khanmigo\'s AI tutoring system',
    details: 'Working in a team of 4, we conducted an ethical analysis on Khan Academy\'s Educational LLM tool Khanmigo. See link for more info on methodology, findings, and conclusions for our presentation.',
    tags: ['AI Ethics', 'Education', 'EdTech', 'Khanmigo']
  }
]

const allItems: Item[] = [...portfolioItems, ...researchItems]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Left Sidebar */}
      <aside className="w-full md:w-[400px] bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 overflow-y-auto">
        {/* Header in Sidebar */}
        <button 
          onClick={() => {
            setSelectedItem(null)
            setShowResume(false)
          }}
          className="p-6 border-b border-gray-200 text-left hover:bg-gray-50 transition-colors w-full"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
            chris johnson
          </h1>
          <p className="text-sm text-gray-500">CS @ Cornell University</p>
        </button>

        {/* Resume Button */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={() => {
              setShowResume(true)
              setSelectedItem(null)
            }}
            className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg transition-all shadow-sm hover:shadow-md font-medium ${
              showResume
                ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white'
                : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </button>
        </div>

        {/* Items List */}
        <nav className="flex-1 p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Portfolio</div>
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem(item)
                setShowResume(false)
              }}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                selectedItem?.id === item.id
                  ? 'bg-purple-50 border-2 border-purple-500 shadow-sm'
                  : 'bg-gray-50 border-2 border-transparent hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {item.logo && (
                  <img src={item.logo} alt={`${item.title} logo`} className="w-8 h-8 rounded object-cover" />
                )}
                <h3 className="font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            </button>
          ))}

          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3 pt-6">Research</div>
          {researchItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem(item)
                setShowResume(false)
              }}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                selectedItem?.id === item.id
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                  : 'bg-gray-50 border-2 border-transparent hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-blue-600 mb-1">{item.topic}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {showResume ? (
            // Resume Viewer
            <div className="animate-fade-in h-full">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[calc(100vh-200px)]"
                  title="Resume"
                />
              </div>
            </div>
          ) : !selectedItem ? (
            // Welcome Screen
            <div className="flex items-center justify-center min-h-[70vh] animate-fade-in">
              <div className="text-center space-y-6 max-w-2xl">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">welcome!</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  i'm chris, a student at Cornell University studying computer science, graduating in December 2026.
                </p>
                <p className="text-lg text-gray-500">
                  select a project or research item from the sidebar to learn more about my work.
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-400 pt-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Start exploring</span>
                </div>
              </div>
            </div>
          ) : selectedItem.type === 'portfolio' ? (
            // Portfolio Detail View
            <div className="animate-fade-in space-y-8">
              <div className="flex items-start gap-4">
                {selectedItem.logo && (
                  <img src={selectedItem.logo} alt={`${selectedItem.title} logo`} className="w-16 h-16 rounded-xl object-cover shadow-md" />
                )}
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{selectedItem.title}</h1>
                  <a 
                    href={selectedItem.url.startsWith('http') ? selectedItem.url : `https://${selectedItem.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 group"
                  >
                    {selectedItem.url}
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedItem.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-purple-50 text-purple-700 font-medium border border-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                <p className="text-gray-700 leading-relaxed">{selectedItem.details}</p>
              </div>
            </div>
          ) : (
            // Research Detail View
            <div className="animate-fade-in space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{selectedItem.title}</h1>
                <p className="text-xl text-blue-600 font-medium mb-4">{selectedItem.topic}</p>
                <a 
                  href={selectedItem.url.startsWith('http') ? selectedItem.url : `https://${selectedItem.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Presentation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedItem.summary}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research Details</h3>
                <p className="text-gray-700 leading-relaxed">{selectedItem.details}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    date: '2024-01-15',
    excerpt: 'Learn how to build modern web applications with the latest version of Next.js.',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: 2,
    title: 'Building Scalable APIs',
    date: '2024-01-10',
    excerpt: 'Best practices for creating APIs that can handle growth and high traffic.',
    tags: ['API', 'Backend', 'Architecture']
  },
  {
    id: 3,
    title: 'The Future of TypeScript',
    date: '2024-01-05',
    excerpt: 'Exploring upcoming features and the evolution of TypeScript in modern development.',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen p-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Blog Posts
          </h1>
          <p className="text-gray-400 text-lg">Thoughts on technology, development, and more.</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 animate-slide-up">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">{post.date}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
          <p className="text-gray-400">More posts coming soon...</p>
        </div>
      </div>
    </div>
  )
}

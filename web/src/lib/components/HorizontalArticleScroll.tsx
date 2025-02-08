import Link from 'next/link'

interface HorizontalArticleScrollProps {
  articles: {
    title: string;
    image?: string;
    author: string;
    date: string;
  }[]
}

export default function HorizontalArticleScroll({ articles }: HorizontalArticleScrollProps) {
  return (
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {articles.map((article) => (
        <Link 
          key={article.title}
          href={`/articles/${encodeURIComponent(article.title)}`}
          className="
            flex-shrink-0 w-64 
            bg-white 
            rounded-lg 
            shadow-md 
            overflow-hidden 
            hover:shadow-lg 
            transition-shadow
          "
        >
          {article.image && (
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          )}

          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
            
            <div className="flex items-center text-sm text-gray-600">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <time>{new Date(article.date).toLocaleDateString()}</time>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
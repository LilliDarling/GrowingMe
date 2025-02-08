import Link from 'next/link'

interface FeaturedArticleProps {
  article: {
    title: string;
    image?: string;
    author: string;
    date: string;
    chapters?: { header: string }[];
  }
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
    if (!article) return null

    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {article.image && (
                <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                </div>
            )}

            <div>
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                
                <div className="flex items-center text-gray-600 mb-4">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <time>{new Date(article.date).toLocaleDateString()}</time>
                </div>

                {article.chapters && article.chapters.length > 0 && (
                    <p className="text-lg mb-6">{article.chapters[0].header}</p>
                )}

                <Link 
                    href={`/articles/${encodeURIComponent(article.title)}`} 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Read Full Article
                </Link>
            </div>
        </div>
    )
}
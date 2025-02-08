import Link from 'next/link'

interface LatestArticlesProps {
    articles: {
        title: string;
        image?: string;
        author: string;
        date: string;
        chapters?: { header: string }[];
    }[]
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
                <Link 
                    key={article.title}
                    href={`/articles/${encodeURIComponent(article.title)}`}
                    className="
                        bg-white 
                        rounded-lg 
                        shadow-md 
                        overflow-hidden 
                        hover:shadow-lg 
                        transition-shadow
                        flex flex-col
                    "
                >
                    {article.image && (
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    )}

                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-bold text-xl mb-4 line-clamp-2">{article.title}</h3>
                        
                        {article.chapters && article.chapters.length > 0 && (
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {article.chapters[0].header}
                            </p>
                        )}

                        <div className="flex items-center text-gray-600 mt-auto">
                            <span className="mx-2">•</span>
                            <time>{new Date(article.date).toLocaleDateString()}</time>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
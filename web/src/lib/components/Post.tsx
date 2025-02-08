import Link from 'next/link'
 
interface PostProps {
    post: {
        title: string;
        content?: string;
        image?: string;
        category?: {
          name: string;
        };
    }
}

export default function Post({ post }: PostProps) {
    return (
        <li>
            <Link href={`/articles/${encodeURIComponent(post.title)}`}>
                <h2>{post.title}</h2>
                {post.category && <p>Category: {post.category.name}</p>}
                {post.image && (
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-auto max-h-64 object-cover"
                    />
                )}
            </Link>
        </li>
    )
}
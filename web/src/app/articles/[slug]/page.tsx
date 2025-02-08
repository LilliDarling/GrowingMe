import { getPostByTitle, getPosts } from '@/lib/utils/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = await getPosts()
    return posts.map((post) => ({
        slug: post.title
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPostByTitle(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article>
            <h1>{post.title}</h1>
            {post.date && <time>{post.date}</time>}
            {post.chapters && post.chapters.map((chapter, index) => (
                <section key={index}>
                    <h2>{chapter.header}</h2>
                    {chapter.quote && <blockquote>{chapter.quote}</blockquote>}
                    {chapter.image && (
                        <img 
                            src={chapter.image} 
                            alt={chapter.header} 
                            className="my-4 max-w-full"
                        />
                    )}
                    {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                </section>
            ))}
            
            {post.resources && post.resources.length > 0 && (
                <section>
                    <h2>Resources</h2>
                    <ul>
                        {post.resources.map((resource, index) => (
                            <li key={index}>{resource.resource}</li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    )
}
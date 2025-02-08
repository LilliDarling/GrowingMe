import Post from "@/lib/components/Post"
import { PostsService } from "@/lib/api/posts"

export default async function Articles() {
    try {
        const posts = await PostsService.getPosts()
    
        return (
        <ul>
            {posts.map((post) => (
            <Post key={post.title} post={post} />
            ))}
        </ul>
        )
    } catch (error) {
        return (
        <div>
            <p>Error loading posts</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
        )
    }
}
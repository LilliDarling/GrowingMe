import { PostsService } from '../api/posts'

export async function getPosts() {
    try {
        const posts = await PostsService.getPosts()
        
        return posts.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            }
            return 0
        })
    } catch (error) {
        console.error("Error fetching posts:", error)
        return []
    }
}

export async function getPostByTitle(title: string) {
    try {
        return await PostsService.getPostByTitle(title)
    } catch (error) {
        console.error(`Error fetching post with title ${title}:`, error)
        return null
    }
}
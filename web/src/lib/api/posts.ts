import { PostIn, PostList, PostOut } from "../types/posts";
import { api } from "./client";

export const PostsService = {
    async createPost(postData: PostIn): Promise<PostOut> {
        try {
            const response = await api.post('/posts', postData);
            return response.data;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    },
  
    async getPosts(): Promise<PostOut[]> {
        try {
            const response = await api.get<PostList>('/posts');
            return response.data.posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    },
  
    async getPostByTitle(title: string): Promise<PostIn> {
        try {
            const response = await api.get(`/posts/${encodeURIComponent(title)}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching post with title ${title}:`, error);
            throw error;
        }
    },
  
    async updatePost(title: string, postData: Partial<PostIn>): Promise<PostOut> {
        try {
            const response = await api.put(`/posts/${encodeURIComponent(title)}`, postData);
            return response.data;
        } catch (error) {
            console.error(`Error updating post with title ${title}:`, error);
            throw error;
        }
    },
  
    async deletePost(title: string): Promise<void> {
        try {
            await api.delete(`/posts/${encodeURIComponent(title)}`);
        } catch (error) {
            console.error(`Error deleting post with title ${title}:`, error);
            throw error;
        }
    }
  };
  
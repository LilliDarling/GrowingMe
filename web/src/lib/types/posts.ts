export interface Chapter {
    header: string;
    image?: string;
    quote?: string;
    paragraphs: string[];
}
  
export interface Resource {
    resource: string;
}
  
export interface Category {
    name: string;
}
  
export interface PostIn {
    title: string;
    date: string;
    author: string;
    image: string;
    chapters: Chapter[];
    resources?: Resource[];
    category: string;
}
  
export interface PostOut {
    title: string;
    date: string;
    author: string;
    image: string;
    chapters: Chapter[];
    resources?: Resource[];
    category: Category;
}
  
export interface PostList {
    posts: PostOut[];
}
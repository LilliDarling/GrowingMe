import { getPosts } from '@/lib/utils/posts'
import FeaturedArticle from '@/lib/components/FeaturedArticle'
import CategoryMenu from '@/lib/components/CategoryMenu'
import HorizontalArticleScroll from '@/lib/components/HorizontalArticleScroll'
import WorkbookSignup from '@/lib/components/WorkbookSignup'
import LatestArticles from '@/lib/components/LatestArticles'

export default async function DatabasePage() {
    const posts = await getPosts()

    const featuredArticle = posts[0]

    const scrollArticles = posts.slice(1, 5)

    const latestArticles = posts.slice(0, 2)

    return (
        <div className="container mx-auto px-4">
            <section className="mb-16">
                <FeaturedArticle article={featuredArticle} />
            </section>

            <section className="mb-16">
                <CategoryMenu />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Explore More</h2>
                <HorizontalArticleScroll articles={scrollArticles} />
            </section>

            <section className="mb-16">
                <WorkbookSignup />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <LatestArticles articles={latestArticles} />
            </section>
        </div>
    )
}
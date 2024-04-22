import { ArticleBody } from '@/components/molecules';
import { BlogSection } from '@/components/molecules/BlogSection';
import { HeaderArticle } from '@/components/organisms/HeaderArticle';

function BlogArticle() {
    return (
        <>
            <HeaderArticle />
            <main>
                <ArticleBody />
                <BlogSection />
            </main>
        </>
    );
}

export default BlogArticle;

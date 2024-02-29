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

const CDATAHEADER = {
    title: 'Blog',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default BlogArticle;

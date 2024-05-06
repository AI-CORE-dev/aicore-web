import { ArticleBlog } from '@/components/molecules';
import { HeaderBlog } from '@/components/organisms/HeaderBlog';

function Blog() {
    return (
        <>
            <HeaderBlog isButtonSecondary isVideo title={CDATAHEADER.title} />
            {/* <NavBlog /> */}
            <main>
                <ArticleBlog />
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

export default Blog;

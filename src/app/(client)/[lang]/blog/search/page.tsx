import { SearchBlog } from '@/components/molecules';
import { HeaderBlog } from '@/components/organisms/HeaderBlog';
import { NavBlog } from '@/components/organisms/NavBlog';

function Blog() {
    return (
        <>
            <HeaderBlog isButtonSecondary isVideo title={CDATAHEADER.title} />
            <NavBlog />
            <main>
                <SearchBlog />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Blog Search',
    subtitle:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labre et dolore magna aliqua.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Blog;

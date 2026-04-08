import PagesMetaHead from '../../components/PagesMetaHead';
import Experience from '../../components/experience/Experience';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function index() {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title="Work Experience" />

            <Experience />
        </div>
    );
}

// Server-side translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','home', 'experience'])),
    },
  };
}

export default index;

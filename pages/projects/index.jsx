import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function index() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Projects" />

			<ProjectsGrid />
		</div>
	);
}


// Server-side translations
export async function getStaticProps({ locale }) {
  return {
	props: {
	  ...(await serverSideTranslations(locale, ['common','home', 'projects'])),
	},
  };
}
export default index;

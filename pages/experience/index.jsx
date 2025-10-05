import PagesMetaHead from '../../components/PagesMetaHead';
import Experience from '../../components/experience/Experience';

function index() {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title="Work Experience" />

            <Experience />
        </div>
    );
}

export default index;

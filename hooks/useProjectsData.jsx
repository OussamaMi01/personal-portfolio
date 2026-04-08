import { useTranslation } from 'next-i18next';
import { projectsData } from '../data/projectsData';
 
// Uses project.id directly as the key — these are hardcoded strings in projectsData.js
// e.g. 'dfs-project-id', 'corba-distributed-system-id', etc.
 
export const useProjectsData = () => {
  const { t } = useTranslation('projects');
  const raw = t('items', { returnObjects: true });
  const items = typeof raw === 'object' && raw !== null ? raw : {};
 
  return projectsData.map(project => {
    const tr = items[project.id] || {};
    return {
      ...project,
      title:    tr.title    || project.title,
      category: tr.category || project.category,
      ProjectHeader: {
        ...project.ProjectHeader,
        title: tr.title || project.ProjectHeader?.title,
        tags:  Array.isArray(tr.tags) ? tr.tags : project.ProjectHeader?.tags,
      },
      ProjectInfo: {
        ...project.ProjectInfo,
        ClientHeading:         tr.clientHeading         || project.ProjectInfo?.ClientHeading,
        ObjectivesHeading:     tr.objectivesHeading     || project.ProjectInfo?.ObjectivesHeading,
        ObjectivesDetails:     tr.objectivesDetails     || project.ProjectInfo?.ObjectivesDetails,
        ProjectDetailsHeading: tr.projectDetailsHeading || project.ProjectInfo?.ProjectDetailsHeading,
        ProjectDetails: Array.isArray(tr.projectDetails)
          ? tr.projectDetails.map((details, i) => ({
              ...(project.ProjectInfo?.ProjectDetails?.[i] || {}),
              details,
            }))
          : project.ProjectInfo?.ProjectDetails,
      },
    };
  });
};
 
export default useProjectsData;
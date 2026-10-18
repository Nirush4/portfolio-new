import { useState, type JSX } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FRONTEND_PROJECTS,
  GRAPHIC_PROJECTS,
  type LocalizedFrontendProject,
  type LocalizedGraphicProject,
} from '../data/projectsData';
import type { translations } from '../constants/translations';

import { ProjectHeader } from '../components/project-details/ProjectHeader';
import { ProjectThumbnail } from '../components/project-details/ProjectThumbnail';
import {
  ProjectGallery,
  type GalleryItem,
} from '../components/project-details/ProjectGallery';

interface ProjectDetailsProps {
  lang: 'NO' | 'EN';
  t: (typeof translations)['NO'];
}

export const ProjectDetailsPage = ({
  lang,
}: ProjectDetailsProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? Number(id) : NaN;
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);
  const [bottomCopied, setBottomCopied] = useState(false);

  const project =
    FRONTEND_PROJECTS.find((p) => p.id === projectId) ||
    GRAPHIC_PROJECTS.find((p) => p.id === projectId);

  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleCopyUrl = (isBottom = false) => {
    navigator.clipboard.writeText(window.location.href);
    if (isBottom) {
      setBottomCopied(true);
      setTimeout(() => setBottomCopied(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderNavToolbar = (isBottom = false) => (
    <div className='flex flex-wrap items-center justify-between gap-4 text-xs text-white'>
      <Link
        to='/#projects'
        onClick={handleBackToProjects}
        title={
          lang === 'NO' ? 'Gå tilbake til prosjekter' : 'Go back to projects'
        }
        className='inline-flex items-center gap-2 hover:text-[rgb(237,242,81)] transition-colors group cursor-pointer bg-[#0C121E] px-4 py-2 rounded-none border border-[#1E293B] hover:border-[rgb(237,242,81)] shadow-sm'
      >
        <span className='text-[rgb(237,242,81)] group-hover:-translate-x-1 transition-transform'>
          &larr;
        </span>
        <span className='text-sm font-bold'>
          {lang === 'NO' ? 'Tilbake til Prosjekter' : 'Back to Projects'}
        </span>
        <span className='text-xs text-[#8F9BAE] hidden sm:inline font-mono'>
          (cd /portfolio/projects)
        </span>
      </Link>

      <div className='flex items-center gap-3'>
        {!isBottom && (
          <span className='hidden sm:inline-block font-mono text-[11px] text-[rgb(237,242,81)] bg-[#0C121E] px-3 py-1.5 rounded-none border border-[#1E293B]'>
            case-study / id-{project?.id}
          </span>
        )}

        <button
          onClick={() => handleCopyUrl(isBottom)}
          className='inline-flex items-center gap-2 px-4 py-2 bg-[#0C121E] hover:bg-[#1E293B] text-white border border-[#1E293B] hover:border-[rgb(237,242,81)] text-xs font-mono rounded-none transition-all cursor-pointer shadow-md'
          title='Copy Project URL'
        >
          {isBottom ? (
            bottomCopied ? (
              <>
                <span className='text-[rgb(237,242,81)] font-bold'>✓</span>
                <span className='text-[rgb(237,242,81)] font-bold'>
                  Link Copied!
                </span>
              </>
            ) : (
              <>
                <span>🔗</span>
                <span className='font-bold'>Copy Link</span>
              </>
            )
          ) : copied ? (
            <>
              <span className='text-[rgb(237,242,81)] font-bold'>✓</span>
              <span className='text-[rgb(237,242,81)] font-bold'>
                Link Copied!
              </span>
            </>
          ) : (
            <>
              <span>🔗</span>
              <span className='font-bold'>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  if (!project) {
    return (
      <div className='max-w-3xl mx-auto px-6 py-32 text-center font-mono text-white bg-[#0B1220]'>
        <div className='border border-[#1E293B] bg-[#121A2C] p-8 rounded-none shadow-2xl'>
          <h2 className='text-3xl font-bold text-[#FF5F56] mb-3'>
            404 // Project Not Found
          </h2>
          <p className='text-[#8F9BAE] mb-6 font-sans text-sm'>
            The project workspace you are trying to access doesn&apos;t exist or
            has been relocated.
          </p>
          <Link
            to='/#projects'
            onClick={handleBackToProjects}
            title={
              lang === 'NO'
                ? 'Gå tilbake til prosjekter'
                : 'Go back to projects'
            }
            className='inline-flex items-center gap-2 hover:text-[rgb(237,242,81)] transition-colors group cursor-pointer bg-[#0C121E] px-4 py-2 rounded-none border border-[#1E293B]'
          >
            <span className='text-[rgb(237,242,81)] group-hover:-translate-x-1 transition-transform'>
              &larr;
            </span>
            <span className='text-sm font-bold'>
              {lang === 'NO' ? 'Tilbake til Prosjekter' : 'Back to Projects'}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const isCoding =
    project.category === 'frontend' ||
    project.category === 'fullstack' ||
    project.category === 'backend';

  const codingData = isCoding ? (project as LocalizedFrontendProject) : null;
  const graphicData = !isCoding ? (project as LocalizedGraphicProject) : null;

  return (
    <div className='mx-auto px-6 py-12 mt-8 font-mono text-[#8F9BAE] selection:bg-[rgb(237,242,81)] selection:text-[#0C121E] bg-[#0B1220]'>
      <div className='max-w-6xl m-auto mb-6 bg-[#121A2C] p-4 rounded-none border border-[#1E293B] shadow-lg'>
        {renderNavToolbar(false)}
      </div>

      <div className='max-w-6xl m-auto border border-[#1E293B] bg-[#121A2C] rounded-none overflow-hidden shadow-2xl'>
        <div className='border-b border-[#1E293B] bg-[#0C121E] px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block'></span>
            <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block'></span>
            <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block'></span>
            <span className='ml-3 text-xs text-[#8F9BAE] font-mono hidden sm:inline'>
              {project.name.toLowerCase().replace(/\s+/g, '-')}.config
            </span>
          </div>
          <span className='text-[10px] font-bold tracking-widest text-[rgb(237,242,81)] bg-[#0C121E] px-2.5 py-0.5 rounded-none border border-[#1E293B]'>
            {project.category}
          </span>
        </div>

        <div className='p-6 md:p-10 space-y-8 bg-[#121A2C]'>
          <ProjectHeader
            name={project.name}
            projectType={
              graphicData?.projectType
                ? graphicData.projectType[lang]
                : undefined
            }
            description={project.description[lang]}
          />

          <ProjectThumbnail thumbnail={project.thumbnail} name={project.name} />

          {isCoding && codingData && (
            <div className='space-y-10 pt-4 font-sans'>
              {codingData.problem && (
                <div className='border border-[#1E293B] bg-[#0C121E] p-6 rounded-none relative overflow-hidden'>
                  <div className='absolute top-0 left-0 w-1.5 h-full bg-[rgb(237,242,81)]'></div>
                  <h3 className='text-white text-base font-bold mb-2 flex items-center gap-2 font-mono'>
                    <span className='text-[rgb(237,242,81)]'>01 //</span>{' '}
                    {lang === 'NO'
                      ? 'Utfordringen & Brukerbehovet'
                      : 'The Challenge & User Need'}
                  </h3>
                  <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                    {codingData.problem[lang]}
                  </p>
                </div>
              )}

              {codingData.uxProcess &&
                codingData.uxProcess[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[rgb(237,242,81)]'>02 //</span>{' '}
                      {lang === 'NO'
                        ? 'Forskning & Brukererfaringselementer'
                        : 'Research & User Experience Steps'}
                    </h3>
                    <div className='grid gap-3'>
                      {codingData.uxProcess[lang].map((step, idx) => (
                        <div
                          key={idx}
                          className='border border-[#1E293B] bg-[#0C121E] p-4 rounded-none flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[rgb(237,242,81)] bg-[#121A2C] px-2 py-0.5 rounded-none border border-[#1E293B] shrink-0 mt-0.5'>
                            {lang === 'NO'
                              ? `Trinn 0${idx + 1}`
                              : `Step 0${idx + 1}`}
                          </span>
                          <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {codingData.finalSolution &&
                codingData.finalSolution[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[#27C93F]'>03 //</span>{' '}
                      {lang === 'NO'
                        ? 'Sluttproduktet & Nøkkelfunksjoner'
                        : 'The Final Product & Key Features'}
                    </h3>
                    <div className='grid gap-3'>
                      {codingData.finalSolution[lang].map((sol, idx) => (
                        <div
                          key={idx}
                          className='border border-[#1E293B] bg-[#0C121E] p-4 rounded-none flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[#27C93F] bg-[#121A2C] px-2 py-0.5 rounded-none border border-[#1E293B] shrink-0 mt-0.5'>
                            {lang === 'NO' ? 'Ferdig' : 'Done'}
                          </span>
                          <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                            {sol}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              <ProjectGallery
                gallery={codingData.gallery || []}
                projectName={project.name}
              />

              <div className='space-y-3 pt-2'>
                <h3 className='text-white text-sm font-bold font-mono tracking-wide text-[#8F9BAE]'>
                  {lang === 'NO'
                    ? 'Teknologier & Rammeverk'
                    : 'Technologies & Frameworks Deployed'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {(codingData.technologies || []).map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 bg-[#0C121E] text-[rgb(237,242,81)] border border-[#1E293B] rounded-none font-mono'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-4 pt-6 border-t border-[#1E293B]'>
                {codingData.live && (
                  <a
                    href={codingData.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[rgb(237,242,81)] text-[#0C121E] text-xs font-mono font-bold border-2 border-[#0C121E] shadow-[3px_3px_0px_0px_rgba(12,18,30,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(12,18,30,1)] transition-all rounded-none flex items-center gap-2'
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
                {codingData.github && (
                  <a
                    href={codingData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#0C121E] text-white border border-[#1E293B] text-xs font-mono font-bold hover:border-[rgb(237,242,81)] transition-all rounded-none flex items-center gap-2'
                  >
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {!isCoding && graphicData && (
            <div className='space-y-10 pt-4 font-sans'>
              {graphicData.challenge && (
                <div className='border border-[#1E293B] bg-[#0C121E] p-6 rounded-none relative overflow-hidden'>
                  <div className='absolute top-0 left-0 w-1.5 h-full bg-[rgb(237,242,81)]'></div>
                  <h3 className='text-white text-base font-bold mb-2 flex items-center gap-2 font-mono'>
                    <span className='text-[rgb(237,242,81)]'>01 //</span>{' '}
                    {lang === 'NO'
                      ? 'Designutfordring & Målsetting'
                      : 'Design Challenge & Objective'}
                  </h3>
                  <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                    {graphicData.challenge[lang]}
                  </p>
                </div>
              )}

              {graphicData.research &&
                graphicData.research[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[rgb(237,242,81)]'>02 //</span>{' '}
                      {lang === 'NO'
                        ? 'Markedsundersøkelse & Oppdagelse'
                        : 'Market Research & Discovery'}
                    </h3>
                    <div className='grid gap-3'>
                      {graphicData.research[lang].map((res, idx) => (
                        <div
                          key={idx}
                          className='border border-[#1E293B] bg-[#0C121E] p-4 rounded-none flex items-start gap-3.5'
                        >
                          <span className='text-[rgb(237,242,81)] font-bold text-base leading-none shrink-0 mt-1'>
                            &bull;
                          </span>
                          <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                            {res}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {graphicData.designProcess &&
                graphicData.designProcess[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[rgb(237,242,81)]'>03 //</span>{' '}
                      {lang === 'NO'
                        ? 'Kreativ Prosess & Utførelse'
                        : 'Creative Process & Execution'}
                    </h3>
                    <div className='grid gap-3'>
                      {graphicData.designProcess[lang].map((proc, idx) => (
                        <div
                          key={idx}
                          className='border border-[#1E293B] bg-[#0C121E] p-4 rounded-none flex items-start gap-3.5'
                        >
                          <span className='text-[rgb(237,242,81)] font-bold text-base leading-none shrink-0 mt-1'>
                            &bull;
                          </span>
                          <p className='text-sm text-[#8F9BAE] leading-relaxed'>
                            {proc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {graphicData.colors && graphicData.colors.length > 0 && (
                <div className='space-y-4 pt-2'>
                  <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                    <span className='text-[rgb(237,242,81)]'>04 //</span>{' '}
                    {lang === 'NO'
                      ? 'Fargesystem & Palett'
                      : 'Color System & Palette'}
                  </h3>
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                    {graphicData.colors.map((c, i) => (
                      <div
                        key={i}
                        className='border border-[#1E293B] bg-[#0C121E] p-3 rounded-none flex flex-col items-center text-center gap-2'
                      >
                        <span
                          role='img'
                          aria-label={`Color swatch: ${c.name}`}
                          className='w-10 h-10 rounded-none border border-white/20 shadow-md inline-block'
                          style={{ backgroundColor: c.value }}
                        ></span>
                        <div>
                          <p className='text-xs font-bold text-white font-sans'>
                            {c.name}
                          </p>
                          <p className='text-[10px] text-[#8F9BAE] font-mono'>
                            {c.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <ProjectGallery
                gallery={(graphicData.gallery || []) as GalleryItem[]}
                projectName={project.name}
              />

              <div className='space-y-3 pt-2'>
                <h3 className='text-white text-sm font-bold font-mono tracking-wide text-[#8F9BAE]'>
                  {lang === 'NO'
                    ? 'Programvare & Kreative Verktøy Brukt'
                    : 'Software & Creative Tools Used'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {(graphicData.tools || []).map((tool, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 bg-[#0C121E] text-[rgb(237,242,81)] border border-[#1E293B] rounded-none font-mono'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-4 pt-6 border-t border-[#1E293B]'>
                {graphicData.behance && (
                  <a
                    href={graphicData.behance}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[rgb(237,242,81)] text-[#0C121E] text-xs font-mono font-bold border-2 border-[#0C121E] shadow-[3px_3px_0px_0px_rgba(12,18,30,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(12,18,30,1)] transition-all rounded-none flex items-center gap-2'
                  >
                    <span>Behance ↗</span>
                  </a>
                )}
                {graphicData.figma && (
                  <a
                    href={graphicData.figma}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#0C121E] text-white border border-[#1E293B] text-xs font-mono font-bold hover:border-[rgb(237,242,81)] transition-all rounded-none flex items-center gap-2'
                  >
                    <span>Figma File</span>
                  </a>
                )}
              </div>
            </div>
          )}

          <div className='pt-8 mt-12 border-t border-[#1E293B] bg-[#0C121E] p-4 rounded-none'>
            {renderNavToolbar(true)}
          </div>
        </div>
      </div>
    </div>
  );
};

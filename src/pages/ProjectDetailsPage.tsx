import { useState, type JSX } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  const [copied, setCopied] = useState(false);

  const project =
    FRONTEND_PROJECTS.find((p) => p.id === projectId) ||
    GRAPHIC_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className='max-w-3xl mx-auto px-6 py-32 text-center font-mono text-white'>
        <div
          style={{
            backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
          }}
          className='border border-[#30363D] p-8 rounded-2xl shadow-2xl'
        >
          <h2 className='text-3xl font-bold text-[#FF5F56] mb-3'>
            404 // Project Not Found
          </h2>
          <p className='text-[#8B949E] mb-6 font-sans text-sm'>
            The project workspace you are trying to access doesn&apos;t exist or
            has been relocated.
          </p>
          <Link
            to='/'
            className='inline-flex items-center gap-2 px-6 py-2.5 bg-[#21262D] text-[#C9D1D9] border border-[#30363D] text-xs font-mono rounded hover:border-[#C586C0] hover:text-[#C586C0] transition-all'
          >
            <span>&lt;--</span> cd /portfolio/home
          </Link>
        </div>
      </div>
    );
  }

  const isFrontend = project.category === 'frontend';
  const frontendData = isFrontend
    ? (project as LocalizedFrontendProject)
    : null;
  const graphicData = !isFrontend ? (project as LocalizedGraphicProject) : null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='max-w-6xl mx-auto px-6 py-16 mt-7 font-mono text-[#C9D1D9] selection:bg-[#C586C0]/30 selection:text-white'>
      <div className='mb-8 flex items-center justify-between text-xs text-[#8B949E] border-b border-[#3c444e] pb-3'>
        <Link
          to='/'
          className='inline-flex items-center gap-2 hover:text-[#C586C0] transition-colors group'
        >
          <span className='text-[#C586C0] group-hover:-translate-x-1 transition-transform'>
            &larr;
          </span>
          <span className='text-sm'>cd .. / portfolio</span>
        </Link>

        <div className='flex items-center gap-3'>
          <span className='hidden sm:inline-block font-mono text-[11px] text-[#F2CC60] bg-[#161B22] px-2.5 py-0.5 rounded border border-[#30363D]'>
            case-study / id-{project.id}
          </span>

          <button
            onClick={handleCopyUrl}
            className='inline-flex items-center gap-1.5 px-3 py-1 bg-[#21262D] hover:bg-[#30363D] text-[#C9D1D9] border border-[#4f5964] text-[11px] font-mono rounded transition-all cursor-pointer'
            title='Copy Project URL'
          >
            {copied ? (
              <>
                <span className='text-[#27C93F]'>✓</span>
                <span className='text-[#27C93F]'>Link Copied!</span>
              </>
            ) : (
              <>
                <span>🔗</span>
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
        }}
        className='border border-[#30363D] rounded-xl overflow-hidden shadow-2xl backdrop-blur-md'
      >
        <div
          style={{
            backgroundColor: 'color-mix(in oklab, #0d1117 95%, transparent)',
          }}
          className='border-b border-[#30363D] px-4 py-3 flex items-center justify-between'
        >
          <div className='flex items-center gap-2'>
            <span className='w-3 h-3 rounded-full bg-[#FF5F56] inline-block'></span>
            <span className='w-3 h-3 rounded-full bg-[#FFBD2E] inline-block'></span>
            <span className='w-3 h-3 rounded-full bg-[#27C93F] inline-block'></span>
            <span className='ml-3 text-xs text-[#8B949E] font-mono hidden sm:inline'>
              {project.name.toLowerCase().replace(/\s+/g, '-')}.config
            </span>
          </div>
          <span className='text-[10px] uppercase font-bold tracking-widest text-[#F2CC60] bg-[#21262D] px-2.5 py-0.5 rounded border border-[#30363D]'>
            {project.category}
          </span>
        </div>

        <div className='p-6 md:p-10 space-y-8'>
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

          {isFrontend && frontendData && (
            <div className='space-y-10 pt-4 font-sans'>
              {frontendData.problem && (
                <div
                  style={{
                    backgroundColor:
                      'color-mix(in oklab, #161B22 60%, transparent)',
                  }}
                  className='border border-[#30363D] p-6 rounded-lg relative overflow-hidden'
                >
                  <div className='absolute top-0 left-0 w-1.5 h-full bg-[#FF5F56]'></div>
                  <h3 className='text-white text-base font-bold mb-2 flex items-center gap-2 font-mono'>
                    <span className='text-[#FF5F56]'>01 //</span>{' '}
                    {lang === 'NO'
                      ? 'Utfordringen & Brukerbehovet'
                      : 'The Challenge & User Need'}
                  </h3>
                  <p className='text-sm text-[#8B949E] leading-relaxed'>
                    {frontendData.problem[lang]}
                  </p>
                </div>
              )}

              {frontendData.uxProcess &&
                frontendData.uxProcess[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[#C586C0]'>02 //</span>{' '}
                      {lang === 'NO'
                        ? 'Forskning & Brukererfaringselementer'
                        : 'Research & User Experience Steps'}
                    </h3>
                    <div className='grid gap-3'>
                      {frontendData.uxProcess[lang].map((step, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor:
                              'color-mix(in oklab, #161B22 60%, transparent)',
                          }}
                          className='border border-[#30363D]/80 p-4 rounded-lg flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[#C586C0] bg-[#21262D] px-2 py-0.5 rounded border border-[#30363D] shrink-0 mt-0.5'>
                            {lang === 'NO'
                              ? `Trinn 0${idx + 1}`
                              : `Step 0${idx + 1}`}
                          </span>
                          <p className='text-sm text-[#8B949E] leading-relaxed'>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {frontendData.finalSolution &&
                frontendData.finalSolution[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[#27C93F]'>03 //</span>{' '}
                      {lang === 'NO'
                        ? 'Sluttproduktet & Nøkkelfunksjoner'
                        : 'The Final Product & Key Features'}
                    </h3>
                    <div className='grid gap-3'>
                      {frontendData.finalSolution[lang].map((sol, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor:
                              'color-mix(in oklab, #161B22 60%, transparent)',
                          }}
                          className='border border-[#30363D]/80 p-4 rounded-lg flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[#27C93F] bg-[#21262D] px-2 py-0.5 rounded border border-[#30363D] shrink-0 mt-0.5'>
                            {lang === 'NO' ? 'Ferdig' : 'Done'}
                          </span>
                          <p className='text-sm text-[#8B949E] leading-relaxed'>
                            {sol}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              <div className='space-y-3 pt-2'>
                <h3 className='text-white text-sm font-bold font-mono tracking-wide uppercase text-[#8B949E]'>
                  {lang === 'NO'
                    ? 'Teknologier & Rammeverk'
                    : 'Technologies & Frameworks Deployed'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendData.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 bg-[#21262D] text-[#79C0FF] border border-[#30363D] rounded-md font-mono'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-4 pt-6 border-t border-[#30363D]'>
                {frontendData.live && (
                  <a
                    href={frontendData.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#C586C0] text-[#0D1117] text-xs font-mono font-bold hover:bg-[#d89fd3] transition-all rounded shadow-md flex items-center gap-2'
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
                {frontendData.github && (
                  <a
                    href={frontendData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#21262D] text-[#C9D1D9] border border-[#30363D] text-xs font-mono font-bold hover:border-[#8B949E] transition-all rounded flex items-center gap-2'
                  >
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {!isFrontend && graphicData && (
            <div className='space-y-10 pt-4 font-sans'>
              {graphicData.challenge && (
                <div
                  style={{
                    backgroundColor:
                      'color-mix(in oklab, #161B22 60%, transparent)',
                  }}
                  className='border border-[#30363D] p-6 rounded-lg relative overflow-hidden'
                >
                  <div className='absolute top-0 left-0 w-1.5 h-full bg-[#7EE787]'></div>
                  <h3 className='text-white text-base font-bold mb-2 flex items-center gap-2 font-mono'>
                    <span className='text-[#7EE787]'>01 //</span>{' '}
                    {lang === 'NO'
                      ? 'Designutfordring & Målsetting'
                      : 'Design Challenge & Objective'}
                  </h3>
                  <p className='text-sm text-[#8B949E] leading-relaxed'>
                    {graphicData.challenge[lang]}
                  </p>
                </div>
              )}

              {graphicData.research &&
                graphicData.research[lang].length > 0 && (
                  <div className='space-y-4'>
                    <h3 className='text-white text-base font-bold font-mono flex items-center gap-2'>
                      <span className='text-[#79C0FF]'>02 //</span>{' '}
                      {lang === 'NO'
                        ? 'Markedsundersøkelse & Oppdagelse'
                        : 'Market Research & Discovery'}
                    </h3>
                    <div className='grid gap-3'>
                      {graphicData.research[lang].map((res, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor:
                              'color-mix(in oklab, #161B22 60%, transparent)',
                          }}
                          className='border border-[#30363D]/80 p-4 rounded-lg flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[#79C0FF] bg-[#21262D] px-2 py-0.5 rounded border border-[#30363D] shrink-0 mt-0.5'>
                            {lang === 'NO' ? 'Innsikt' : 'Insight'}
                          </span>
                          <p className='text-sm text-[#8B949E] leading-relaxed'>
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
                      <span className='text-[#F2CC60]'>03 //</span>{' '}
                      {lang === 'NO'
                        ? 'Kreativ Prosess & Utførelse'
                        : 'Creative Process & Execution'}
                    </h3>
                    <div className='grid gap-3'>
                      {graphicData.designProcess[lang].map((proc, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor:
                              'color-mix(in oklab, #161B22 60%, transparent)',
                          }}
                          className='border border-[#30363D]/80 p-4 rounded-lg flex items-start gap-3.5'
                        >
                          <span className='text-xs font-mono text-[#F2CC60] bg-[#21262D] px-2 py-0.5 rounded border border-[#30363D] shrink-0 mt-0.5'>
                            {lang === 'NO' ? 'Fase' : 'Phase'}
                          </span>
                          <p className='text-sm text-[#8B949E] leading-relaxed'>
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
                    <span className='text-[#C586C0]'>04 //</span>{' '}
                    {lang === 'NO'
                      ? 'Fargesystem & Palett'
                      : 'Color System & Palette'}
                  </h3>
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                    {graphicData.colors.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor:
                            'color-mix(in oklab, #161B22 60%, transparent)',
                        }}
                        className='border border-[#30363D] p-3 rounded-lg flex flex-col items-center text-center gap-2'
                      >
                        <span
                          className='w-10 h-10 rounded-full border border-white/20 shadow-md'
                          style={{ backgroundColor: c.value }}
                        ></span>
                        <div>
                          <p className='text-xs font-bold text-white font-sans'>
                            {c.name}
                          </p>
                          <p className='text-[10px] text-[#8B949E] font-mono'>
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
                <h3 className='text-white text-sm font-bold font-mono tracking-wide uppercase text-[#8B949E]'>
                  {lang === 'NO'
                    ? 'Programvare & Kreative Verktøy Brukt'
                    : 'Software & Creative Tools Used'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {graphicData.tools.map((tool, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 bg-[#21262D] text-[#7EE787] border border-[#30363D] rounded-md font-mono'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-4 pt-6 border-t border-[#30363D]'>
                {graphicData.behance && (
                  <a
                    href={graphicData.behance}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#7EE787] text-[#0D1117] text-xs font-mono font-bold hover:bg-[#96efa1] transition-all rounded shadow-md flex items-center gap-2'
                  >
                    <span>Behance ↗</span>
                  </a>
                )}
                {graphicData.figma && (
                  <a
                    href={graphicData.figma}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#21262D] text-[#C9D1D9] border border-[#30363D] text-xs font-mono font-bold hover:border-[#8B949E] transition-all rounded flex items-center gap-2'
                  >
                    <span>Figma File</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

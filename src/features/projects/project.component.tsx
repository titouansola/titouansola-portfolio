import { css } from '@styles/css';
import { Badge } from '@/common/ui/atoms/badge.component';
import { ProjectModel } from '@/features/projects/project.model';
import { ExternalLink } from 'lucide-react';
import { flex } from '@styles/patterns';

export function Project({ project }: { project: ProjectModel }) {
  if (!project.url) {
    return <ProjectBlock project={project} />;
  }
  return (
    <a href={project.url} target={'_blank'}>
      <ProjectBlock project={project} />
    </a>
  );
}

function ProjectBlock({ project }: { project: ProjectModel }) {
  return (
    <div
      className={css({
        borderRadius: '1.5rem',
        overflow: 'hidden',
        background: 'interactive',
        borderWidth: '1px',
        borderColor: 'border',
        width: { base: '20rem', mdDown: '100%' },
        transitionProperty: 'scale',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease',
        _hover: { scale: '1.05' },
      })}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className={css({
          width: '100%',
          height: '16rem',
          objectFit: 'cover',
        })}
      />
      {/* PROJECT DESCRIPTION */}
      <div
        className={flex({
          flexDirection: 'column',
          gap: '1rem',
          paddingInline: '1rem',
          paddingBlock: '1.5rem',
        })}
      >
        <h4
          className={flex({
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
          })}
        >
          {project.title}
          {!!project.url && <ExternalLink />}
        </h4>
        <p className={css({ fontSize: '0.875rem' })}>{project.description}</p>
        {/* PROJECT TOOLS */}
        <div className={flex({ gap: '0.5rem' })}>
          {project.tools.map((tool) => (
            <Badge key={tool} content={tool} size={'sm'} />
          ))}
        </div>
      </div>
    </div>
  );
}

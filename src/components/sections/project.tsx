import PROJECTS from '@/data/projects';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function Projects() {
  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="rounded-base border-2 border-black bg-main p-4 shadow-base sm:p-5"
            key={project.name}
          >
            <AspectRatio
              className="!-bottom-[2px] rounded-base border-2 border-black shadow-base"
              ratio={16 / 9}
            >
              <img
                className="w-full h-full rounded-base"
                src={`${project.previewImage}`}
                alt={project.name}
              />
            </AspectRatio>

            <div className="mt-5 font-base">
              <h2 className="text-xl font-heading sm:text-2xl">
                {project.name}
              </h2>

              <p className="mt-2">{project.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <a
                  className="cursor-pointer rounded-base border-2 border-black bg-white px-4 py-2 text-center text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base"
                  href={project.liveLink}
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="cursor-pointer rounded-base border-2 border-black bg-white px-4 py-2 text-center text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base"
                  href={project.repoUrl}
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

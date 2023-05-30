import resume from '../../../locales/pt-BR/pages/resume.js'

export default function Items() {
    return (
        <>
            {resume.experiences.companies.map((company) => (
                <article className="flex" key={company.company}>
                    <div className="w-4/12 md:w-48 flex-none relative border-r border-neutral-400 pb-4 pr-4">
                        <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{company.role}</h3>
                        <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{company.period}</span>
                        <div class="flex flex-wrap">
                            {
                                company.technologies.map((technology, index) => {
                                    return <span className="font-light text-neutral-500 text-sm">
                                        {technology}
                                        {index + 1 < company.technologies.length ? ', ' : ''}
                                    </span>
                                })
                            }
                        </div>
                    </div>
                    <div className="grow p-4 pl-6 pt-0 relative">
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{company.company}</h3>
                        <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                            <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            {company.location}
                        </span>
                        <p className="text-xs text-justify">{company.description}</p>
                    </div>
                </article>
            ))}
        </>
    );
}


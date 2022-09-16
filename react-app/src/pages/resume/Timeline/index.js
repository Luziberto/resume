import { useTranslation } from 'react-i18next'
export default function Timeline () {
    const { t } = useTranslation()

    return (
        <main className="grow py-4 px-4 print:px-0 md:px-0">
            <h2 className="text-xl text-neutral-700 uppercase font-semibold pb-2 mb-4">{ t("resume.experiences.title") }</h2>
            <section>
                <article className="flex">
                    <div className="w-4/12 md:w-48 flex-none relative border-r border-neutral-400 pb-4 pr-4">
                        <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                            <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.modal.role") }</h3>
                            <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{ t("resume.experiences.companies.modal.period") }</span>
                    </div>
                    <div className="grow p-4 pl-6 pt-0 relative">
                            <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.modal.company") }</h3>
                        <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                        </svg>
                                { t("resume.experiences.companies.modal.location") }
                        </span>
                            <p className="text-xs text-justify">{ t("resume.experiences.companies.modal.description") }</p>
                    </div>
                </article>
                <article className="flex">
                <div className="w-4/12 md:w-48 flex-none relative border-r border-neutral-400 pb-4 pr-4">
                    <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.devsquad.role") }</h3>
                        <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{ t("resume.experiences.companies.devsquad.period") }</span>
                </div>
                <div className="grow p-4 pl-6 pt-0 relative">
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.devsquad.company") }</h3>
                    <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                    </svg>
                        { t("resume.experiences.companies.devsquad.location") }
                    </span>
                    <p className="text-xs text-justify">
                        { t("resume.experiences.companies.devsquad.description") }
                    </p>
                </div>
                </article>
                <article className="flex">
                <div className="w-4/12 md:w-48 flex-none relative border-r border-neutral-400 pb-4 pr-4">
                    <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.itransparencia.role") }</h3>
                        <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{ t("resume.experiences.companies.itransparencia.period") }</span>
                </div>
                <div className="grow p-4 pl-6 pt-0 relative">
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.itransparencia.company") }</h3>
                    <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                    </svg>
                        { t("resume.experiences.companies.itransparencia.location") }
                    </span>
                    <p className="text-xs text-justify">
                        { t("resume.experiences.companies.itransparencia.description") }
                    </p>
                </div>
                </article>
                <article className="flex">
                <div className="w-4/12 md:w-48 flex-none relative border-r border-neutral-400 pb-4 pr-4">
                    <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.box3.role") }</h3>
                        <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{ t("resume.experiences.companies.box3.period") }</span>
                </div>
                <div className="grow p-4 pl-6 pt-0 relative">
                        <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t("resume.experiences.companies.box3.company") }</h3>
                    <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                    </svg>
                        { t("resume.experiences.companies.box3.location") }
                    </span>
                    <p className="text-xs text-justify">
                        { t("resume.experiences.companies.box3.description") }
                    </p>
                </div>
                </article>
            </section>
        </main>
    )
}

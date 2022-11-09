import { useTranslation } from 'react-i18next'

export default function Education () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-xl text-neutral-700 uppercase font-semibold pb-1 flex align-middle items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                { t("resume.education.title") }
            </h2>
            <p className="font-bold text-neutral-700 text-sm">{ t("resume.education.list.0.course") }</p>
            <p className="font-light text-neutral-500 text-sm">{ t("resume.education.list.0.school") }, { t("resume.education.list.0.location") }</p>
            <p className="text-neutral-500 text-sm">{ t("resume.education.list.0.date") }</p>
        </div>
    )
}

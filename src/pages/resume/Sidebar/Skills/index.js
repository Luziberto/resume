import skills from '@api/skills.json'
import { useTranslation } from 'react-i18next'

export default function Skills () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-xl text-neutral-700 uppercase font-semibold pb-2 flex align-middle items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                { t("resume.expertise.title") }
            </h2>

            {skills.map((skill) => (
                <div className="pr-2 mb-2" key={skill.id}>
                    <div className="text-xs mb-1 text-neutral-600">{skill.name}</div>
                    <div className="w-full bg-gray-200 h-1">
                    <div className="bg-neutral-600 h-1" style={{width: skill.percent}}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

import { useTranslation } from 'react-i18next'

export default function Awards () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-md text-neutral-700 uppercase font-semibold pb-2">{ t("resume.awards.title") }</h2>
            <p className="text-neutral-700 text-sm">Intel Excelence in Computer Science Award - FEBRACE</p>
            <p className="font-light text-neutral-500 text-sm">USP - Universidade de São Paulo - <span className="text-neutral-400 text-italic font-medium text-sm">2012</span></p>

        </div>
    )
}

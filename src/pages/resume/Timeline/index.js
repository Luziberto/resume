import Items from './items.js'
import { useTranslation } from 'react-i18next'

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <main className="grow py-4 px-4 print:px-0 md:px-0" >
      <h2 className="text-xl text-neutral-700 uppercase font-semibold pb-2 mb-4">{t("resume.experiences.title")}</h2>
      <section>
        <Items />
      </section>
    </main>
  )
}
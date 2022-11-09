import { useTranslation } from 'react-i18next'
import flag_br from '@assets/img/flags/br.svg'
// import flag_es from '@assets/img/flags/es.svg'
// import flag_fr from '@assets/img/flags/fr.svg'
import flag_us from '@assets/img/flags/us.svg'
// import flag_de from '@assets/img/flags/de.svg'

export default function Translate () {
    const { i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="flex justify-center w-full" role="group">
            {/* <button
                type="button"
                onClick={ () => changeLanguage("en") }
                className={ `py-1 px-2 text-sm font-medium text-gray-900 ${ i18n.language === 'en' ? "bg-neutral-300" : "bg-white" } rounded-l border border-gray-200 hover:bg-gray-100 hover:text-blue-700`}>
                <img src={ flag_us } alt="English" width="18" className="rounded-sm" />
            </button> */}
            {/* <button
                type="button"
                onClick={ () => changeLanguage("de") }
                className="py-0.5 px-2 text-sm font-medium text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100">
                <img src={ flag_de } alt="Deutch" width="18" className="rounded-sm" />
            </button> */}
            {/* <button
                type="button"
                onClick={ () => changeLanguage("es") }
                className="py-0.5 px-2 text-sm font-medium text-gray-900 bg-white border-t border-r border-b border-gray-200 hover:bg-gray-100">
                <img src={ flag_es } alt="Spanish" width="18" className="rounded-sm" />
            </button>
            <button
                type="button"
                onClick={ () => changeLanguage("fr") }
                className="inline-flex items-center py-0.5 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100">
                <img src={ flag_fr } alt="France" width="18" className="rounded-sm" />
            </button> */}
            <button
                type="button"
                onClick={ () => changeLanguage("pt_BR") }
                className={`py-0.5 px-2 text-sm font-medium text-gray-900 ${ i18n.language === 'pt_BR' ? " bg-neutral-300" : "bg-white" } rounded-r border-l-0 border border-gray-200 hover:bg-gray-100`}>
                <img src={ flag_br } alt="Português do Brasil" width="18" className="rounded-sm" />
            </button>
        </div>
    )
}

import { useTranslation } from 'react-i18next'
export default function Footer () {
    const { t, i18n } = useTranslation()

    return (
        <footer className="py-2 px-4 mt-4 flex text-xs justify-center mx-auto max-w-screen-md border-t border-neutral-200">
            <div className='text-neutral-400'>
                { t("resume.footer.available_in") } <a href='https://lucianobragaweb.github.io/resume' className='text-blue-500'>lucianobragaweb.github.io/resume</a>
            </div>
        </footer>
    )
}

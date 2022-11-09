import { useTranslation } from 'react-i18next'
import GitHubButton from 'react-github-btn'
export default function Footer () {
    const { t, i18n } = useTranslation()

    return (
        <footer className="py-2 print:py-2 px-4 flex flex-col md:flex-row print:flex-row text-xs justify-center space-x-4  align-middle mx-auto max-w-screen-md border-t border-neutral-200">
            <div className='text-neutral-400 justify-center align-middle py-4 print:py-2 text-center'>
                { t("resume.footer.available_in") } <a href='https://luziberto.github.io/resume' className='text-blue-500'>luziberto.github.io/resume</a>
            </div>
            <div className='flex space-x-1 md:py-4 print:py-2'>
                <GitHubButton href="https://github.com/luziberto" data-show-count="true" aria-label="Follow @luziberto on GitHub">@luziberto</GitHubButton>
                <GitHubButton href="https://github.com/luziberto/resume/fork" data-icon="octicon-repo-forked" aria-label="Fork luziberto/resume on GitHub">Fork</GitHubButton>
                <GitHubButton href="https://github.com/luziberto/resume/issues" data-icon="octicon-issue-opened" aria-label="Issue luziberto/resume on GitHub">Issue</GitHubButton>
                <GitHubButton href="https://github.com/luziberto/resume" data-icon="octicon-star" aria-label="Star luziberto/resume on GitHub">Star</GitHubButton>
            </div>
        </footer>
    )
}

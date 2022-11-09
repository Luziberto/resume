import Skills from './Skills'
import Education from './Education'
import Contacts from './Contacts'
import Awards from './Awards'
function Sidebar () {
    return (
        <aside className="md:flex-none md:w-56 p-4 pt-0">
            <div className="md:border-r print:border-r print:pr-2 md:border-neutral-300 h-full mt-4 grid grid-cols-2 gap-6 md:gap-4 md:flex md:flex-col print:flex print:flex-col">
                <Contacts/>
                <Education/>
                {/* <Awards/> */}
                <Skills/>
            </div>
        </aside>
    )
}

export default Sidebar

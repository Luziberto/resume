export default function ButtonPrint (props) {
    function print () {
        window.print()
    }

    return (
        <button onClick={ print } id={ props.id } className={`${ props.id } print:hidden absolute right-0 p-1 hover:bg-neutral-700 text-neutral-700 hover:text-white focus:outline-none border-2 border-neutral-700 rounded-full`}>
            <span className={`${ props.id } absolute -top-1 -right-1 h-3 w-3`} id={ `${ props.id}-ping` }>
                <span id={ `${ props.id }-pulse` } className={`${ props.id } animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75`}></span>
                <span id={ `${ props.id }-dot` } className={ `${ props.id } relative inline-flex -top-4 rounded-full h-3 w-3 bg-green-500`}></span>
            </span>
            <span id={ `${ props.id }-icon-container` } className={ props.id }>
                <svg id={ `${ props.id }-icon` } className={ `${ props.id } w-6 h-6`} viewBox="0 0 24 24">
                    <path id={ `${ props.id }-icon-path` } className={ props.id } fill="currentColor" d="M19 8C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8H19M8 5V8H16V5H8M16 19V15H8V19H16M18 15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18V15M19 11.5C19 12.05 18.55 12.5 18 12.5C17.45 12.5 17 12.05 17 11.5C17 10.95 17.45 10.5 18 10.5C18.55 10.5 19 10.95 19 11.5Z" />
                </svg>
            </span>
        </button>
    )
}

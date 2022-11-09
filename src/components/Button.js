export default function Button (props) {
    return <button onClick={props.event} className="border border-gray-900 bg-gray-300">{props.text}</button>
}
export default function Button({...props}) {
    return (
        <button className="bg-blue-700 hover:bg-blue-800 w-44 h-10 
            text-white font-semibold 
            rounded-md shadow-md">
            {props.children}
        </button>
    );
}
export default function Button({children,className}) {
    return <button className={`${className} rounded-full bg-yellow-400 text-stone-800 font-medium text-sm px-4 py-2`}>
        {children}
    </button>
}
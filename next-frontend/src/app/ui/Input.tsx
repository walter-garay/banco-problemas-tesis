import { defaultOverrides } from "next/dist/server/require-hook"

interface Props extends React.HTMLProps<HTMLInputElement> {}

export default function Input( props: Props ) {
        
    return (
        <input
            className="w-full h-10 px-3 rounded-md border border-gray-300 shadow-md"
            {...props}

        />
    );
}
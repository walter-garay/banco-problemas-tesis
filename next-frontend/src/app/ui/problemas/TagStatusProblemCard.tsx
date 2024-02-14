import { ReactNode } from "react";

type tagProbleProps = {
    children: ReactNode
    status: string
}

export default function TagStatusProblemCard({ children, status }: tagProbleProps) {
    let colorClass = "bg-green-100 text-green-700 border-green-600";

    if (status === "Desaprobado") {
        colorClass = "bg-orange-100 text-orange-700 border-orange-600";
    } else if (status === "Revisión pendiente") {
        colorClass = "bg-blue-100 text-blue-800 border-blue-700";
    }

    return (
        <span className={`inline-block ${colorClass} border px-2 py-1 text-xs font-semibold rounded-md ml-0`}>
            {children}
        </span>
    );
}

import TagStatusProblemCard from "./TagStatusProblemCard";
import Button from "../Button";

type ProblemCardProps = {
    title?: string,
    status?: string,
    area?: string,
    cantRecursos?: number,
    description?: string,
    dateRegistration?: string
}

export default function ProblemCard({
        title = 'Esta solicitud no tiene un título definido', 
        status = 'Sin estado', 
        area = 'No especificado', 
        cantRecursos = 0, 
        description = 'La descripción de este problema no ha sido detallada', 
        dateRegistration = "*" 
    } : ProblemCardProps) {
        
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
            
            <h1 className=" mb-4 font-bold">
                <span className="mr-2">{title}</span>
                <TagStatusProblemCard>
                    {status}
                </TagStatusProblemCard>
            </h1>
            
            <p className="font-medium">Sector del problema: <span className="font-normal">{area}</span></p>
            <p className="font-medium">Recursos compartidos: <span className="font-normal">{cantRecursos}</span></p>
            <p className="mt-3 mb-3">{description}</p>

            <div className="flex justify-between">
                <p className="mt-auto text-sm font-medium">Regitrado el {dateRegistration}</p>
                <Button href="/revisar" target="_self"
                    className="bg-slate-500 
                    hover:bg-slate-600
                    w-24 h-8
                    text-white font-semibold 
                    rounded-md shadow-md text-sm"
                    >
                    Revisar                    
                </Button>
            </div>

        </div>
    );
}

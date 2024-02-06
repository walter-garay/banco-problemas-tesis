import ButtonProblemCard from "./ButtonProblemCard";
import TagStatusProblemCard from "./TagStatusProblemCard";

type ProblemCardProps = {
    title?: string,
    status?: string,
    area?: string,
    cantRecursos?: number,
    description?: string,
    dateRegistration?: string
}

export default function ProblemCard({
        title = 'Default Title', 
        status = 'Default Status', 
        area = 'Default Area', 
        cantRecursos = 0, 
        description = 'Default Description', 
        dateRegistration = "sin fecha" 
    } : ProblemCardProps) {
        
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
            
            <h1 className=" mb-4 font-bold">
                <span className="mr-2">{title}</span>
                <TagStatusProblemCard>
                    {status}
                </TagStatusProblemCard>
            </h1>
            
            <p className="font-medium">Área del problema: <span className="font-normal">{area}</span></p>
            <p className="font-medium">Recursos compartidos: <span className="font-normal">{cantRecursos}</span></p>
            <p className="mt-3 mb-3">{description}</p>

            <div className="flex justify-between">
                <p className="mt-auto text-sm font-medium">Regitrado el {dateRegistration}</p>
                <ButtonProblemCard/>
            </div>

        </div>
    );
}

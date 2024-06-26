import TagStatusProblemCard from "./TagStatusProblemCard";
import Button from "../Button";

type ProblemCardProps = {
    id: number,
    title?: string,
    status?: string,
    area?: string,
    cantRecursos?: number,
    description?: string,
    dateRegistration?: string,
    openReviewDialog: (problemId: number) => void
    openProposalDialog: (problemId: number) => void 
}

export default function ProblemCard({
        id,
        title = 'Esta solicitud no tiene un título definido', 
        status = 'Sin estado', 
        area = 'No especificado',
        cantRecursos = 0, 
        description = 'La descripción de este problema no ha sido detallada', 
        dateRegistration = "Sin fecha de registro",
        openReviewDialog,
        openProposalDialog
    } : ProblemCardProps) {

    const handleOpenReviewDialog = () => {
        openReviewDialog(id);
    };

    const handleOpenProposalDialog = () => {
        openProposalDialog(id);
    };
        
        
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            
            <h1 className=" mb-4 font-bold ">
                <span className="mr-2">{title}</span>
                <TagStatusProblemCard status={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </TagStatusProblemCard>
            </h1>

            
            
            <p className="font-medium">Sector del problema: <span className="font-normal">{area}</span></p>
            <p className="font-medium">Recursos compartidos: <span className="font-normal">{cantRecursos}</span></p>
            <p className="mt-3 mb-3">{description}</p>

            <div className="flex justify-between">
                <p className="mt-auto text-sm font-medium">Regitrado el {dateRegistration}</p>
                
                    <Button
                        onClick={handleOpenReviewDialog}
                        className="bg-slate-600 
                        hover:bg-slate-700
                        px-6 py-2
                        text-white font-semibold 
                        rounded-md shadow-md text-sm"
                    >
                        Revisar
                    </Button>

                    <Button
                        onClick={handleOpenProposalDialog}
                        className="bg-slate-600 
                        hover:bg-slate-700
                        px-6 py-2
                        text-white font-semibold 
                        rounded-md shadow-md text-sm"
                    >
                        Crear propuesta
                    </Button>
                
            </div>

        </div>
    );
}

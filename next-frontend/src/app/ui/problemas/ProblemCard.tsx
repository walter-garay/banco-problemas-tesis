import ButtonProblemCard from "./ButtonProblemCard";
import TagStatusProblemCard from "./TagStatusProblemCard";


export default function ProblemCard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
            <h1 className=" mb-4 font-bold">Desigualdad en el Acceso a la Tecnología Educativa en Comunidades Rurales del Perú, específicaente en la Selva Alta de Ayanacocha
            <TagStatusProblemCard status={"Pendiente revision"}></TagStatusProblemCard>
            </h1>
            <p>Área del problema: Tecnología</p>
            <p>Recursos compartidos: 03</p>
            <p className="mt-3 mb-3">La problemática se centra en la disparidad de acceso a la tecnología educativa en comunidades rurales, donde la falta de infraestructura y recursos tecnológicos limita el aprendizaje y desarrollo de habilidades de los estudiantes...</p>
            <div className="flex justify-between">
                <p className="font-medium">Regitrado el 02/05/2024</p>
                <ButtonProblemCard/>
            </div>
        </div>
    );
}
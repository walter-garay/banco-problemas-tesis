import Input from "@/app/ui/Input";

export default function NewProblemPage({}) {
    return (
        <div className="max-w-4xl py-8 px-3 mx-auto my-8
            flex flex-col items-center 
            space-y-4 sm:px-8 
            bg-white rounded-xl">

            <h1 className="text-2xl font-bold">Información sobre la problemática</h1>
            <Input
                placeholder="Título del problema"
            >
            
            </Input>
        </div>
    );
}   
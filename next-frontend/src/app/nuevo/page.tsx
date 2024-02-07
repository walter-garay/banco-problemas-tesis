import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputWithLabel } from "@/components/ui/input"


export default function NewProblemPage({}) {
    return (
    <div className="max-w-4xl 
        py-6 px-6 mx-auto 
        sm:my-8 sm:mx-auto sm:max-w-3xl sm:px-7
        flex flex-col items-center 
        space-y-4 
        bg-white rounded-xl
        shadow-sm
        ">

        <h1 className="text-2xl font-bold mb-4">Información sobre la problemática</h1>
        
        <InputWithLabel 
            id="title" label="Título del problema" type="text"  
            placeholder="Problema con la conexión a internet en las zonas altas de Huánuco" 
        />

        <Select>
            <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Seleccione un sector" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="tec">Tecnología y Sistemas</SelectItem>
                <SelectItem value="mark">Publicidad y Gestión de Redes Sociales</SelectItem>
                <SelectItem value="der">Derecho y Temas legales</SelectItem>
            </SelectContent>
        </Select>
    </div>
    );
}
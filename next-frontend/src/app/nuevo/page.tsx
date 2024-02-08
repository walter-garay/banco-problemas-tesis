import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input, LabelWithInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import CheckboxWithLabel from "../ui/Checkbox";
import Button from "../ui/Button";

import { FileUpload } from 'primereact/fileupload';



export default function NewProblemPage({}) {
    return (
    <div className="flex justify-center max-w-4xl mx-auto">
        <div className="
            py-6 px-6 
            sm:my-7 sm:max-w-3xl sm:mx-6 sm:px-8 sm:py-7
            w-full
            space-y-8
            bg-white rounded-xl
            shadow-sm
            ">

            <h1 className="text-2xl font-bold mb-4 text-center text-slate-500">Información sobre la problemática</h1>
            
            <LabelWithInput htmlFor="title" label="Título del problema" >  
                <Input id="title" type="text" 
                    placeholder="Problema con la conexión a internet en las zonas altas de Yuragyacu, Huánuco " >
                </Input>          
            </LabelWithInput>

            <LabelWithInput htmlFor="sector" label="Sector del problema">  
                <Select >
                    <SelectTrigger id="sector" className="w-[100%]">
                        <SelectValue placeholder="Seleccione un sector" />
                    </SelectTrigger>
                    <SelectContent> 
                        <SelectItem value="tec">Tecnología y Sistemas</SelectItem>
                        <SelectItem value="mark">Publicidad y Gestión de Redes Sociales</SelectItem>
                        <SelectItem value="der">Derecho y Temas legales</SelectItem>
                    </SelectContent>
                </Select>
            </LabelWithInput>

            <LabelWithInput htmlFor="entidad" label="Tipo de entidad" >
                <RadioGroup defaultValue="privada" className="flex justify-between text-gray-500 ">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="persona" id="r1" />
                        <Label htmlFor="r1">Persona natural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="privada" id="r2" />
                        <Label htmlFor="r2">Entidad privada</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pública" id="r3" />
                        <Label htmlFor="r3">Entidad pública</Label>
                    </div>
                </RadioGroup>
            </LabelWithInput>   

            <LabelWithInput htmlFor="description" label="Descripción detallada del problema" type="text">  
                <textarea id="description" 
                    placeholder="" 
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md ">
                </textarea>
            </LabelWithInput>

            <LabelWithInput htmlFor="anexos" label="Anexos opcinales (Máximo 3 archivos)">
                <FileUpload id="anexos"
                    chooseLabel="Escoger" uploadLabel="Subir" cancelLabel="Borrar todo"
                    name="archivos[]" url={'/api/upload'} multiple accept="all/*" maxFileSize={1048576} 
                    pt={{                      
                        chooseButton: {
                            className: 'bg-blue-700 hover:bg-blue-800 h-10 border-none focus:ring-4 focus:ring-blue-200 text-sm',
                            
                        },
                        cancelButton: {
                            root: { className: 'bg-blue-100 hover:bg-blue-200 h-10 border-blue-700 text-blue-700 focus:ring-4 focus:ring-blue-200 text-sm' },
                            badge: { className: 'bg-red-200' },
                        },
                        uploadButton: {
                            root: { className: "bg-blue-100 hover:bg-blue-200 h-10 border-blue-700 text-blue-700 focus:ring-4 focus:ring-blue-200 text-sm" },
                        },
                    }}
                    emptyTemplate={<p className="m-0">Escoge o arrastra archivos relacionados al problema</p>
                } />
            </LabelWithInput>

            <div className="flex justify-end gap-x-3">
                <Button className="sm:w-36 h-10 w-full
                    bg-gray-100 hover:bg-gray-200 border border-gray-600 text-gray-600 shadow-sm rounded-md">
                    Cancelar
                </Button>
                <Button className="sm:w-36 h-10 w-full
                    bg-blue-700 hover:bg-blue-800 border border-blue-600 text-white shadow-sm rounded-md">
                    Enviar
                </Button> 
            </div>

        </div>
    </div>
    );
}
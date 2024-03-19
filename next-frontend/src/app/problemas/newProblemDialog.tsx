"use client"
import { useState } from "react"
import { Input, LabelWithInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

import Button from "../ui/Button";

import { FileUpload } from 'primereact/fileupload';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select"

import { createItem } from "@/api/apiService";
import { sectores } from "@/data"
import { RawProblem } from "@/models/problems"
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown"


export default function NewProblemDialog({}) {

    

    const [newProblem, setNewProblem] = useState<RawProblem>({
        clean_data: null,
        id: 0,
        title: '',
        sector: '',
        institution_type: 'Persona natural',
        description: '',
        applicant: null,
        institution_name: 'David Garay',
        raw_status: 'en revision',
        observation: null,
        file_1: null,
        file_2: null,
        file_3: null,
        file_4: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProblem((prevProblem) => ({ ...prevProblem, [name]: value }));
    };

    const handleFileUpload = (event: { files: Array<File> }) => {
        console.log('Archivos adjuntados:');
        const updatedProblem = {
            ...newProblem, 
            file_1: event.files[0] || null, 
            file_2: event.files[1] || null, 
            file_3: event.files[2] || null, 
            file_4: event.files[3] || null, 
        };
        setNewProblem(updatedProblem); 
    }
    

    const handleSectorChange = (selectedSector: string) => {
        setNewProblem((prevProblem) => ({
            ...prevProblem,
            sector: selectedSector,
        }));
    };

    const handleTypeEntityChange = (selectedEntity: string) => {
        setNewProblem((prevProblem) => ({
            ...prevProblem,
            institution_type: selectedEntity,
        }));
    };

    const handleSubmit = async () => {
        try {

            console.log('newProblem:');

            const formData = new FormData();
            formData.append('title', newProblem.title);
            formData.append('sector', newProblem.sector);
            formData.append('institution_type', newProblem.institution_type);
            formData.append('description', newProblem.description);
            formData.append('applicant', String(newProblem.applicant));
            formData.append('institution_name', newProblem.institution_name);
            formData.append('raw_status', newProblem.raw_status);
            formData.append('observation', newProblem.observation || '');
        
            if (newProblem.file_1) {
                formData.append('file_1', newProblem.file_1);
            }
            if (newProblem.file_2) {
                formData.append('file_2', newProblem.file_2);
            }
            if (newProblem.file_3) {
                formData.append('file_3', newProblem.file_3);
            }
            if (newProblem.file_4) {
                formData.append('file_4', newProblem.file_4);
            }
        
            const response = await createItem('problems/rawproblems/', formData);
    
            console.log('Problema creado:', response);
        } catch (error) {
            console.error('Error creando el problema:', error);
        }
    };
    

    
    return (
        <div className="
            w-full
            space-y-8
            bg-white rounded-xl
            shadow-sm
            block justify-center
            ">

            <LabelWithInput htmlFor="title" label="Título del problema">
                <Input
                    id="title"
                    type="text"
                    placeholder="Problema con la conexión a internet en las zonas altas de Yuragyacu, Huánuco"
                    name="title"
                    value={newProblem.title}
                    onChange={handleInputChange}
                />
            </LabelWithInput>

            <LabelWithInput htmlFor="sector" label="Sector" >  
                <Dropdown value={newProblem.sector} onChange={(e: DropdownChangeEvent) => handleSectorChange(e.value)} options={sectores} optionLabel="label" 
                showClear 
                className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm" placeholder="Todos" />
            </LabelWithInput>
            
            <LabelWithInput htmlFor="entidad" label="Tipo de entidad" >
                <RadioGroup defaultValue="privada" className="flex justify-between text-gray-500 " onValueChange={handleTypeEntityChange}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="persona" id="r1" />
                        <Label htmlFor="r1">Persona natural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="privada" id="r2" />
                        <Label htmlFor="r2">Entidad privada</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="publica" id="r3" />
                        <Label htmlFor="r3">Entidad pública</Label>
                    </div>
                </RadioGroup>
            </LabelWithInput> 

            <LabelWithInput htmlFor="description" label="Descripción detallada del problema">
                <Textarea
                    id="description"
                    placeholder=""
                    className="w-full min-h-32 px-3 pt-2 border border-gray-300 rounded-md overflow-hidden"
                    name="description"
                    value={newProblem.description}
                    onChange={handleInputChange}
                    style={{ height: `${Math.max(32, (event?.target as HTMLTextAreaElement).scrollHeight)}px` }}
                />
            </LabelWithInput>

        
            <LabelWithInput htmlFor="anexos" label="Anexos opcinales">
                <p className="w-full text-left font-normal text-gray-500 text-sm leading-6">
                    Máximo 4 archivos de 5MB cada uno, si se excede solo se enviarán los 4 primeros
                </p>

                <FileUpload id="anexos"
                    
                    customUpload
                    uploadHandler={handleFileUpload}
                    auto

                    chooseLabel="Escoger" uploadLabel="Subir" cancelLabel="Borrar todo"
                    name="archivos[]" multiple accept="all/*" maxFileSize={5242880} 
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
                    emptyTemplate={
                        <p className="m-0">Escoge o arrastra archivos relacionados al problema</p>
                    }
                    />


            </LabelWithInput>

            <div className="flex justify-end gap-x-3">
                <Button href="/problemas" className="sm:w-36 h-10 w-full
                    bg-gray-100 hover:bg-gray-200 border border-gray-600 text-gray-600 shadow-sm rounded-md"
                        >
                    Cancelar
                </Button>
                <Button href="/problemas"
                    className="sm:w-36 h-10 w-full
                    bg-blue-700 hover:bg-blue-800 border border-blue-600 text-white shadow-sm rounded-md"
                    onClick={(e) => {
                        e.preventDefault(); // Evitar recarga de página
                        handleSubmit(); // Llamar a la función de envío de formulario
                    }}
                >
                Enviar
            </Button>
            </div>
        </div>
    );
}
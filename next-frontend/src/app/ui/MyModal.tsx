"use client"
import Button from './Button';
import DropdownSectores from "../ui/problemas/DropdownSector"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input, LabelWithInput } from "@/components/ui/input"

import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from "primereact/inputtext";


import { useState } from "react";

type MyModalProps = {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
};

export default function MyModalComponent({isOpen, className}: MyModalProps) {
    const [valueSocial, setValueSocial] = useState<number>(3);
    const [valueTecnologico, setValueTecnologico] = useState<number>(3);
    const [valueEconomico, setValueEconomico] = useState<number>(3);
    const [valuePolitico, setValuePolitico] = useState<number>(3);
    const [valueEcologico, setValueEcologico] = useState<number>(3);
    const [valueLegal, setValueLegal] = useState<number>(3);
    
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        isOpen && (
        <div className={`bg-black w-full h-full ${className}`}>
            <div className='lg:flex gap-x-6 h-full sm:px-8'>
                <div className="relative bg-white shadow-sm rounded-xl w-full max-h-screen overflow-y-auto flex flex-col items-center px-8 py-8">
                    <i className="pi pi-times absolute top-2 right-2 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={handleClose}></i>                    <h1 className="font-bold text-gray-800 text-xl mb-4">Información Brindada</h1> 
                    <h2 className="mb-2 font-medium">Del solicitante</h2>
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl '>
                        
                        <LabelWithInput htmlFor="entidad" label="Tipo de entidad" >
                            <RadioGroup defaultValue="privada" className="flex justify-between text-gray-500 " disabled>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={"persona"} id="r1" />
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

                        <LabelWithInput htmlFor="title" label="Nombre / Razón Social" >  
                            <Input id="title" type="text" 
                                defaultValue={"IMPORTACIONES ACEROS PADRINOS LATINOS S.A.C"} disabled >
                            </Input>          
                        </LabelWithInput>

                        <div className="flex gap-5">
                            <div className="w-3/5">
                                <LabelWithInput htmlFor="email" label="Correo" className="">
                                    <Input id="email" defaultValue={"contacto@acerospl.com"} disabled></Input>
                                </LabelWithInput>
                            </div>

                            <div className="w-2/5">
                                <LabelWithInput htmlFor="phone" label="Número de contacto">
                                    <Input id="phone" defaultValue={"+51 951648955"} disabled></Input>
                                </LabelWithInput>
                            </div>


                        </div>

                    </div>

                    <h2 className="mb-2 mt-6 font-medium">Del problema</h2>
                    
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        <LabelWithInput htmlFor="title" label="Título del problema" >  
                            <Input id="title" type="text" 
                                defaultValue="Problema con la conexión a internet en las zonas altas de Yuragyacu, Huánuco " 
                                disabled>
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="description" label="Descripción detallada del problema" type="text">  
                            <textarea id="description" 
                                className="cursor-text w-full min-h-32 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue="El problema se presenta en las zonas altas de Yuragyacu, Huánuco, donde la conexión a internet es muy deficiente, lo que afecta a la población en general..."
                                disabled>
                            </textarea>
                        </LabelWithInput>

                        <LabelWithInput htmlFor="anexos" label="Sector del problema">  

                            <Button className="bg-gray-200 text-gray-800 h-10 text-sm hover:bg-gray-300 shadow-none">{"Anexo1.pdf"}</Button>
                            <Button className="bg-gray-200 text-gray-800 h-10 text-sm hover:bg-gray-300 shadow-none">{"Anexo1.pdf"}</Button>
                            <Button className="bg-gray-200 text-gray-800 h-10 text-sm hover:bg-gray-300 shadow-none">{"Anexo1.pdf"}</Button>
                        </LabelWithInput>
                    </div>
                    
                </div>


                <div className="relative bg-white shadow-sm rounded-xl w-full max-h-screen overflow-y-auto flex flex-col items-center px-8 py-8">
                    <i className="pi pi-times absolute top-2 right-2 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={handleClose}></i>
                    <h1 className="font-bold text-gray-800 text-xl mb-2">Información Limpia</h1> 
                    <p className="w-full text-left font-normal text-gray-500 text-sm mb-4 mt-4 leading-6">Un título claro y una descripción detallada mejorarán la comprensión de los tesistas. Ajusta y refina la información brindada por el solicitante:</p>                                        
                    
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        <LabelWithInput htmlFor="title" label="Titulo mejorado" >  
                            <Input id="title" type="text" 
                                defaultValue="Problema con la conexión a internet en las zonas altas de Yuragyacu, Huánuco " 
                                required
                                className="cursor-text">
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="description" label="Descripción mejorada" type="text">  
                            <textarea id="description" 
                                className="cursor-text w-full min-h-64 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue="El problema se presenta en las zonas altas de Yuragyacu, Huánuco, donde la conexión a internet es muy deficiente, lo que afecta a la población en general..."
                                required>
                            </textarea>
                        </LabelWithInput>
                    
                    </div>

                    <h1 className="font-bold text-gray-800 text-xl mb-4 mt-6">Información Adicional</h1> 

                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>

                        <LabelWithInput htmlFor="carrera" label="Identifica carreras relacionadas con el problema">  
                            <p className="w-full text-left font-normal text-gray-500 text-sm mb-1 mt-2 leading-6">
                                Escoge en orden de mayor a menor relación 3 carreras que puedan trabajar sobre la problemática brindada
                            </p>
                            <DropdownSectores></DropdownSectores>
                            <DropdownSectores></DropdownSectores>
                            <DropdownSectores></DropdownSectores>
                        </LabelWithInput>

                        <LabelWithInput label="Nivel de impacto" className="gap-y-5">
                            <p className="w-full text-left font-normal text-gray-500 text-sm leading-6">
                                Indica el nivel de impacto que tendría solucionar el problema en las siguientes áreas
                            </p>

                            <div className="flex gap-x-8">
                                <div className="">
                                    <h3 className="text-xs font-medium">Social</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueSocial} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueSocial(e.target.value)} className="w-full h-8" />
                                        <Slider value={valueSocial} max={5} onChange={(e: SliderChangeEvent) => setValueSocial(e.value)} className="w-full" 
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Tecnológico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueTecnologico} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueTecnologico(e.target.value)} className="w-full h-8" />
                                        <Slider value={valueTecnologico} max={5} onChange={(e: SliderChangeEvent) => setValueTecnologico(e.value)} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Económico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueEconomico} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEconomico(e.target.value)} className="w-full h-8" />
                                        <Slider value={valueEconomico} max={5} onChange={(e: SliderChangeEvent) => setValueEconomico(e.value)} className="w-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-x-8">
                                <div className="">
                                    <h3 className="text-xs font-medium">Político</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valuePolitico} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValuePolitico(e.target.value)} className="w-full h-8" />
                                        <Slider value={valuePolitico} max={5} onChange={(e: SliderChangeEvent) => setValuePolitico(e.value)} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Ecológico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueEcologico} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEcologico(e.target.value)} className="w-full h-8" />
                                        <Slider value={valueEcologico} max={5} onChange={(e: SliderChangeEvent) => setValueEcologico(e.value)} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Legal</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueLegal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueLegal(e.target.value)} className="w-full h-8" />
                                        <Slider value={valueLegal} max={5} onChange={(e: SliderChangeEvent) => setValueLegal(e.value)} className="w-full" />
                                    </div>
                                </div>
                            </div>

                        </LabelWithInput>



                        <p className="w-full text-left font-normal text-gray-500 text-sm mb-4 pt-4 leading-6">
                            Si la información brindada es muy confunsa y no se puede mejorar, debe presionar el botón "Desaprobar" para notificar al solicitante sobre su error y que pueda corregirlo.
                        </p>                                        
                        
                        <div className="w-full space-y-2 md:gap-x-2 md:flex-row-reverse md:flex md:space-y-0 justify-start">
                            <Button className="h-10  bg-blue-700 text-white rounded-xl md:w-52 w-full hover:bg-blue-800">Guardar y publicar</Button>
                            <Button className="h-10  bg-gray-600 text-white rounded-xl md:w-40 w-full hover:bg-gray-700">Desapobar</Button>
                        </div>

                    
                    </div>
                    
                </div>

        

            </div>
        </div>
        )
    );
};
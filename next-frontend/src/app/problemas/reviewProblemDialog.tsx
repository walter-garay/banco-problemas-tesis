"use client"
import Button from '../ui/Button';
import DropdownSectores from "../ui/problemas/DropdownSector"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input, LabelWithInput } from "@/components/ui/input"

import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from "primereact/inputtext";


import { useState } from "react";
import { RawProblem } from '@/models/problems';

type MyModalProps = {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    problem?: RawProblem;
};

export default function ReviewProblemDialog({isOpen, onClose, className, problem}: MyModalProps) {
    const [valueSocial, setValueSocial] = useState<number>(3);
    const [valueTecnologico, setValueTecnologico] = useState<number>(3);
    const [valueEconomico, setValueEconomico] = useState<number>(3);
    const [valuePolitico, setValuePolitico] = useState<number>(3);
    const [valueEcologico, setValueEcologico] = useState<number>(3);
    const [valueLegal, setValueLegal] = useState<number>(3);
    

    return (
        isOpen && (
        <div className={`fixed inset-0 bg-white lg:bg-black w-screen lg:bg-opacity-40 h-full lg:h-screen ${className}`}>
            <div className='lg:flex gap-x-6 h-full sm:px-8 overflow-y-auto'>
                <div className=" lg:bg-white shadow-sm rounded-xl w-full lg:max-h-screen lg:overflow-y-auto flex flex-col items-center lg:p-8">
                    {/* <i className="pi pi-times fixed top-7 right-11 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={onClose}></i> */}
                    <h1 className="font-bold text-gray-800 text-xl mb-4">Información Brindada</h1> 
                    <h2 className="mb-2 font-medium">Del solicitante</h2>
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl '>
                        
                        <LabelWithInput htmlFor="entidad" label="Tipo de entidad" >
                            <RadioGroup defaultValue={problem?.institution_type} className="flex justify-between text-gray-500 " disabled>
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
                                defaultValue={problem?.institution_name} readOnly >
                            </Input>          
                        </LabelWithInput>

                        <div className="flex gap-5">
                            <div className="w-3/5">
                                <LabelWithInput htmlFor="email" label="Correo" className="">
                                    <Input id="email" defaultValue={"contacto@acerospl.com"} readOnly></Input>
                                </LabelWithInput>
                            </div>

                            <div className="w-2/5">
                                <LabelWithInput htmlFor="phone" label="Número">
                                    <Input id="phone" defaultValue={"+51 951648955"} readOnly></Input>
                                </LabelWithInput>
                            </div>


                        </div>

                    </div>

                    <h2 className="mb-2 mt-6 font-medium">Del problema</h2>
                    
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        <LabelWithInput htmlFor="title" label="Título del problema" >  
                            <Input id="title" type="text" 
                                defaultValue={problem?.title} 
                                readOnly
                                >
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="description" label="Descripción detallada del problema" type="text">  
                            <textarea id="description" 
                                className="cursor-text w-full min-h-32 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue={problem?.description}
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


                <div className="relative mt-8 lg:mt-0 lg:bg-white shadow-sm rounded-xl w-full max-h-screen lg:overflow-y-auto flex flex-col items-center lg:p-8">
                    <i className="pi pi-times fixed lg:top-7 lg:right-11 top-1 right-1.5 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={onClose}></i>
                    <h1 className="font-bold text-gray-800 text-xl mb-5">Información Limpia</h1> 
                    
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        <p className="w-full text-left font-normal text-gray-500 text-sm mb-4 leading-6">Un título claro y una descripción detallada mejorarán la comprensión de los tesistas. Ajusta y mejora la información brindada por el solicitante:</p>                                        

                        <LabelWithInput htmlFor="title" label="Titulo mejorado" >  
                            <Input id="title" type="text" 
                                defaultValue={problem?.title}
                                required
                                className="cursor-text">
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="description" label="Descripción mejorada" type="text">  
                            <textarea id="description" 
                                className="cursor-text w-full min-h-64 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue={problem?.description}
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
                                Indica el nivel de impacto y viabilidad que tendría solucionar el problema en las siguientes áreas
                            </p>

                            <div className="md:flex md:gap-x-8 space-y-4 md:space-y-0">
                                <div className="">
                                    <h3 className="text-xs font-medium">Social</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueSocial.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueSocial(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valueSocial} max={5} onChange={(e: SliderChangeEvent) => setValueSocial(parseInt(e.value.toString()))} className="w-full" 
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Tecnológico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueTecnologico.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueTecnologico(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valueTecnologico} max={5} onChange={(e: SliderChangeEvent) => setValueTecnologico(parseInt(e.value.toString()))} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Económico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueEconomico.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEconomico(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valueEconomico} max={5} onChange={(e: SliderChangeEvent) => setValueEconomico(parseInt(e.value.toString()))} className="w-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex md:gap-x-8 space-y-4 md:space-y-0">
                                <div className="">
                                    <h3 className="text-xs font-medium">Político</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valuePolitico.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValuePolitico(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valuePolitico} max={5} onChange={(e: SliderChangeEvent) => setValuePolitico(parseInt(e.value.toString()))} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Ecológico</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueEcologico.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEcologico(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valueEcologico} max={5} onChange={(e: SliderChangeEvent) => setValueEcologico(parseInt(e.value.toString()))} className="w-full" />
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-xs font-medium">Legal</h3>
                                    <div className="space-y-0">
                                        <InputText disabled value={valueLegal.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueLegal(parseInt(e.target.value))} className="w-full h-8" />
                                        <Slider value={valueLegal} max={5} onChange={(e: SliderChangeEvent) => setValueLegal(parseInt(e.value.toString()))} className="w-full" />
                                    </div>
                                </div>
                            </div>

                        </LabelWithInput>
                    </div>
                    <div className='mx-6 bg:mx-0'>
                        <p className="w-full text-left font-normal text-gray-500 text-sm mb-8 pt-6 leading-6">
                            Si la información brindada es muy confunsa y no se puede mejorar, debe presionar el botón "Desaprobar" para notificar al solicitante sobre su error y que pueda corregirlo.
                        </p>                                        
                        
                        <div className="w-full space-y-2 md:gap-x-2 md:flex-row-reverse md:flex md:space-y-0 justify-start">
                            <Button className="h-10  bg-blue-700 text-white rounded-xl md:w-52 w-full hover:bg-blue-800">Guardar y publicar</Button>
                            <Button className="h-10  bg-gray-100 text-gray-600 border-gray-700 border rounded-xl md:w-40 w-full hover:bg-gray-200">Desapobar</Button>
                        </div> 
                    </div>
                                
                </div>

        

            </div>
        </div>
        )
    );
};
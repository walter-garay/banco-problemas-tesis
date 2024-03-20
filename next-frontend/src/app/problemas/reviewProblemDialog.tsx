"use client"
import Button from '../ui/Button';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input, LabelWithInput } from "@/components/ui/input"

import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from "primereact/inputtext";


import React, { useState, useEffect } from 'react';
import { RawProblem, CleanProblem } from '@/models/problems';
import { getItems, updateItem, createItem } from '@/api/apiService';
import { sectores } from '@/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


type MyModalProps = {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    rawProblem?: RawProblem;
};

interface Carrera {
    id: number;
    name: string;
}

export default function ReviewProblemDialog({isOpen, onClose, className, rawProblem}: MyModalProps) {

    if (rawProblem?.clean_data) {
        console.log('Clean data:', rawProblem?.clean_data[0]);
    } {
        console.log('No hay clean data');
    }

    const [carreras, setCarreras] = useState<Carrera[]>([]);

    const [valueSocial, setValueSocial] = useState<number>(3);
    const [valueTecnologico, setValueTecnologico] = useState<number>(3);
    const [valueEconomico, setValueEconomico] = useState<number>(3);
    const [valuePolitico, setValuePolitico] = useState<number>(3);
    const [valueEcologico, setValueEcologico] = useState<number>(3);
    const [valueLegal, setValueLegal] = useState<number>(3);
    

    const [newCleanProblem, setNewCleanProblem] = useState<CleanProblem>(
        {
            raw_problem: rawProblem?.id || 0,
            clean_title: rawProblem?.clean_data && rawProblem.clean_data[0]?.clean_title || rawProblem?.title || "",
            clean_description: "Descripción limpia",
            clean_sector: "Sector limpio",
            career_1: 1,
            career_2: null,
            career_3: null,
            economic_support: 5,
            social_support: 3,
            enviromental_support: 4,
            importancy: 8,
        }
    );

    useEffect(() => {
        const fetchCarreras = async () => {
            try {
                // Llama a la función getItems con el endpoint correspondiente para obtener las carreras
                const carrerasData = await getItems('api/data/careers/');
                setCarreras(carrerasData); // Actualiza el estado con las carreras obtenidas
            } catch (error) {
                console.error('Error al obtener las carreras:', error);
                // Maneja el error aquí
            }
        };
        fetchCarreras();
    }, []);

    const handleCareerChange = (id_career: string, field: string) => {
        setNewCleanProblem((prevCleanProblem) => ({
            ...prevCleanProblem,
            [field]: id_career,
        }));
    };
    
    const handleSubmitDesaprobado = async () => {
        if (!rawProblem) {
            console.error('No se puede desaprobar un problema nulo');
            return;
        }

        const rawProblemRejected = {
            ...rawProblem,
            raw_status: 'rechazado'
        };

        try {
            const response = await updateItem('problems/raw', rawProblem.id, rawProblemRejected, {
                'Content-Type': 'application/json',
            });

            console.log('Rechazado:', response);
        } catch (error) {
            console.error('Error al desaprobar el problema:', error);
        }
    }

    // crear funcion para mi boton Iniciar
    const handleSubmitPublicar = async () => {
        try {
            console.log('newCleanProblem:', newCleanProblem);

            const response = await createItem('problems/clean/', newCleanProblem, 
                {
                    'Content-Type': 'application/json',
                }
            );

            
        
            console.log('Crear Nuevo Problema:', response);

            onClose();

        } catch (error) {
            console.error('Error al crear problema:', error);
        }

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewCleanProblem((prevNewCleanProblem) => ({ ...prevNewCleanProblem, [name]: value }));
    };

    const handleSectorChange = (selectedSector: string) => {
        setNewCleanProblem((prevNewCleanProblem) => ({
            ...prevNewCleanProblem,
            clean_sector: selectedSector,
        }));
    };

    return (
        isOpen && (
        <div className={`fixed inset-0 bg-white lg:bg-black w-screen lg:bg-opacity-40 h-full lg:h-screen ${className}`}>
            <div className='lg:flex gap-x-6 h-full sm:px-8 overflow-y-auto'>
                <div className=" lg:bg-white shadow-sm rounded-xl w-full lg:max-h-screen lg:overflow-y-auto flex flex-col items-center lg:p-8">
                    <i className="pi pi-times fixed top-7 right-11 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={onClose}></i>
                    <h1 className="font-bold text-gray-800 text-xl mb-4">Información Brindada</h1> 
                    <h2 className="mb-2 font-medium">Del solicitante</h2>
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl '>
                        
                        <LabelWithInput htmlFor="entidad" label="Tipo de entidad" >
                            <RadioGroup defaultValue={rawProblem?.institution_type} className="flex justify-between text-gray-500 " disabled>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="persona" id="persona" />
                                    <Label htmlFor="r1">Persona natural</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="privada" id="privada" />
                                    <Label htmlFor="r2">Entidad privada</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="publica" id="publica" />
                                    <Label htmlFor="r3">Entidad pública</Label>
                                </div>
                            </RadioGroup>
                        </LabelWithInput>

                        <LabelWithInput htmlFor="title" label="Nombre / Razón Social" >  
                            <Input id="title" type="text" 
                                defaultValue={rawProblem?.institution_name} readOnly >
                            </Input>          
                        </LabelWithInput>

                        <div className="flex gap-5">
                            <div className="w-3/5">
                                <LabelWithInput htmlFor="email" label="Correo" className="">
                                    <Input id="email" defaultValue={rawProblem?.applicant?.email} readOnly></Input>
                                </LabelWithInput>
                            </div>

                            <div className="w-2/5">
                                <LabelWithInput htmlFor="phone" label="Número">
                                    <Input id="phone" defaultValue={rawProblem?.applicant?.phone} readOnly></Input>
                                </LabelWithInput>
                            </div>
                        </div>

                    </div>

                    <h2 className="mb-2 mt-6 font-medium">Del problema</h2>
                    
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>

                        <LabelWithInput htmlFor="title" label="Título del problema" >  
                            <Input id="title" type="text" 
                                defaultValue={rawProblem?.title} 
                                readOnly
                                >
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="description" label="Descripción detallada del problema">  
                            <textarea id="description" 
                                className="cursor-text w-full min-h-32 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue={rawProblem?.description}
                                disabled>
                            </textarea>
                        </LabelWithInput>

                        <LabelWithInput htmlFor="sector" label="Sector del problema" >  
                            <Input id="sector" type="text" 
                                defaultValue={rawProblem?.sector} 
                                readOnly
                                >
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="anexos" label="Anexos">
                            <div className='space-y-4'>
                                {rawProblem?.file_1 && (
                                    <div className="flex items-center justify-center bg-cyan-50 hover:bg-cyan-200 p-2 rounded-xl text-cyan-900">
                                        <a href={typeof rawProblem.file_1 === 'string' ? rawProblem.file_1 : URL.createObjectURL(rawProblem.file_1)} download>
                                            {rawProblem.file_1 instanceof File ? rawProblem.file_1.name : (rawProblem.file_1.split('?')[0].split('/').pop() || 'Archivo 1')}
                                        </a>
                                    </div>
                                )}
                                {rawProblem?.file_2 && (
                                    <div className="flex items-center justify-center bg-cyan-50 hover:bg-cyan-200 p-2 rounded-xl">
                                        <a href={typeof rawProblem.file_2 === 'string' ? rawProblem.file_2 : URL.createObjectURL(rawProblem.file_2)} download>
                                            {rawProblem.file_2 instanceof File ? rawProblem.file_2.name : (rawProblem.file_2.split('?')[0].split('/').pop() || 'Archivo 2')}
                                        </a>
                                    </div>
                                )}
                                {rawProblem?.file_3 && (
                                    <div className="flex items-center justify-center bg-cyan-50 hover:bg-cyan-200 p-2 rounded-xl text-cyan-900">
                                        <a href={typeof rawProblem.file_3 === 'string' ? rawProblem.file_3 : URL.createObjectURL(rawProblem.file_3)} download>
                                            {rawProblem.file_3 instanceof File ? rawProblem.file_3.name : (rawProblem.file_3.split('?')[0].split('/').pop() || 'Archivo 3')}
                                        </a>
                                    </div>
                                )}
                                {rawProblem?.file_4 && (
                                    <div className="flex items-center justify-center bg-cyan-50 hover:bg-cyan-200 p-2 rounded-xl">
                                        <a href={typeof rawProblem.file_4 === 'string' ? rawProblem.file_4 : URL.createObjectURL(rawProblem.file_4)} download>
                                            {rawProblem.file_4 instanceof File ? rawProblem.file_4.name : (rawProblem.file_4.split('?')[0].split('/').pop() || 'Archivo 2')}
                                        </a>
                                    </div>
                                )}
                            </div>  
                        </LabelWithInput>
                    </div>
                    
                </div>

                {/* Verificar si el rol del usuario es "admin" */}
                {localStorage.getItem('role') === 'admin' && (
                <div className="relative mt-8 lg:mt-0 lg:bg-white shadow-sm rounded-xl w-full max-h-screen lg:overflow-y-auto flex flex-col items-center lg:p-8">
                    <i className="pi pi-times fixed lg:top-7 lg:right-11 top-1 right-1.5 hover:bg-gray-100 p-2 text-xl rounded-full" onClick={onClose}></i>
                    
                    <h1 className="font-bold text-gray-800 text-xl mb-5">Información Limpia</h1> 
                
                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        <p className="w-full text-left font-normal text-gray-500 text-sm mb-4 leading-6">
                            Un título claro y una descripción detallada mejorarán la comprensión de los tesistas. Ajusta y mejora la información brindada por el solicitante:
                        </p>                                        
                        
                        <LabelWithInput htmlFor="title" label="Titulo mejorado">  
                            <Input id="title" type="text" 
                                defaultValue={newCleanProblem.clean_title}
                                required
                                className="cursor-text"
                                name="clean_title"
                                onChange={handleInputChange}
                                >
                            </Input>          
                        </LabelWithInput>

                        <LabelWithInput htmlFor="clean_description" label="Descripción mejorada" >  
                            <textarea id="clean_description" 
                                className="cursor-text w-full min-h-64 px-3 py-2 border border-gray-300 bg-white rounded-md "
                                defaultValue={rawProblem?.description}
                                required
                                name="clean_description"
                                onChange={handleInputChange}
                                >
                            </textarea>
                        </LabelWithInput>

                        <LabelWithInput htmlFor="sector" label="Sector">
                            <Select onValueChange={handleSectorChange}>
                                <SelectTrigger className="w-full h-12" >
                                    <SelectValue placeholder="Seleccione un sector" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sectores.map((sector, index) => (
                                        <SelectItem key={index} value={sector.value}>
                                            {sector.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </LabelWithInput>

                        <LabelWithInput htmlFor="sector" label="Identifica carreras relacionadas con el problema" className='gap-y-1'>
                            <p className="w-full text-left font-normal text-gray-500 text-sm leading-6 my-4">
                                Escoge en orden de mayor a menor relación 3 carreras que puedan trabajar sobre la problemática brindada
                            </p>
                            <div className="flex flex-col gap-y-2">
                                <Select onValueChange={(selectedCareer) => handleCareerChange(selectedCareer, "career_1")}>
                                    <SelectTrigger className="w-full h-12">
                                        <SelectValue placeholder="Selecciona una carrera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {/* Mapea la lista de carreras en SelectItem */}
                                        {carreras.map((carrera) => (
                                            console.log('Carrera:', carrera.name),
                                            <SelectItem key={carrera.id} value={carrera.id.toString()}>
                                                {carrera.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={(selectedCareer) => handleCareerChange(selectedCareer, "career_2")}>
                                    <SelectTrigger className="w-full h-12">
                                        <SelectValue placeholder="Selecciona una carrera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {/* Mapea la lista de carreras en SelectItem */}
                                        {carreras.map((carrera) => (
                                            console.log('Carrera:', carrera.name),
                                            <SelectItem key={carrera.id} value={carrera.id.toString()}>
                                                {carrera.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select onValueChange={(selectedCareer) => handleCareerChange(selectedCareer, "career_3")}>
                                    <SelectTrigger className="w-full h-12">
                                        <SelectValue placeholder="Selecciona una carrera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {/* Mapea la lista de carreras en SelectItem */}
                                        {carreras.map((carrera) => (
                                            console.log('Carrera:', carrera.name),
                                            <SelectItem key={carrera.id} value={carrera.id.toString()}>
                                                {carrera.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </LabelWithInput>


                    
                    </div>

                    <h1 className="font-bold text-gray-800 text-xl mb-4 mt-6">Información Adicional</h1> 

                    <div id='content' className='w-full space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm'>
                        
                        

                        <LabelWithInput htmlFor='impacto' label="Nivel de impacto" className="gap-y-5">
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
                            <Button className="h-10 shadow-none bg-blue-700 text-white rounded-xl md:w-52 w-full hover:bg-blue-800" onClick={handleSubmitPublicar}>Guardar y publicar</Button>
                            <Button className="h-10 shadow-none bg-gray-100 text-gray-600  border rounded-xl md:w-40 w-full hover:bg-gray-200" onClick={handleSubmitDesaprobado}>Desapobar</Button>
                        </div> 
                    </div>
                                
                </div>
            )}
        

            </div>
        </div>
        )
    );
};
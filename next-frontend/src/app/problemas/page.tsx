'use client'
import React, { useState } from "react";
import { Suspense } from "react";

import ProblemCard from "../ui/problemas/ProblemCard";
import Button from "../ui/Button";
import MyModalComponent from "../ui/MyModal"

import { Dialog } from 'primereact/dialog';
import { LabelWithInput } from "@/components/ui/input";

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

import NewProblemDialog from "@/app/nuevo/page";

import { problemas, ramas, sectores, prioridades, tipo_solicitante, estados } from "@/data";


export default function ProblemsPage() {
    const [selectedRama, setSelectedRama] = useState(null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedPrioridad, setSelectedPrioridad] = useState(null);
    const [selectedTipoSolicitante, setSelectedTipoSolicitante] = useState(null);
    const [selectedEstado, setSelectedEstado] = useState(null);
    
    const [visible, setVisible] = useState(false);
    
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'auto';
    }
    
    return (
        <main className="relative w-full flex justify-center gap-x-8">
            <div className="mt-24 h-full space-y-6 max-w-full w-72 bg-white shadow-md rounded-md pl-4 pt-4 pb-6">
                <span className="flex items-center gap-x-1.5 mb-4">
                    <i className="pi pi-filter text-slate-600" ></i> 
                    <h1 className="font-normal text-slate-700 text-xl">Filtrar</h1>
                    
                </span>
                <LabelWithInput htmlFor="rama" label="Rama" >  
                    <Dropdown value={selectedRama} onChange={(e: DropdownChangeEvent) => setSelectedRama(e.value)} options={ramas} optionLabel="label" 
                    showClear optionGroupLabel="label" optionGroupChildren="items" 
                    className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm" placeholder="Todos" />
                </LabelWithInput>

                {/* Dropdown para Sectores */}
                <LabelWithInput htmlFor="sector" label="Sector">
                    <Dropdown
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.value)}
                    options={sectores.map(sector => ({ label: sector, value: sector }))}
                    optionLabel="label"
                    showClear
                    placeholder="Todos"
                    className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm"
                    />
                </LabelWithInput>

                {/* Dropdown para Prioridades */}
                <LabelWithInput htmlFor="prioridad" label="Prioridad">
                    <Dropdown
                    value={selectedPrioridad}
                    onChange={(e) => setSelectedPrioridad(e.value)}
                    options={prioridades.map(prioridad => ({ label: prioridad, value: prioridad }))}
                    optionLabel="label"
                    showClear
                    placeholder="Todos"
                    className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm"
                    />
                </LabelWithInput>

                {/* Dropdown para Tipo de Solicitante */}
                <LabelWithInput htmlFor="tipoSolicitante" label="Tipo de Solicitante">
                    <Dropdown
                    value={selectedTipoSolicitante}
                    onChange={(e) => setSelectedTipoSolicitante(e.value)}
                    options={tipo_solicitante.map(tipo => ({ label: tipo, value: tipo }))}
                    optionLabel="label"
                    showClear
                    placeholder="Todos"
                    className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm"
                    />
                </LabelWithInput>

                {/* Dropdown para Estados */}
                <LabelWithInput htmlFor="estado" label="Estado">
                    <Dropdown
                    value={selectedEstado}
                    onChange={(e) => setSelectedEstado(e.value)}
                    options={estados.map(estado => ({ label: estado, value: estado }))}
                    optionLabel="label"
                    showClear
                    placeholder="Todos"
                    className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm border-gray-300"
                    />
                </LabelWithInput>
            </div>

            <div className="flex-col flex items-center ">
                <Button
                    className="bg-blue-700 mt-5 lg:mt-8 hover:bg-blue-800 w-44 h-10 text-white "
                    onClick={() => setVisible(true)}>
                    Agregar problema
                </Button>
                <div className="flex-col space-y-5 my-6">
                    {
                        problemas.map(( {id, title, area, cantRecursos, description, dateRegistration, status} ) => (
                            <ProblemCard 
                                key={id}
                                title={title}
                                area={area}
                                cantRecursos={cantRecursos}
                                description={description}
                                dateRegistration={dateRegistration}
                                status={status}
                                openDialog={handleOpen}
                            />  
                        ))
                    }
                </div>
            </div>
            <Suspense>
                <Dialog header="Información sobre la problemática" visible={visible} maximizable blockScroll
                    className="w-full sm:w-[780px] mx-0" onHide={() => setVisible(false)}
                    pt={{
                        root: { className: 'min-h-full md:min-h-96' },     
                    }}
                    >
                    <NewProblemDialog />
                </Dialog>
            </Suspense>
            <Suspense >
                <MyModalComponent isOpen={isOpen} onClose={handleClose}  className="space-y-4 lg:space-y-0 lg:gap-x-5 py-6 ">
                </MyModalComponent>
            </Suspense>       
        </main>
        
    );
}
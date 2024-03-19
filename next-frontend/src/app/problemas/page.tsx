'use client'
import React, { useState, useEffect } from 'react';
import { Suspense } from "react";

import ProblemCard from "../ui/problemas/ProblemCard";
import Button from "../ui/Button";

import ReviewProblemDialog from "./reviewProblemDialog"
import NewProblemDialog from "./newProblemDialog";


import { LabelWithInput } from "@/components/ui/input";

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';

import { RawProblem } from '@/models/problems'; 
import { getItems } from '@/api/apiService';

import { sectores, institution_type, status } from "@/data";

import Logout from "@/components/logout";
import axios from 'axios';

export default function ProblemsPage() {
    
    const [selectedSector, setSelectedSector] = useState(null);
    /*const [selectedPrioridad, setSelectedPrioridad] = useState(null);*/
    const [selectedTipoSolicitante, setSelectedTipoSolicitante] = useState(null);
    const [selectedEstado, setSelectedEstado] = useState(null);
    
    const [visible, setVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);
    
    const [rawProblems, setRawProblems] = useState<RawProblem[]>([]);
    const [selectedProblem, setSelectedProblem] = useState<RawProblem>();

    const handleOpen = (problemId: number) => {
        const selectedProblemData = rawProblems.find(problem => problem.id === problemId);
        setSelectedProblem(selectedProblemData);
        console.log("Problem:", selectedProblemData);   
        
        setOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'auto';
    }
    

    function sortByStatus(rawProblems: RawProblem[], orden: string[]): RawProblem[] {
        return rawProblems.sort((a, b) => {
            const indexOfA = orden.indexOf(a.raw_status);
            const indexOfB = orden.indexOf(b.raw_status);
            return indexOfA - indexOfB;
        });
    }

    useEffect(() => {
        
        const fetchRawProblems = async () => {
            try {
                const userToken = localStorage.getItem("token");
                const token: string = 'Token ' + userToken;

                const response = await axios.get('https://avicyt.onrender.com/problems/rawproblems',  {
                    params: {
                        sector: selectedSector,
                        institution_type: selectedTipoSolicitante,
                        status: selectedEstado,
                    },

                    headers: {
                        'Authorization': token
                    }
                });
        
                var data = response.data; // Extrae los datos de la respuesta
        
                // Realiza las operaciones con los datos
                data = sortByStatus(data, ['Revisión pendiente', 'Desaprobado', 'Publicado']);
                
                const userRol = localStorage.getItem('role');
                if (userRol === "admin") {
                    setRawProblems(data);
                } else {
                    const userId = localStorage.getItem('id');
                    const validUserId: string = userId || ""; 
                    data = data.filter((problem: RawProblem) => problem.applicant?.id === parseInt(validUserId));
                    setRawProblems(data);
                }
            } catch (error) {
                console.error('Error al obtener datos rawProblems:', error);
            }
        };
        

        const isAuthenticated = localStorage.getItem("token");
        if (!isAuthenticated) {
            // Si el usuario no está autenticado, redirigir al inicio de sesión
            window.location.href = "/login";
        } else {
            // Si el usuario está autenticado, obtener los problemas
            fetchRawProblems();
        }
        
    }, [selectedSector,selectedTipoSolicitante,selectedEstado]);
    
    return (
        <div>
                <main className="relative w-full flex justify-center gap-x-8">
                    <div className="mt-8 h-full space-y-6 max-w-full w-72 bg-white shadow-md rounded-md pl-4 pt-4 pb-6">
                        <span className="flex items-center gap-x-1.5 mb-4">
                            <i className="pi pi-filter text-slate-600" ></i> 
                            <h1 className="font-normal text-slate-700 text-xl">Filtrar</h1>
                            
                        </span>
                        <LabelWithInput htmlFor="sector" label="Sector" >  
                            <Dropdown value={selectedSector} onChange={(e: DropdownChangeEvent) => setSelectedSector(e.value)} options={sectores} optionLabel="label" 
                            showClear 
                            className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm" placeholder="Todos" />
                        </LabelWithInput>

                    {/* Dropdown para Sectores */}
                    

                    {/* Dropdown para Prioridades 
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
                    </LabelWithInput>*/}

                        {/* Dropdown para Tipo de Solicitante */}
                        <LabelWithInput htmlFor="tipoSolicitante" label="Tipo de Solicitante">
                            <Dropdown
                            value={selectedTipoSolicitante}
                            onChange={(e) => setSelectedTipoSolicitante(e.value)}
                            options={institution_type}
                            optionValue='value'
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
                            options={status}
                            optionValue='value'
                            optionLabel="label"
                            showClear
                            placeholder="Todos"
                            className="w-64 max-w-96 h-10 items-center bg-gray-50 shadow-sm border-gray-300"
                            />
                        </LabelWithInput>
                    </div>

                <div className="flex-col flex items-center min-w-200 ">
                    <Button
                        className="bg-blue-700 mt-5 lg:mt-8 hover:bg-blue-800 w-full h-10 text-white "
                        onClick={() => setVisible(true)}>
                        Agregar problema
                    </Button>

                    <Logout />
                    
                    <div className="flex-col space-y-5 my-6 w-full">
                        {
                            rawProblems.map(({ id, title, sector, description,raw_status, created_at, file_1, file_2, file_3, file_4 }) => {
                                // Filtrar y contar los archivos no nulos
                                const cantRecursos: number = [file_1, file_2, file_3, file_4].filter(file => file !== null).length;

                                return (
                                <ProblemCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    area={sector} 
                                    cantRecursos={cantRecursos} 
                                    description={description}
                                    dateRegistration={created_at ? new Intl.DateTimeFormat('es-ES').format(new Date(created_at)) : ''}
                                    status={raw_status}
                                    openDialog={handleOpen}
                                />
                                );
                            })
                        }

                    </div>

                    </div>

                    <div className="flex-col flex items-end min-w-20 lg:mt-8 ">
                        <Logout />
                    </div>

                    <Suspense>
                        <Dialog header="Información sobre la problemática" visible={visible} maximizable blockScroll
                            className=" w-full sm:w-[780px] mx-0" onHide={() => setVisible(false)}
                            pt={{
                                root: { className: 'min-h-full md:min-h-96' },     
                            }}
                            >
                            <NewProblemDialog />
                        </Dialog>
                    </Suspense>
                    <Suspense >
                        <ReviewProblemDialog rawProblem={selectedProblem} isOpen={isOpen} onClose={handleClose} className="space-y-4 lg:space-y-0 lg:gap-x-5 py-6 ">
                        </ReviewProblemDialog>
                    </Suspense>
                </main>

        </div>
        
    );
}
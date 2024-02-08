"use client"

import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Rama {
    label: string;
    value: string;
} 

interface Sector {
    label: string;
    items: Rama[];
}

export default function DropdownSectores() {
    const [selectedRama, setSelectedRama] = useState<Sector | null>(null);
    const areas = [
        {
            label: 'Tecnología',
            items: [
                { label: 'Desarrollo de Software', value: 'software' },
                { label: 'Redes y Seguridad', value: 'redes' },
                { label: 'Inteligencia Artificial', value: 'IA' },
                { label: 'Diseño UX/UI', value: 'diseño' }
            ]
        },
        {
            label: 'Derecho',
            items: [
                { label: 'Derecho Corporativo', value: 'corporativo' },
                { label: 'Derecho Penal', value: 'penal' },
                { label: 'Derecho Laboral', value: 'laboral' },
                { label: 'Propiedad Intelectual', value: 'propiedad_intelectual' }
            ]
        },
        {
            label: 'Salud',
            items: [
                { label: 'Medicina General', value: 'general' },
                { label: 'Cirugía', value: 'cirugia' },
                { label: 'Enfermería', value: 'enfermeria' },
                { label: 'Investigación Médica', value: 'investigacion' }
            ]
        }
    ];

    const groupedItemTemplate = (option: Sector) => {
        return (
            <div className="flex align-items-center">
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={setSelectedRama} onChange={(e: DropdownChangeEvent) => setSelectedRama(e.value)} options={areas} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} 
                className="w-full md:w-14rem " 
                placeholder="Seleccionar una rama " 
                pt={{
                    root: { className: 'focus:ring-4 focus:ring-blue-200' },
                }}
                />
        </div>
    )
}
        
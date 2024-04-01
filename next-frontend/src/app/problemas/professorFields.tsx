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

export default function ProfessorFields() {
    <>
        <h2 className="mb-2 font-medium">Ficha de Idea de Investigación</h2>
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
    </>
}
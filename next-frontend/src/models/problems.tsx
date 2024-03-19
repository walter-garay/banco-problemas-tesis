// Interfaces para los modelos de Django
import { User } from './user';

type RawStatusOptions = 'Revisión Pendiente' | 'Desaprobado' | 'Publicado';


export interface Usuario {
  id: number,
  first_name: string,
  last_name?: string,
  email?: string,
  role?: string,
  dni?: null | number,
  ruc?: null | number,
  razon_social?: string | null,
  phone?: number,
  address?: string | null,
  charge?: string | null,
  area?: string | null
}

export interface RawProblem {
  id: number;
  applicant: Usuario | null;
  title: string;
  sector: string;
  institution_type: string;
  institution_name: string;
  description: string;
  file_1?: File | null;
  file_2?: File | null;
  file_3?: File | null;
  file_4?: File | null;
  raw_status: string;
  observation?: string | null;
  created_at?: Date; 
  updated_at?: Date; 
}

export interface CleanProblem {
  id: number;
  raw_problem: number;
  clean_title: string;
  clean_description: string;
  clean_sector: string;
  career_1: number;
  career_2?: number | null;
  career_3?: number | null;
  economic_support: number;
  social_support: number;
  enviromental_support: number;
  importancy: number;
}

// export interface TakenProblems {
//   id: number;
//   problem: number;
//   student: number;
//   start_date: string; 
//   status: string | number;
// }

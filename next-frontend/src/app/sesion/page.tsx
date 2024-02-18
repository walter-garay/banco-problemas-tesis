"use client"
import React, { useState, useEffect } from 'react';
import { RawProblem } from '@/models/ProblemModels'; // Asegúrate de tener la importación correcta para el tipo RawProblem
import { getItems } from '@/api/apiService'; // Reemplaza 'api' por el nombre de tu archivo que contiene las funciones de la API

const ProblemComponent: React.FC = () => {
  const [rawProblems, setRawProblems] = useState<RawProblem[]>([]);

  useEffect(() => {
    const fetchrawProblems = async () => {
      try {
        const data = await getItems('rawproblems'); // Reemplaza 'rawProblems' con la ruta correcta de tu modelo en la API
        setRawProblems(data);
      } catch (error) {
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    };

    fetchrawProblems();
  }, []);

  return (
    <div>
      <h1>Lista de Problemas</h1>
      <ul>
        {rawProblems.map((problem) => (
          <li key={problem.id}>
            <strong>{problem.title}</strong>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemComponent;

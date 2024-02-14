export const sectores = ["Tecnología", "Derecho", "Salud"]
    
export const tipo_solicitante = ["Persona Natural", "Entidad Privada", "Entidad Pública"]

export const estados = ["Revisión pendiente", "Publicado", "Desaprobado"]

export const prioridades = ["Baja", "Media", "Alta"]

export const ramas = [
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
            { label: 'Derecho Corporativo de Mirco & Macro Empresas', value: 'corporativo' },
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



export const problemas = [
    {
        id: 1,
        title: "Problema de Calidad en el Proceso de Producción de Automóviles en Detroit, EE. UU.",
        area: "Manufactura",
        cantRecursos: 5,
        description: "Deficiencias en el control de calidad durante la producción de automóviles generan productos defectuosos, aumentando los costos de garantía y afectando la reputación de la marca.",
        dateRegistration: "15/09/2024",
        status: "Publicado"
    },
    {
        id: 2,
        title: "Descoordinación en la Logística de Distribución de Alimentos en Buenos Aires, Argentina",
        area: "Logística",
        cantRecursos: 4,
        description: "Falta de coordinación en la cadena de suministro de alimentos provoca retrasos en la distribución, resultando en desperdicio de productos perecederos y afectando la disponibilidad en los mercados locales.",
        dateRegistration: "02/03/2024",
        status: "Revisión pendiente"
    },
    {
        id: 3,
        title: "Ineficiencia en el Sistema de Gestión de Inventarios de una Cadena de Tiendas en Madrid, España",
        area: "Comercio Minorista",
        cantRecursos: 6,
        description: "Problemas en la gestión de inventarios generan pérdidas por obsolescencia y roturas de stock, impactando en las ventas y la satisfacción del cliente.",
        dateRegistration: "18/07/2024",
        status: "Publicado"
    },
    {
        id: 4,
        title: "Falta de Capacitación en la Prevención de Ciberataques en Empresas Tecnológicas en Silicon Valley, EE. UU.",
        area: "Seguridad Informática",
        cantRecursos: 8,
        description: "La carencia de programas de capacitación en ciberseguridad contribuye a vulnerabilidades en sistemas informáticos, exponiendo a las empresas a riesgos de ciberataques y pérdida de datos sensibles.",
        dateRegistration: "30/04/2024",
        status: "Publicado"
    },
    {
        id: 5,
        title: "Problema de Desarrollo de Recursos Humanos en Empresas Petroleras en Dubai, Emiratos Árabes Unidos",
        area: "Recursos Humanos",
        cantRecursos: 7,
        description: "La falta de programas de desarrollo profesional afecta la retención del talento y el desempeño laboral en el sector petrolero, comprometiendo la eficiencia operativa.",
        dateRegistration: "12/01/2024",
        status: "Revisión pendiente"
    },
    {
        id: 6,
        title: "Ineficacia en la Gestión de Residuos en Hoteles de Cancún, México",
        area: "Sostenibilidad Ambiental",
        cantRecursos: 4,
        description: "La falta de políticas y prácticas sostenibles en la gestión de residuos en hoteles contribuye a la contaminación ambiental y afecta la imagen turística de la ciudad.",
        dateRegistration: "22/05/2024",
        status: "Desaprobado"
    },
    {
        id: 7,
        title: "Problemas en la Comunicación Interna en Empresas de Telecomunicaciones en Seúl, Corea del Sur",
        area: "Comunicación Organizacional",
        cantRecursos: 6,
        description: "La falta de canales efectivos de comunicación interna dificulta la coordinación entre departamentos, generando malentendidos y ralentizando la toma de decisiones.",
        dateRegistration: "10/11/2024",
        status: "Publicado"
    },
    {
        id: 8,
        title: "Ineficiencia Energética en Edificios de Oficinas en Nueva York, EE. UU.",
        area: "Eficiencia Energética",
        cantRecursos: 5,
        description: "La falta de medidas eficaces para mejorar la eficiencia energética en edificios de oficinas contribuye al desperdicio de recursos y aumenta los costos operativos.",
        dateRegistration: "05/08/2024",
        status: "Desaprobado"
    },
    {
        id: 9,
        title: "Problemas en la Gestión de Proyectos de Construcción en Sídney, Australia",
        area: "Construcción",
        cantRecursos: 8,
        description: "La falta de planificación y supervisión adecuada en proyectos de construcción resulta en retrasos, sobrecostos y baja calidad en las edificaciones.",
        dateRegistration: "14/06/2024",
        status: "Revisión pendiente"
    },
    {
        id: 10,
        title: undefined,
        area: undefined,
        cantRecursos: undefined,
        description: undefined,
        dateRegistration: undefined,
        status: undefined
    }
];

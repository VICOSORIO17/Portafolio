import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { PythonIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "Calculadora simple",
    description:
      'Cree una calculadora simple en Python a base de la libreria "TKinter". Este proyecto buscaba generar experiencia para mi dentro del lenguaje',
    bannerUrl: "/poster/web1.jpeg",
    stackTech: [<PythonIcon />],
    ctas: [
      {
        link: "https://github.com/VICOSORIO17/Python---Calculadora",
        text: "Repositorio",
        variant: "secondary",
        icon: <CodeIcon />,
      },
      {
        link: "https://www.youtube.com/watch?v=Sc0Nettp3PY",
        text: "Video",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
  {
    id: "go-delivery",
    name: "Revision de Dataset",
    description:
      "Desarrollé la revision de un Dataset sobre el costo de vida en los países de America en Python usando la libreria Pandas, generé gráficos y tablas para analizar la información usando la libreria de Matprolib.",
    bannerUrl: "/poster/web2.jpeg",
    stackTech: [<PythonIcon />],
    ctas: [
      {
        link: "https://github.com/VICOSORIO17/Examen---Dataset",
        text: "Repositorio",
        variant: "secondary",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
];


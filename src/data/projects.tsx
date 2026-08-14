import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AstroIcon, JSONIcon, TailwindCSSIcon, TypeScriptIcon, VisualStudioCodeIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "Calculadora simple",
    description:
      'Cree una calculadora simple en Python a base de la libreria "TKinter". Este proyecto buscaba generar experiencia para mi dentro del lenguaje',
    bannerUrl: "/poster/web1.jpeg",
    stackTech: [<AstroIcon />, <TailwindCSSIcon />, <TypeScriptIcon />],
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
    name: "Go Delivery",
    description:
      "Desarrollé desde cero la aplicación móvil 'Go Delivery', una plataforma de entrega de comida a domicilio. Desarrollé interfaces de usuario intuitivas y responsivas, mejorando significativamente la experiencia del usuario final.",
    bannerUrl: "/poster/speed.svg",
    stackTech: [<TypeScriptIcon />, <TailwindCSSIcon />],
    ctas: [
      {
        link: "https://play.google.com/store/apps/details?id=com.Go",
        text: "Play Store",
        variant: "secondary",
        icon: <ExternalLinkIcon />,
      },
      {
        link: "https://apps.apple.com/pe/app/go-delivery-comida-r%C3%A1pida/id6741622545",
        text: "App Store",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
];


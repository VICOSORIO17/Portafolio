import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AstroIcon, JSONIcon, TailwindCSSIcon, TypeScriptIcon, VisualStudioCodeIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "La casa Informática",
    description:
      'Creé la página web para la academia de programación "La Casa Informática". Este proyecto buscaba informar y atraer a nuevos estudiantes.',
    bannerUrl: "/poster/web.svg",
    stackTech: [<AstroIcon />, <TailwindCSSIcon />, <TypeScriptIcon />],
    ctas: [
      {
        link: "https://github.com/withoutnicks/landing-la-casa-informatica",
        text: "Repository",
        variant: "secondary",
        icon: <CodeIcon />,
      },
      {
        link: "https://lacasainformatica.com/",
        text: "Visit",
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
  {
    id: "mi-cole",
    name: "Mi Cole",
    description:
      "Desarrollé 'Mi Cole', una app móvil con React Native para la gestión de asistencia escolar mediante RFID. Diseñé interfaces intuitivas y aseguré una integración eficiente con el backend.",
    bannerUrl: "/poster/admin.svg",
    stackTech: [<TypeScriptIcon />, <TailwindCSSIcon />],
    ctas: [
      {
        link: "https://play.google.com/store/search?q=MICOLE&c=apps&hl=es_PE",
        text: "Play Store",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
  {
    id: "qbd-farmacia",
    name: "QBD Farmacia Magistral",
    description:
      "Lideré el desarrollo front-end del sistema ERP empresarial con React y TypeScript. Diseñé componentes reutilizables, interfaces intuitivas y aseguré la integración con servicios RESTful en Python.",
    bannerUrl: "/poster/admin.svg",
    stackTech: [<TypeScriptIcon />, <TailwindCSSIcon />],
    ctas: [
      {
        link: "https://qbd-proyecto-laboratorio.onrender.com/login?returnUrl=%2Fgestion-pedidos",
        text: "Visitar",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
];

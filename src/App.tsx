import React from 'react';
import { Github, Linkedin, Mail, ExternalLink} from 'lucide-react';

const projects = [
  {
    title: "Juego del ahorcado",
    description: "Un proyecto hecho completamente con React y Typescript",
    link: "https://mi-juego-rddsl.netlify.app/"
  },
  {
    title: "Manejo de Búsqueda Binaria & Simple",
    description: "Ese repositorio presenta una implementación clara y eficiente de la búsqueda binaria y lineal en Python",
    link: "https://github.com/IWuYhong/busqueda_binaria"
  },
  {
    title: "Green STF",
    description: "Pagina web sencilla para mostrar la finalidad de la empresa.",
    link: "https://greenstf.es/"
  },
  {
    title: "Formulario de Proyecto de Free Code Camp",
    description: "Formulario creado con lo aprendido de Free Code Camp, el estilo es unico.",
    link: "https://projectfreecodecamp.netlify.app/"
  },
  {
    title: "Trascendence V1",
    description: "Pagina web sencilla para mostrar la finalidad de la empresa.",
    link: "https://trascendence.netlify.app/"
  },
  {
    title: "Trascendence V2",
    description: "Pagina web siguiendo el ejemplo de la primera, pero con un diseño visual un poco mejor adaptado",
    link: "https://trascendence.es/"
  },
  {
    title: "Focaliza 2030",
    description: "Pagina web creada con Wordpress, se usó Elementor y codigo. Empresa española de Outsourcing comercial.",
    link: "https://trascendence.es/"
  },
  {
    title: "Nebula Gin",
    description: "Pagina web creada con Wordpress, se usó Elementor y codigo. Pagina principal para mostrar producto Nebula Gin.",
    link: "https://nebulagin.com/"
  },
  {
    title: "Tarotista de Sevilla",
    description: "Pagina web creada con Wordpress, se usó Astra y codigo. Proyecto de un sitio web de Tarotista Dinamico.",
    link: "https://tarotistasdesevilla.com/"
  },
  {
    title: "Primetel Es",
    description: "Pagina web creada con Wordpress, se usó Elemethor y codigo. Proyecto de un sitio web de Outsourcing comercial.",
    link: "https://primetel.es/"
  },
  {
    title: "Gin Cat",
    description: "Pagina web creada con Wordpress, se usó Elementor y codigo. Pagina principal para mostrar producto Gin Cat.",
    link: "https://gincat.cat/"
  },
  {
    title: "Alissa TV",
    description: "Pagina web creada con Wordpress, se usó Elementor y codigo. Pagina principal para llevar a perfil de YouTube (Creado y Gestionado por mi)",
    link: "https://alissatv.com/"
  },
  {
    title: "Consumo Estrategico",
    description: "Pagina web creada con Wordpress, se usó Elementor y codigo. Pagina principal de Blog sobre acontecimientos e información de interes.",
    link: "https://consumoestrategico.com/"
  },
  {
    title: "Bot de Exportación Personalizado en Python",
    description: "Bot de Exportación Personalizado en Python: Automatiza y Organiza Tus Datos.",
    link: "https://github.com/IWuYhong/filtrador_python"
  }
]

const gallery = [
  {
    alt: "soldadura_pbc",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_1.jpg",
    fecha: "26/02/2022",
    description: "Soldadura de IC Power - No encendia.",
    title: "A10 IC Power",
  },
  {
    alt: "reconstrucción_flex",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_2.jpg",
    fecha: "21/02/2022",
    description: "Reconstrucción de Flex Main.",
    title: "Flex Tablet Reconstrucción",
  },
  {
    alt: "Laboratorio",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_3.jpg",
    fecha: "21/02/2022",
    description: "Mi Laboratorio de Electronica.",
    title: "Mi Laboratorio.",
  },
  {
    alt: "Reflow IC VBat Redmi 9T",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_4.jpg",
    fecha: "21/02/2022",
    description: "Reflow Power Redmi 9T, No reconocia entrada USB. Procedí hacerle reflow para renovar el estaño debajo de los pads.",
    title: "Reflow IC de VBat.",
  },
  {
    alt: "Reflow Memoria EMMC IPad",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_5.jpg",
    fecha: "21/05/2022",
    description: "Reflow EMMC IPad, No iniciaba el software. Reflow Exitoso.",
    title: "Reflow EMMC.",
  },
  {
    alt: "Mantenimiento PC",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_6.jpg",
    fecha: "21/02/2022",
    description: "Mantenimiento de Computadora Desktop",
    title: "Mantenimiento.",
  },
  {
    alt: "Reemplazo de USB Tipo C",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_7.jpg",
    fecha: "28/03/2024",
    description: "Reemplazo de USB Tipo C",
    title: "Reemplazo de USB Tipo C",
  },
  {
    alt: "Soldando cable esmaltado de Auriculares",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_8.jpg",
    fecha: "14/06/2024",
    description: "Reparación de Auriculares sencillos.",
    title: "Soldadura de Cables de Auricular sencillo",
  },
  {
    alt: "Samsung A71",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_9.jpg",
    fecha: "1/12/2023",
    description: "Reballing IC",
    title: "Samsung A71 - IC Camara",
  },
  {
    alt: "Samsung A21s",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_10.jpg",
    fecha: "12/8/2023",
    description: "Reemplazo de USB Tipo C",
    title: "Reemplazo de USB Tipo C",
  },
  {
    alt: "Samsung A10s Ic RF",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_11.jpg",
    fecha: "15/5/2023",
    description: "Reflow Ic RF",
    title: "Reflow Ic RF",
  },
  {
    alt: "Reconstrucción de pistas PCB Consola Aire Acondicionado.",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_12.jpg",
    fecha: "23/5/2023",
    description: "Reconstrucción de pistas PCB Consola Aire Acondicionado.",
    title: "Reconstrucción de pistas PCB Consola Aire Acondicionado.",
  },
  {
    alt: "Reemplazo de Modulo de Carga Infinix Hot 20i",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_13.jpg",
    fecha: "23/7/2024",
    description: "Reemplazo de Modulo de Carga Infinix Hot 20i",
    title: "Reemplazo de Modulo de Carga Infinix Hot 20i",
  },
  {
    alt: "Reemplazo de Modulo de Carga Generico",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_14.jpg",
    fecha: "28/7/2024",
    description: "Reemplazo de Modulo de Carga Generico",
    title: "Reemplazo de Modulo de Carga Generico",
  },
  {
    alt: "Swap A50",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_15.jpg",
    fecha: "28/7/2024",
    description: "Swap A50 - Recuperando Movil deteriorado.",
    title: "Swap A50 Ic Carga & PMIC",
  },
  {
    alt: "Pizza",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/img_16.jpg",
    fecha: "28/7/2024",
    description: "Y si.. al igual se cocinar una deliciosa Pizza.",
    title: "Hobby - Pizza",
  }
];
const cursos = [
  {
    alt: "Python Course - Full",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/python_developer.webp",
    description: "Certificación de Conocimiento por Solo Learn",
    title: "SoloLearn - Python",
  },
  {
    alt: "Introduction to Python",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/introduction_python.webp",
    description: "Certificación de Conocimiento por Solo Learn",
    title: "SoloLearn - Introduction to Python",
  },
  {
    alt: "Javascript",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/javascript.webp",
    description: "Certificación de Conocimiento por Solo Learn",
    title: "SoloLearn - Javascript",
  },
  {
    alt: "HTML",
    image: "https://raw.githubusercontent.com/IWuYhong/portafolio_richard/refs/heads/main/images/html.webp",
    description: "Certificación de Conocimiento por Solo Learn",
    title: "SoloLearn - Introduction to HTML",
  }
]

const skills = ["React", "Docker", "Vue", "Astro", "TypeScript", "Node.js", "Javascript", "SQL", "CSS", "HTML", "Python", "Git", "Github", "Tailwind CSS", "Wordpress", "Figma", "Elementor", "Illustrator", "PhotoShop", "Adobe Premiere", "Excel Avanzado", "Premiere Pro", "After effects", "Davinci Resolve"]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header */}
      <header className="bg-[#127ea8]	 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="https://richard-portfolio-ve.netlify.app/" className="text-2xl font-bold">RD</a>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-[#1b546f]">Sobre mí</a>
            <a href="#projects" className="hover:text-[#1b546f]">Proyecto</a>
            <a href="#contact" className="hover:text-gray-200">Contacto</a>
            <a href="https://github.com/iwuyhong" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b546f]">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/richard-da-silva-0249881ba/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b546f]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:daniel34dasilva@gmail.com" className="hover:text-[#1b546f]">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1b546f] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Richard Da Silva</h1>
          <p className="text-xl mb-8">Full Stack Developer | Python Specialist | Problem Solver</p>
          <a href="mailto:daniel34dasilva@gmail.com" className="button-bezel bg-[#129dc8] w-full text-center py-2 px-6 rounded-lg hover:bg-[#127ea8] transition duration-300">Mi correo electronico</a>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-[#0c2c40] font-bold mb-8 text-center" id="about">Sobre mí</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://avatars.githubusercontent.com/u/26756784?v=4" alt="Richard Da Silva" className="rounded-full w-94 h-94 object-cover mx-auto" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-[#0c2c40] mb-4">
                ¡Hola! Mi nombre es Richard Da Silva, Programador.
              </p>
              <p className="text-lg text-[#0c2c40] mb-6">
                Soy un Desarrollador web FullStack con amplio conocimiento en tecnologías web modernas. Me apasiona encontrar soluciones creativas a desafíos complejo. Siempre estoy en constante crecimiento personal ya sea aprendiendo sobre algun dato e interes nuevo, siempre estoy dispuesto a explorar nuevas tecnologías y mejorar mis habilidades.
              </p>
              <p className="text-lg text-[#0c2c40] mb-6">
                Cuento con experiencia en Excel, trabaje en Mostrar, Filtrar y Desarrollar archivos para ver sus resultados como Tablas dinamicas, creando informes didacticos.

              </p>
              <p className="text-lg text-[#0c2c40] mb-6">
                Poseo experiencia demostrale en el uso de programas de diseño graficos, tales como Photoshop, Illustrator, Premiere Pro, After Effects y Davinci Resolve.
              </p>
              <p className="text-lg text-[#0c2c40] mb-6">
                Tengo conocimiento en Electronica ya sea comprendiendo un Esquematico o hasta en reparación pura, mi hobby favorito es Reparar dispositivos electronicos, ya sea un Movil o una Computadora o indiferentemente lo que sea. Cuanto con un pequeño laboratorio de reperación. Al comprender como esta funciona tengo el conocimiento suficiente para resolver problemas en relación a Software de Windows, Linux y hasta un Android o IOS e incluso Hardware.
              </p>
              <p className="text-lg text-[#0c2c40] mb-6">
                Lenguaje de programacion Preferido: "Python" por excelencia, divertido y muy dinamico.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-[#0c2c40] text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#aae8f7] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-[#0c2c40] font-bold mb-8 text-center">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl text-[#0c2c40] font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#0c2c40] hover:text-[#2ebae2] flex items-center">
                    Ver Proyecto <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery  */}
      <section id="gallery" className="bg-[#2ebae2] py-20">
        <h1 className="text-4xl text-[#fff] font-bold mb-8 text-center py-2">Galería</h1>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((gallery, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 text-center ">
                  <h3 className="text-xl text-[#0c2c40] font-bold mb-2">{gallery.title}</h3>
                  <p className="text-gray-600 mb-4">{gallery.description}</p>
                  <p className="text-sm text-gray-500">Fecha: {gallery.fecha}</p>

                </div>
                <img
                  src={gallery.image}
                  alt={gallery.alt}
                  className="bg-contain h-[300px] w-full object-cover mx-auto  cursor-pointer hover:scale-105 transition-transform duration-300 hover:ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos  */}
      <section id="cursos" className="bg-[#28a2c4] py-20">
        <h1 className="text-4xl text-[#fff] font-bold mb-8 text-center py-2">Cursos</h1>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((cursos, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 text-center ">
                  <h3 className="text-xl text-[#0c2c40] font-bold mb-2">{cursos.title}</h3>
                  <p className="text-gray-600 mb-4">{cursos.description}</p>

                </div>
                <a href={cursos.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={cursos.image}
                  alt={cursos.alt}
                  className="bg-contain w-full object-cover mx-auto"
                />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#127ea8] text-white py-8">
        <div className="container mx-auto px-6" id="contact">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Richard Da Silva. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/iwuyhong" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b546f]">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/richard-da-silva-0249881ba/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b546f]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:daniel34dasilva@gmail.com" className="hover:text-[#1b546f]">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

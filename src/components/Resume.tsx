
export default function Resume() {
  return (
    <>
      <article className="flex flex-col space-y-2 justify-center items-center h-full">
        <p className="text-black text-md">
          Hola, soy
          <span className="text-indigo-600 pl-1 font-bold">
            Gustavo Alejandro López Zarate
          </span>
        </p>

        <h1 className="text-sm text-black">
          Desarrollador de Software Full Stack
        </h1>

        <p className="w-3/4 text-xs text-center text-gray-500">
          Apasionado por crear experiencias digitales excepcionales. Especializado en desarrollo web moderno, con experiencia en React, Node.js y tecnologías cloud.
        </p>


        <div className="flex justify-center gap-2 mt-3">
          <button className="bg-gray-500 text-xs px-3 py-1 rounded-md cursor-pointer hover:bg-gray-600 transition-all">
            Proyectos
          </button>
          <button className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-all">
            Contactar
          </button>
        </div>
      </article>
    </>
  )
}

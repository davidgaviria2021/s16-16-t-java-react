import { useState } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";



export default function AccordionMaterial() {
    const [openCategories, setOpenCategories] = useState<boolean>(false);
    const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
      '1 PLA': false,
      '2 PETG': false,
      '3 ABS/ASA': false,
      '4 FLEXIBLE': false,
      '5 FRESINA PRO': false,
      '6 NYLON PA12': false,
    });
    const categorias = [
      {
        headerCategory: '1 PLA',
        categories: ['PLA GRIS', 'PLA Amarillo', 'PLA Negro','PLA-Blanco',' PLA-Rojo', 'PLA-Naranja','PLA-Azul']
      },
      {
        headerCategory: 'Insumos',
        categories: ['Accesorios de Impresión', 'Almacenamiento y Cuidado']
      },
    ]
    const handleToogle = (catego: string) => {//pepe
      setOpenStates(prev => ({...prev, [catego]: !prev[catego]}));
    }
    return (
      <section className="w-[250px] sticky top-10 mt-16">
        <h1 className="text-start text-white text-2xl font-semibold leading-[28.80px]">
          Filtrar Por
        </h1>
        <aside className="mt-2.5 flex flex-col gap-4">
  
          <article className="select-none bg-primary-dark-active rounded-lg border border-neutral-dark-hover">
            <div
              onClick={() => setOpenCategories(!openCategories)}
              className="cursor-pointer w-full h-10 p-2 justify-between items-center flex">
              <h2>Categorías</h2>
              {openCategories ? <RiArrowDownSLine className="w-6 h-6" /> : <RiArrowRightSLine className="w-6 h-6" />}
            </div>
            {openCategories && categorias.map((ct, i) => (
              <section key={i}>
                <div
                  onClick={() => handleToogle(ct.headerCategory)} //lotes
                  className="cursor-pointer pl-2 hover:bg-primary-darker transition w-full h-10 p-2 justify-between items-center flex">
                  <h2>{ct.headerCategory}</h2>
                  {openStates[ct.headerCategory] ? <RiArrowDownSLine className="w-6 h-6" /> : <RiArrowRightSLine className="w-6 h-6" />}
                </div>
                {openStates[ct.headerCategory]  &&
                  <section>
                    {ct.categories.map((item, idx) => (
                      <p key={idx} className="cursor-pointer text-sm pl-4 py-3 w-full text-start font-thin hover:bg-primary-darker transition">
                        {item}
                      </p>
                    ))}
                  </section>
                }
              </section>
            ))}
          </article>
  
        </aside>
      </section>
    )
}



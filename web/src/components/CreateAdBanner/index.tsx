import { MagnifyingGlassPlus } from 'phosphor-react'

export default function CreateAdBanner() {
  return (
    <>
        <div className='bg-[#2A2634] flex items-center justify-between  rounded-lg py-6 px-8 '>
                <div>
                    <strong className='font-black text-2xl text-white block'>
                        Não encontrou seu duo?
                    </strong>
                    <span className='text-zinc-400 font-normal'>
                        Publique um anúncio e encontre novos players
                    </span>
                </div>
                <button className='flex items-center gap-3 text-white bg-violet-500 rounded-md py-3 px-4 hover:bg-violet-600'> 
                    <MagnifyingGlassPlus weight="light" size={24} />
                    Publicar anúncio
                </button>
        </div>
    </>
  )
}

import logoImage from './assets/Logo.svg'

function HomePage() {
    <>
        <img src={logoImage} alt="logotipo" />
        <h1 className='text-6xl text-white font-black m-20'>Seu <span className='bg-gradientTitle text-transparent bg-clip-text'>duo</span> está aqui.</h1>
        
        <div className='grid grid-cols-6 gap-6'>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image1.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> League of Legends</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image 2.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> Dota 2</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image 3.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> Cs Go</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image 5.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> Apex Legends</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image 6.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> Fortnite</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg overflow-hidden'>
                <img src="/image 7.svg" alt="" />

                <div className='w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0 left-0 right-0'>
                    <strong className='font-bold text-white block'> League of Legends</strong>
                    <span className='text-zinc-300 text-sm mt-1'>4 anúncios</span>
                </div>
            </a>

        </div>

        <div className='pt-1 bg-gradientTitle mt-8 self-stretch rounded-lg overflow-hidden'>
            <div className='bg-[#2A2634] flex items-center justify-between  rounded-lg py-6 px-8 '>
                <div>
                    <strong className='font-black text-2xl text-white block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 font-normal'>Publique um anúncio e encontre novos players</span>
                </div>
                <button className='text-white bg-violet-500 rounded-md py-3 px-4'>Publicar anúncio</button>
            </div>
        </div>
    </>
}

export default HomePage
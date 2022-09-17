import logoImage from './assets/Logo.svg'
import './styles/main.css'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
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

      <div className='bg-[#2A2634] mt-8 py-6 px-8 self-stretch rounded-lg'>

      </div>
    </div>
  )
}

export default App

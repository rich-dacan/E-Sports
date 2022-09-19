import logoImage from './assets/Logo.svg';
import CreateAdBanner from './components/CreateAdBanner';
import GameBanner from "./components/GameBanner";
import './styles/main.css';

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        
        <img src={logoImage} alt="logotipo" />
        <h1 className='text-6xl text-white font-black m-20'>
            Seu <span className='bg-gradientTitle text-transparent bg-clip-text'>duo</span> está aqui !
        </h1>
        
        <div className='grid grid-cols-6 gap-6'>
            <GameBanner 
                bannerUrl="../public/image1.svg"
                title="League of Legends"   
                adsCount={7}
            />
        </div>

        <div className='pt-1 bg-gradientTitle mt-8 self-stretch rounded-lg overflow-hidden'>
            <CreateAdBanner/>
        </div>
    </div>
  )
}

export default App

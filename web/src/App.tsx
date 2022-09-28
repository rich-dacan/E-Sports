import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import logoImage from './assets/Logo.svg';
import CreateAdBanner from './components/CreateAdBanner';
import CreateAdModal from './components/Form/CreateAdModal';
import GameBanner from "./components/GameBanner";
import './styles/main.css';
export interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

function App() {

    const [games, setGames] = useState<GameProps[]>([]);

    useEffect(() => {
      fetch('http://localhost:3001/games')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      
      <img src={logoImage} alt="logotipo" />
      <h1 className='text-6xl text-white font-black m-20'>
          Seu <span className='bg-gradientTitle text-transparent bg-clip-text'>duo</span> está aqui !
      </h1>
      
      <div className='grid grid-cols-6 gap-6'>
          
          {games.map(({ id,  bannerUrl, title, _count }) => 

            <GameBanner 
              key={id}
              bannerUrl={bannerUrl}
              title={title}  
              adsCount={_count.ads}
            />
          )}
      </div>

      <Dialog.Root>

        <CreateAdBanner/>

        <CreateAdModal/>
        
      </Dialog.Root>
    </div>
  )
}

export default App

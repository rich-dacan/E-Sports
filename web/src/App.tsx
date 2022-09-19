import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import logoImage from './assets/Logo.svg';
import CreateAdBanner from './components/CreateAdBanner';
import GameBanner from "./components/GameBanner";
import './styles/main.css';
interface GameProps {
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

            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

                <Dialog.Content className='fixed bg[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
                    <Dialog.Title>
                        Publique um anúncio
                    </Dialog.Title>

                    <Dialog.Content>
                        teste
                    </Dialog.Content>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        
    </div>
  )
}

export default App

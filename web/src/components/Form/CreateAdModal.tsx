import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';

import { useEffect, useState } from 'react';
import { GameProps } from '../../App';
import Input from './input';


export default function CreateAdModal() {

  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<String[]>([]);

  console.log(weekDays)

  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg'>
        <Dialog.Title className='text-3xl font-black '>
            Publique um anúncio
        </Dialog.Title>

          <form className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'> 
              <label htmlFor="game" className='font-semibold'>Qual o game?</label>
              <select 
                id="game"   
                className='bg-zinc-900 rounded py-3 px-4 text-sm text-zinc-500 placeholder:text-zinc-500'
                defaultValue='bg-zinc-900'
              >
                <option className='' disabled value="">Selecione o game que deseja jogar</option>

                {games.map(( game ) => 
                
                  <option key={game.id} value={game.id}>{game.title}</option>
                )}
                
              </select>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
              <Input 
                id="name"  
                placeholder="Como te chamam dentro do game?" 
              />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying" className='font-semibold'>Joga há quantos anos?</label>
                <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
                <Input id="discord" placeholder="Usuário#0000" />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>
                <ToggleGroup.Root 
                  type='multiple' 
                  className='grid grid-cols-4 gap-3'
                  onValueChange={setWeekDays}
                  >
                  <ToggleGroup.Item 
                    value='0'
                    title='Domingo'
                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Segunda'
                    value='1'
                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Terça'
                    value='2'
                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Quarta'
                    value='3'
                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Quinta'
                    value='4'
                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Sexta'
                    value='5'
                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item 
                    title='Sábado'
                    value='6'
                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

                  <div className='flex-1 flex-col gap-2 '>
                      <label htmlFor="hourStart" className='font-semibold'>Qual horário do dia?</label>
                      <div className='grid grid-cols-2 gap-6'>
                        <Input id="hourStart" type="time" placeholder='De'/>
                        <Input id="hourEnd" type="time" placeholder='Até'/>
                      </div>
                  </div>
              </div>

              <label className='flex gap-2 mt-2 text-sm items-center'>
                <Checkbox.Root className=' w-6 h-6 p-1 bg-zinc-900'>
                  <Checkbox.Indicator className='text-emerald-400'>
                    <Check size={16}/>
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me conectar ao chat de voz
              </label>

              <footer className='flex justify-end mt-4 gap-4'>
                <Dialog.DialogClose 
                  type='button'
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                >
                  Cancelar
                </Dialog.DialogClose>
                <button 
                  type="submit"
                  className='flex items-center gap-3 bg-violet-500 px-12 h-12 rounded-md font-semibold hover:bg-violet-600'
                >
                  <GameController weight="fill" size={24}/>
                  Encontrar duo
                </button> 
              </footer>
          </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import { Check, GameController } from 'phosphor-react';
import Input from './input';


export default function CreateAdModal() {
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
              <Input 
                id="game"  
                placeholder="Selecione o game que deseja jogar"  
              />
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
                <div className='grid grid-cols-4 gap-3'>
                    <button 
                      title='Domingo'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      D
                    </button>
                    <button 
                      title='Segunda'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      S
                    </button>
                    <button 
                      title='Terça'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      T
                    </button>
                    <button 
                      title='Quarta'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      Q
                    </button>
                    <button 
                      title='Quinta'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      Q
                    </button>
                    <button 
                      title='Sexta'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      S
                    </button>
                    <button 
                      title='Sábado'
                      className='w-8 h-8 bg-zinc-900 rounded'
                    >
                      S
                    </button>
                  </div>
                </div>

                  <div className='flex-1 flex-col gap-2 '>
                      <label htmlFor="hourStart" className='font-semibold'>Qual horário do dia?</label>
                      <div className='grid grid-cols-2 gap-6'>
                        <Input id="hourStart" type="time" placeholder='De'/>
                        <Input id="hourEnd" type="time" placeholder='Até'/>
                      </div>
                  </div>
              </div>

              <div className='flex gap-2 mt-2 text-sm items-center'>
                <Checkbox.Root className=' w-6 h-6 p-1 bg-zinc-900'>
                  <Checkbox.Indicator className='text-emerald-400'>
                    <Check size={16}/>
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me conectar ao chat de voz
              </div>

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

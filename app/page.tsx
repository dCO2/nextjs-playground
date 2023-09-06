import Image from 'next/image'
import DialogDemo from './dialog/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className='border-solid border-2 border-black p-2'>
      <i>PLAYGROUND</i>&nbsp;PLAYGROUND
      <br/>
      PLAYGROUND&nbsp;<i>PLAYGROUND</i>
      <br/>
      <i>PLAYGROUND</i>&nbsp;PLAYGROUND
    </div>
    <div>
      <DialogDemo/>
    </div>
    <div className='text-xs'>
      <i>some footer (to keep the middle div in flex-col centered)</i>
    </div>
    </main>
  )
}

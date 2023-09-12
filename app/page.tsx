import ContextMenuDemo from "./cmenu/page"

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
    <div className="flex-col space-y-10">
      <div className="border border-black border-dashed p-2">1. This is a list element <ContextMenuDemo/></div>
      <div className="border border-black border-dashed p-2">2. This is a list element <ContextMenuDemo/></div>
      <div className="border border-black border-dashed p-2">3. This is a list element <ContextMenuDemo/></div>
      <div className="border border-black border-dashed p-2">4. This is a list element <ContextMenuDemo/></div>
    </div>
    <div className='text-xs'>
      <i>some footer (to keep the middle div in flex-col centered)</i>
    </div>
    </main>
  )
}

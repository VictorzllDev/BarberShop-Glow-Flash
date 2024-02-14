import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { TbMoustache } from 'react-icons/tb'
import { useRedirectToURL } from '../../hooks'
import { instagram, phoneNumber, text } from '../../services/variables'

export function Header() {
  const urlWhatsapp = `https://wa.me/55${phoneNumber}?text=${encodeURI(text)}`
  const urlInstagram = `https://instagram.com/${instagram}`

  return (
    <header className="absolute left-1/2 top-0 flex w-full max-w-screen-sm -translate-x-1/2 items-center justify-between px-7 py-1 duration-200 sm:top-3 sm:rounded-full sm:bg-[rgba(200,200,200,.18)] sm:backdrop-blur-sm">
      <BsWhatsapp
        onClick={() => useRedirectToURL(urlWhatsapp)}
        className="cursor-pointer text-2xl text-zinc-100 duration-200 hover:text-zinc-400"
      />
      <TbMoustache className="text-6xl text-emerald-500" />
      <BsInstagram
        onClick={() => useRedirectToURL(urlInstagram)}
        className="cursor-pointer text-2xl text-zinc-100 duration-200 hover:text-zinc-400"
      />
    </header>
  )
}

import { Button } from '../Button'
import { useScrollToDiv } from '../../hooks'
import { Header } from '../Header'

export function SectionOne() {
  return (
    <section className="relative z-10 flex h-screen flex-col items-start justify-center gap-1 bg-[url('/src/assets/fundo.jpg')] bg-cover bg-center px-7 py-3 sm:items-center">
      <Header />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full bg-gradient-radial from-transparent to-black" />
      <h1 className="text-start text-3xl font-light sm:text-center sm:text-4xl md:text-6xl">
        Bem-vindo à BarberShop Glow Flash!
      </h1>
      <p className="mb-12 text-start text-sm font-light sm:text-center md:text-lg">
        onde o estilo encontra a autenticidade. Cuidado excepcional para homens
        modernos que buscam o melhor.
      </p>
      <Button onClick={() => useScrollToDiv('section-2')}>
        Conheça-nos Agora
      </Button>
    </section>
  )
}

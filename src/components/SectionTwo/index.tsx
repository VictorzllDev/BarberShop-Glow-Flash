import { GiRazor } from 'react-icons/gi'
import { GridPosters } from '../GridPosters'
import { arrayPosters } from '../../services/pathPosters'

export function SectionTwo() {
	return (
		<section
			id="section-2"
			className="flex min-h-screen flex-col justify-center px-7 py-24 md:items-center"
		>
			<span className="mb-7 flex flex-col items-center gap-4 before:h-12 before:w-0.5 before:bg-zinc-500">
				<GiRazor className="text-5xl" />
			</span>
			<h1 className="font-regular text-start text-3xl sm:text-center sm:text-4xl lg:text-5xl">
				Bem-vindo à nossa Barbearia
			</h1>
			<p className="mb-9 max-w-4xl text-start text-sm font-light sm:text-center">
				Desde 2007 oferecemos corte de cabelo masculino, adulto, e infantil, e
				também fazemos todos os tipos de barba, com qualidade e bom atendimento.
			</p>
			<GridPosters arrayPosters={arrayPosters} />
		</section>
	)
}

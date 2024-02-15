import { Button } from '..'
import { useRedirectToURL } from '../../hooks'
import {
	googleMaps,
	googleRota,
	phoneNumber,
	text,
} from '../../services/variables'

export function SectionFour() {
	const urlWhatsapp = `wa.me/55${phoneNumber}?text=${encodeURI(text)}`

	return (
		<section className="px-7 py-12 pt-16">
			<h2 className="mb-6 text-center text-2xl">Tá esperando o que?</h2>
			<iframe
				src={googleMaps}
				style={{ border: '0' }}
				loading="lazy"
				className="mx-auto h-96 w-full max-w-4xl rounded"
			></iframe>
			<div className="mx-auto mt-6 flex max-w-4xl flex-col gap-12 md:flex-row">
				<div className="flex flex-1 flex-col items-start justify-start gap-2">
					<p className="text-xl">Contato</p>
					<Button onClick={() => useRedirectToURL(urlWhatsapp)}>
						Whatsapp
					</Button>

					<ul className="font-light">
						<li>(38)98856-8532</li>
					</ul>
				</div>
				<div className="flex flex-1 flex-col items-start justify-start gap-2">
					<p className="text-xl">Endereço</p>
					<Button onClick={() => useRedirectToURL(googleRota)}>
						Ver Rotas
					</Button>
					<p className="max-w-sm font-light">
						Montes Claros Shopping, Avenida Donato Quintino, Bairro, 90 - Cidade
						Nova, Montes Claros - MG, 39400-546
					</p>
				</div>
				<div className="flex flex-1 flex-col items-start justify-start gap-2">
					<p className="text-xl">Horário de funcionamento</p>
					<ul className="font-light">
						<li>seg.: 09:00 - 20:00</li>
						<li>ter.: 09:00 - 20:00</li>
						<li>qua.: 09:00 - 20:00</li>
						<li>qui.: 09:00 - 20:00</li>
						<li>sex.: 09:00 - 21:00</li>
						<li>sab.: 09:00 - 20:00</li>
						<li>Dom.: Fechado</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

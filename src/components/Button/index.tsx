interface IButton {
	children: string
	onClick: () => void
}

export function Button({ children, onClick }: IButton): JSX.Element {
	return (
		<button
			onClick={onClick}
			className="rounded bg-zinc-400 p-4 text-lg  font-bold duration-300 hover:bg-green-500"
		>
			{children}
		</button>
	)
}

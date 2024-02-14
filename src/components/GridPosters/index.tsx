interface IGridPosters {
  arrayPosters: string[]
}

export function GridPosters({ arrayPosters }: IGridPosters) {
  const posters = arrayPosters?.slice(0, 5)
  return (
    <div className="grid h-auto w-full max-w-4xl grid-cols-3 grid-rows-2 gap-1 rounded bg-zinc-800 p-2">
      {posters?.map((poster, i) => {
        return (
          <div key={i} className={!i ? 'row-span-2' : ''}>
            <img
              src={poster}
              alt="Image Poster"
              className="h-full w-full rounded object-cover object-center"
            />
          </div>
        )
      })}
    </div>
  )
}

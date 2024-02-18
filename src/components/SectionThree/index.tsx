import { usePostersData } from '../../hooks/usePostersData'

export function SectionThree() {
  const { data } = usePostersData()
  const dataPosters = data?.filter((poster) => poster.media_type === 'IMAGE')
  const dataThreeimgs = dataPosters?.slice(0, 3)

  return (
    <section className="px-7 py-3">
      {/* <h2 className="mb-6 text-center text-4xl font-light">Galeria</h2> */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {dataThreeimgs?.map(({ id, media_url }) => {
          return (
            <div
              key={id}
              className="cont h-72 w-56 space-y-4 rounded bg-slate-800 p-2"
            >
              <img
                src={media_url}
                className="h-[216px] w-full rounded-sm bg-slate-600"
              />
              <span className="block h-2 w-2/5 rounded-sm bg-slate-500" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

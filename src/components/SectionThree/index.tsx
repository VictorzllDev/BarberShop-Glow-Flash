import { AiFillHeart } from 'react-icons/ai'
import { usePostersData } from '../../hooks/usePostersData'

export function SectionThree() {
  const { data } = usePostersData()
  const dataPosters = data?.data?.filter(
    (poster) => poster.media_type === 'IMAGE',
  )
  const dataThreeimgs = dataPosters?.slice(0, 3)

  return (
    <section className="px-7 py-3">
      <h2 className="mb-6 text-center text-4xl font-light">Galeria</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {dataThreeimgs?.map(({ id, media_url, caption }) => {
          return (
            <div
              key={id}
              className="flex h-auto w-full max-w-[16rem] flex-col gap-3 rounded-md bg-zinc-800 p-3 "
            >
              <img
                src={media_url}
                alt="Image Poster"
                className="h-full w-full rounded object-cover object-center"
              />
              <div className="flex items-center justify-between">
                <span className="w-3/5 overflow-hidden text-ellipsis whitespace-nowrap">
                  {caption}
                </span>
                <AiFillHeart className="text-2xl text-zinc-50" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

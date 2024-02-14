import axios from 'axios'
import { useQuery } from 'react-query'

interface data {
	data: {
		data: {
			media_url: string
			media_type: string
			caption: string
			permalink: string
			id: string
		}[]
	}
}

async function fetchData() {
	const token: string = import.meta.env.VITE_TOKEN_META
	const url: string = `https://graph.instagram.com/me/media/?access_token=${token}&fields=media_url,media_type,caption,permalink`
	// Get Resquest
	const { data }: data = await axios.get(url)
	return data
}

export function usePostersData() {
	const query = useQuery({
		queryFn: fetchData,
		queryKey: ['posters-data'],
	})

	return query
}

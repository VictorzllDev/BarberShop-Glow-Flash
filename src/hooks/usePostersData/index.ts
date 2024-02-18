import axios from 'axios'
import { useQuery } from 'react-query'
import { token } from '../../services/variables'

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
	const url: string = `https://graph.instagram.com/me/media/?access_token=${token}&fields=media_url,media_type,caption,permalink`
	// Get Resquest
	const { data }: data = await axios.get(url)
	return data?.data
}

export function usePostersData() {
	const query = useQuery({
		queryFn: fetchData,
		queryKey: ['posters-data'],
	})

	return query
}

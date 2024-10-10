
import { filter } from '@chakra-ui/react';
import axios from 'axios'

export const fetchNotes = async (filter) => {
	try {
		var response = await axios.get('https://localhost:7148/notes', {
			params: {
				search: filter?.search,
				sortItem: filter?.sortItem,
				sortOrder: filter?.sortOrder,
			},
		})

		return response.data.notes
	} catch (e) {
		console.error(e)
	}
};

export const createNode = async (note) => {
	try {
		var response = await axios.post('https://localhost:7148/notes', note)

		return response.status
	} catch (e) {
		console.error(e)
	}
}
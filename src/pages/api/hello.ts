import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const body = req.body

		console.log(res[0])
		console.log(res[1])
		console.log(res[2])
		console.log(res[3])
    if (!body.accepted) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'username not found' })
    }

    // Found the name.
    // Sends a HTTP success code
    return res.status(200).json({ data: `${body.accepted}` })

		// fetch('http://127.0.0.1:8000/api/collabRequests/', requestOptions)
		// .then(async response => {
		// 	const isJson = response.headers.get('content-type')?.includes('application/json');
		// 	const data = isJson && await response.json();

		// 	// check for error response
		// 	if (!response.ok) {
		// 		// get error message from body or default to response status
		// 		const error = (data && data.message) || response.status;
		// 		return Promise.reject(error);
		// 	}
		// 	// this.setState({ postId: data.id })
		// })
		// .catch(error => {
		// 	// this.setState({ errorMessage: error.toString() });
		// 	console.error('There was an error!', error);
		// });
	}

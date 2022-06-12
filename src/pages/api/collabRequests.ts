import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const resData: any = await fetch("http://127.0.0.1:8000/api/collabRequests/").then((response) => response.json());
		if (!resData) {
			return res.status(400).json('request failed')
		}
		return res.status(200).json({data: resData});

	} 
	else if (req.method === 'POST') {
		const requestOptions = {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req.body)}
		const resData: any = await fetch("http://127.0.0.1:8000/api/collabRequests/", requestOptions);
		// .then(async response => {
        //     const isJson = response.headers.get('content-type')?.includes('application/json');
        //     const data = isJson && await response.json();

        //     // check for error response
        //     if (!response.ok) {
        //         // get error message from body or default to response status
        //         const error = (data && data.message) || response.status;
        //         return Promise.reject(error);
        //     }

        //     // this.setState({ postId: data.id })
        // })
        // .catch(error => {
        //     // this.setState({ errorMessage: error.toString() });
        //     console.error('There was an error!', error);
        // });
		// console.log("1")
		if (!resData) {
			return res.status(400).json({data: "Bad"})
		}
		return res.status(200).json({data: "Good"});
	} 
	else if (req.method === 'PUT') {
		const requestOptions = {method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req.body)}
		const resData: any = await fetch("http://127.0.0.1:8000/api/collabRequests/", requestOptions);
		if (!resData) {
			return res.status(400).json({data: "Bad"})
		}
		return res.status(200).json({data: "Good"});

	}
	}

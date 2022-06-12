import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const resData: any = await fetch("http://127.0.0.1:8000/api/collabRequests/").then((response) => response.json());
		if (!resData) {
			return res.status(400).json('request failed')
		}
		return res.status(200).json({data: resData});

	} 
	// else if (req.method === 'POST') {

	// } 
	else if (req.method === 'PUT') {
		const requestOptions = {method: req.method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req.body)}
		const resData: any = await fetch("http://127.0.0.1:8000/api/collabRequests/", requestOptions).then((response) => response.json());
		if (!resData) {
			return res.status(400).json('put failed')
		}
		return res.status(200).json('put successful');

	}
	}

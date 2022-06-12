import { Button } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ShowCollabsButton = () => {
	const [collabs, setCollabs] = useState<any>([]);

	const fetchData = () => {
    	fetch("http://127.0.0.1:8000/api/collabRequests/")
		.then(response => {
			return response.json()
		})
		.then(data => {
			data = data.filter( (data: { requestTo: string | string[]; }) => data.requestTo.includes("reid"))
			setCollabs(data)
		})
	}

	
	const requestOptions = {
		
	};
	const respondToRequest = async (values) => {
		const response = await (await fetch('api/hello', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ requestTo: values[0], requestFrom: values[1], wlSpots: values[2], accepted: values[3]})
		})).json();
		console.log("1")
		console.log(response);
		console.log("2")
	}


	return (
		
        <div >
			<Button onClick={fetchData}>Show My Collabs</Button>
				{collabs.length > 0 && (
					<ul>
					<li>From   To   WL Spots Requested</li>
					{collabs.map(collab => (
						<li>
							<h1 key={collab.created_at}>{collab.requestFrom} {collab.requestTo} {collab.wlSpots}</h1>
							<Button onClick={()=>respondToRequest([collab.requestTo, collab.requestFrom, collab.wlSpots, true])}>Accept</Button>
							<Button onClick={()=>respondToRequest([collab.requestTo, collab.requestFrom, collab.wlSpots, false])}>Deny</Button>
						</li>
					))}
					</ul>
				)}
		</div>
	);
};

export default ShowCollabsButton;
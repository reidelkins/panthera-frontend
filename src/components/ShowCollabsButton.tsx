import { Button } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ShowCollabsButton = () => {
	const [collabs, setCollabs] = useState<any>([]);

	const fetchData = async () => {
		await (await fetch("api/collabRequests", {method: 'GET'})).json()
		.then(response => {
			response = response.data.filter( (data: { requestTo: string | string[]; }) => data.requestTo.includes("reid"))
			setCollabs(response)
		});
	}

	const respondToRequest = async (values) => {
		const response = await (await fetch('api/collabRequests', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ requestTo: values[0], requestFrom: values[1], wlSpots: values[2], accepted: values[3]})
		})).json();
		fetchData
	}


	return (
		
        <div >
			<Button onClick={fetchData}>Show My Collabs</Button>
				{collabs.length > 0 && (
					<ul>
					<li>From   To   WL Spots Requested</li>
					{collabs.map(collab => (
						<li>
							<h1 key={collab.created_at}>{collab.requestFrom} {collab.requestTo} {collab.wlSpots} {collab.accepted.toString()} {collab.responded.toString()}</h1>
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
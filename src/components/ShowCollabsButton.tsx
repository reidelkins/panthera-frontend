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

	return (
		
        <div >
			<Button onClick={fetchData}>Show My Collabs</Button>
				{collabs.length > 0 && (
					<ul>
					<li>From   To   WL Spots Requested</li>
					{collabs.map(collab => (
						<li key={collab.created_at}>{collab.requestFrom} {collab.requestTo} {collab.wlSpots}</li>
					))}
					</ul>
				)}
		</div>
	);
};

export default ShowCollabsButton;
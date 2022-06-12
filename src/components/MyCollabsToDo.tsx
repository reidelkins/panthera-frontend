import { Button } from '@mantine/core';
import { useState } from 'react';

const MyCollabsToDo = () => {
	const [collabs, setCollabs] = useState<any>([]);

	const fetchData = async () => {
		await (await fetch("api/collabRequests", {method: 'GET'})).json()
		.then(response => {
			response = response.data.filter( (data: { requestTo: string | string[]; }) => data.requestTo.includes("reid"))
			setCollabs(response)
		});
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
						</li>
					))}
					</ul>
				)}
		</div>
	);
};

export default MyCollabsToDo;
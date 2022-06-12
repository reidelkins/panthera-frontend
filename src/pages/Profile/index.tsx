import { Button } from '@mantine/core';
import ShowCollabsButton from 'components/ShowCollabsButton';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import authenticatedRoute from '../../components/AuthenticatedRoute'


const Profile: NextPage = () => {
	
	
	const [panthas, setPanthas] = useState<any>([]);
	const [collabs, setCollabs] = useState<any>([]);
	// const navigate = useNavigate()
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

	useEffect(() => {
		const fetchItems = async () => {
			const panthas = await (await fetch('http://127.0.0.1:8000/api/panthas/')).json();
			// const highestsales = await (await fetch('api/highestsales')).json();
			// largestwhales.sort((a, b) => (a.rank > b.rank) ? 1 : -1)
			// highestsales.sort((a, b) => (a.rank > b.rank) ? 1 : -1)
			// const sortedWhales = largestwhales.sort((a: any, b: any) => {
			// 	return (a['Rank'] < b['Rank']) ? -1 : 1;
			// });
			// const sortedSales = highestsales.sort((a: any, b: any) => {
			// 	return (a['Rank'] < b['Rank']) ? -1 : 1;
			// });

			setPanthas(panthas);
		};

		fetchItems();
	}, []);
	const router = useRouter();

	// const handleLogout = () => {
	// 	auth.logout()
	// 	navigate('/')
	// }

	return (
		<>
			<h1>Profile Page</h1>
			<h2>{panthas[0]?.user}</h2>
			<ShowCollabsButton />
			{/* <Button onClick={handleLogout}>Logout</Button> */}
		</>
	);
};

export default authenticatedRoute(Profile, {pathAfterFailure: '/'})

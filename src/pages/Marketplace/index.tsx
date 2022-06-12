import { Table } from '@mantine/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RequestCollabButton from '../../components/RequestCollabButton';
import authenticatedRoute from '../../components/AuthenticatedRoute'
import publicRoute from '../../components/PublicRoute'

const Projects = ({ elements }: { elements: any[] }) => {
	const rows = elements.map((element, index) => (
		<tr key={element.user} style={{ height: '100px' }}>
			<td>{element.user}</td>
            <td>{element.twitter_handle}</td>
			<td>{element.discord_server}</td>
			<td style={{ position: 'relative' }}>
				<div
					style={{
						backgroundImage: `url(${element.pfp})`,
						height: '90%',
						top: '5%',
						width: '50%',
						backgroundSize: '100% 100%',
						position: 'absolute',
					}}
				></div>
			</td>
			<td>{element.description}</td>
			<td><RequestCollabButton elements={[element.user]}/></td>
		</tr>
	));

	return (
		// <Table striped highlightOnHover>
		<Table >	
			<thead>
				<tr>
					<th>User</th>
					<th>Twitter Handle</th>
					<th>Discord</th>
					<th>PFP</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};

const Marketplace: NextPage = () => {
	
	
	const [panthas, setPanthas] = useState<any>([]);
	useEffect(() => {
		const fetchItems = async () => {
			const panthas = await (await fetch('http://127.0.0.1:8000/api/panthas/')).json();
			setPanthas(panthas);
		};

		fetchItems();
	}, []);
	const router = useRouter();

	return (
		<div >
			<h1>All Projects</h1>
			<Projects elements={[...panthas]}/>
            
		</div>
	);
};

export default publicRoute(Marketplace, {pathAfterFailure: '/'})

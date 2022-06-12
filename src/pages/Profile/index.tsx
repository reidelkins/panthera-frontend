import { Button } from '@mantine/core';
import ShowCollabsButton from '../../components/ShowCollabsButton';
import MyCollabsToDo from '../../components/MyCollabsToDo';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import authenticatedRoute from '../../components/AuthenticatedRoute'
import publicRoute from '../../components/PublicRoute'


const Profile: NextPage = () => {
	
	// const router = useRouter();

	// const handleLogout = () => {
	// 	auth.logout()
	// }

	return (
		<>
			<h1>Profile Page</h1>
			<ShowCollabsButton profile={"reid"}/> {/* TODO use the actual logged in username*/}
			<MyCollabsToDo />
			{/* <Button onClick={handleLogout}>Logout</Button> */}
		</>
	);
};

export default publicRoute(Profile, {pathAfterFailure: '/'})

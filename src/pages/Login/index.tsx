import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import styles from '../../styles/Home.module.css';
import LoginForm from '../../components/LoginForm';
import publicRoute from '../../components/PublicRoute'

const Login: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<LoginForm />

	);
};

// export default Login;
export default publicRoute(Login, {pathAfterFailure: '/'})

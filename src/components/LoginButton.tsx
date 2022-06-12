import { UnstyledButton, Image } from '@mantine/core';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

export function LoginButton() {
    const router = useRouter();

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            e.preventDefault();
            localStorage.setItem('visitedPanthera', 'true');
            router.push('/Login');
        };

    return (
        <UnstyledButton onClick={onClick}>
            <Image src="login_button.svg" alt="login" style={{ width: '200px', cursor: 'pointer', margin: '10px' }} />
        </UnstyledButton>
    )
}
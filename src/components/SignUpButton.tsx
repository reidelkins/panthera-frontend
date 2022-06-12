import { UnstyledButton, Image } from '@mantine/core';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

export function SignUpButton() {
    const router = useRouter();

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
            e.preventDefault();
            localStorage.setItem('visitedPanthera', 'true');
            router.push('/RequestAccess');
        };

    return (
        <UnstyledButton onClick={onClick}>
            <Image src="signup_button.svg" alt="signup" style={{ width: '200px', cursor: 'pointer', margin: '10px' }} />
        </UnstyledButton>
    )
}
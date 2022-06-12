import React, { FC } from 'react';
import {Group, Container, Image, Button, } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import { useAuth } from 'utils/Auth';

export const AppBar: FC = props => {
	const { autoConnect, setAutoConnect } = useAutoConnect();
	const router = useRouter();

	if (router.asPath === '/welcome') return null;
	const auth = useAuth()

  return (
    <div>

      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <Link href={'/'}>
          <a>
            <Image src="/hello_pantha_logo.svg" alt="Logo" style={{ float: 'left' }} height={70} />
          </a>
		</Link>
        {/* Nav Links */}
        <Container mr={20}>
				<div className="hidden md:inline md:navbar-center">
					<Group spacing={5} className="flex items-stretch">
						{ !auth.user ? (
							<>
								<Link href={'/Login'}>
									<a className="btn btn-ghost btn-sm rounded-btn">Login</a>
								</Link>
								<Link href={'/Request Access'}>
									<a className="btn btn-ghost btn-sm rounded-btn">Request Access</a>
								</Link>
							</>
							):
							(
							<>
								<Link href={'/Marketplace'}>
									<a className="btn btn-ghost btn-sm rounded-btn">WL Marketplace</a>
								</Link>
								<Link href={'/Profile'}>
									<a className="btn btn-ghost btn-sm rounded-btn">Profile</a>
								</Link>
								<Link href={'/'}>
									<Button onClick={()=>auth.logout()}>
										<a className="btn btn-ghost btn-sm rounded-btn">Sign Out</a>
									</Button>
									
								</Link>
							</>
						)}
						<Link href={'/'}>
							<Image src="/twitter.svg" alt="twitter" />
						</Link>
						<Link href={'/'}>
							<Image src="/discord.svg" alt="discord" />
						</Link>

					</Group>
					{/* <Group spacing={5} className="flex items-stretch">
						<Link href={'/Login'}>
							<a className="btn btn-ghost btn-sm rounded-btn">Login</a>
						</Link>
						<Link href={'/Request Access'}>
							<a className="btn btn-ghost btn-sm rounded-btn">Request Access</a>
						</Link>
						<Link href={'/Marketplace'}>
							<a className="btn btn-ghost btn-sm rounded-btn">WL Marketplace</a>
						</Link>
						<Link href={'/Profile'}>
							<a className="btn btn-ghost btn-sm rounded-btn">Profile</a>
						</Link>
						<Link href={'/'}>
							<a className="btn btn-ghost btn-sm rounded-btn">Sign Out</a>
						</Link>
						<Link href={'/'}>
							<Image src="/twitter.svg" alt="twitter" />
						</Link>
						<Link href={'/'}>
							<Image src="/discord.svg" alt="discord" />
						</Link>
					</Group> */}
				</div>
			</Container>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="dropdown">
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <WalletMultiButton className="btn btn-ghost mr-4" />
        </div>
      </div>
      {props.children}
    </div>
  );
};

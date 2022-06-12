import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="">
            <footer className="mx-auto  flex flex-row p-2 text-center items-center footer bg-neutral text-neutral-content">
                <div className="pl-2">
                </div>
                <div className="max-w-md mx-auto sm:pl-12 grid-flow-col gap-4 text-center">
                </div>
                <div className="grid-flow-col gap-4 text-center pr-2">
                    <div>
                        <p className="text-white text-base font-light cursor-default ">
                            Powered by
                        </p>
                        <a
                            rel="noreferrer"
                            href="https://solana.com/"
                            target="_blank"
                            className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
                        >
                            Hello Pantha
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

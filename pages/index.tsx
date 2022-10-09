import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className={"flex flex-col place-content-center place-items-center"}>
			<div className='font-[adelle] flex font-semibold text-[#f05033] text-3xl'>
				git
				<span className='font-[inter] text-4xl text-zinc-800 font-black'>
					CREATIVE
				</span>
			</div>
			<div className='w-full h-screen bg-zinc-800'>Projects</div>
		</div>
	);
};

export default Home;

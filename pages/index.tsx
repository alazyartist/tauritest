import type { NextPage } from "next";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
	const [name, setName] = useState("Enter name");
	const [response, setResponse] = useState(String);

	const submit = async () => {
		const res = (await invoke("test", { name: name })) as string;
		setResponse(res);
	};

	useEffect(() => {
		console.log(response);
	}, [response]);

	return (
		<div className={"flex flex-col place-content-center place-items-center"}>
			<div className='font-[adelle] flex font-semibold text-[#f05033] text-3xl'>
				git
				<span className='font-[inter] text-4xl text-zinc-800 font-black'>
					CREATIVE
				</span>
			</div>
			<div className='w-full place-items-center h-screen flex flex-col gap-2 bg-zinc-800 text-zinc-300'>
				<div className='place-self-start text-4xl font-black'>Projects</div>
				<div>
					<input
						type={"text"}
						onChange={(e) => setName(e.target.value)}
						value={name}
						className={"text-3xl p-2 rounded-xl text-zinc-800 bg-zinc-300"}
					/>
					<button onClick={() => submit()}>Submit</button>
					<div>{response}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

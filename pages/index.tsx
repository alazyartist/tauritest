import type { NextPage } from "next";
import { invoke } from "@tauri-apps/api/tauri";
// import { documentDir } from "@tauri-apps/api/path";
import { readDir, BaseDirectory, FileEntry } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import Gclogo from "./home/components/gclogo";
import { IoMdList } from "react-icons/io";
const Home: NextPage = () => {
	const [name, setName] = useState("");
	const [response, setResponse] = useState("");
	const [entries, setEntries] = useState([] as FileEntry[]);

	const submit = async () => {
		const res = (await invoke("test", { name: name })) as string;
		setResponse(res);
	};
	const getDocuments = async () => {
		try {
			// const selectedPath = await documentDir();
			const entries = (await readDir("", {
				dir: BaseDirectory.Document,
				recursive: false,
			})) as FileEntry[];
			// setResponse(selectedPath);
			setEntries(entries);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getDocuments();
	}, [entries]);

	return (
		<div
			className={
				"flex no-scrollbar w-screen h-screen flex-col place-content-center place-items-center"
			}>
			<Gclogo />

			<div className='w-full h-full flex gap-2 bg-zinc-800 text-zinc-300'>
				<div className='top-0 left-0 p-4 h-full bg-zinc-900 w-[20vw] min-w-[200px] text-4xl font-black'>
					<div className='flex gap-2 place-items-center'>
						Projects <IoMdList />
					</div>
				</div>
				<div className='p-4'>
					<input
						type={"text"}
						onChange={(e) => setName(e.target.value)}
						value={name}
						className={"text-xl p-2 rounded-xl text-zinc-800 bg-zinc-300"}
					/>
					<button
						className='bg-zinc-900 rounded-xl py-1 px-2'
						onClick={() => submit()}>
						Submit
					</button>
					<div>{response}</div>
					<div className=' h-[60vh] overflow-y-scroll no-scrollbar'>
						{entries?.map((en) => (
							<div>{en.name}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

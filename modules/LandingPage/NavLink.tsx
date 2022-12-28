import Link from "next/link";
import { Button } from "primereact";
import * as React from "react";

export interface INavLinksProps {}

export default function NavLinks(props: INavLinksProps) {
	return (
		<nav className="flex flex-wrap items-center mb-5 text-base gap-4">
			<Link href="/">
				<div className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</div>
			</Link>
			<Link href="/pricing">
				<div className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</div>
			</Link>
			{/* <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
				Features
			</a>
			<a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
				Blog
			</a> */}

			<Link href="#">
				<div className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
					Sign in
				</div>
			</Link>
			<Button label="Submit" aria-label="Submit"  />
			<Button label="Submit" aria-label="Submit"  />
		</nav>
	);
}

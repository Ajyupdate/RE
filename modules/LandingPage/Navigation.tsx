import * as React from "react";
import AppLogo from "./AppLogo";


import NavLinks from "./NavLink";

export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
	return (
		<section className="w-full px-8 text-gray-700 bg-white">
			<div className="container flex flex-col flex-wrap items-baseline justify-between py-5 mx-auto md:flex-row max-w-7xl">
				<div className="relative flex flex-col md:flex-row">
					<AppLogo />
				</div>
				<NavLinks />
				{/* <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
					
				</div> */}
			</div>
		</section>
	);
}

import Link from "next/link";
import * as React from "react";
import { APP_NAME, APP_HOME_PAGE } from "../../lib/constant";
import NoSsr from "../../components/NoSsr";

export interface IAppLogoProps {
	className?: string;
	color?: string;
	size?: string;
}

export default function AppLogo({ className, color, size }: IAppLogoProps) {
	return (
		<NoSsr>
			<Link href={APP_HOME_PAGE}>
				<div
					className={
						"mb-5 mx-auto font-medium flex items-start  md:mb-0 text-2xl " + color ||
						"text-gray-900" + " " + className ||
						""
					}
				>
					<span className={"font-black text-current leading-none select-none lowercase"}>
						{APP_NAME}
						<span className={color || "text-main-500"}>.</span>
					</span>
					<span className="bg-yellow-100 text-yellow-700 rounded-md p-1 text-xs ml-2">beta</span>
				</div>
			</Link>
		</NoSsr>
	);
}

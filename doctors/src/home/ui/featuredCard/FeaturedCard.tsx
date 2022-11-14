import * as React from "react";

export const FeaturedCard = () => {
	return (
		<div className="mx-5 mt-5">
			<img
				className="rounded-lg bg-cover"
				src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2950&q=80"
				alt=""
			/>
			<div className="flex flex-row justify-between items-start mt-4">
				<div>
					<p className="text-sm text-gray-800 font-bold">Brienno, Italy</p>
					<p className="text-sm text-gray-800">49 kilometers away</p>
					<p className="text-sm text-gray-800">Aug 18-25</p>
					<p className="text-sm text-gray-800 mt-2">
						{" "}
						<strong>$2,135</strong> night
					</p>
				</div>
				<div className="flex flex-row items-center">
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
					<p className="text-sm">4,92</p>
				</div>
			</div>
		</div>
	);
};

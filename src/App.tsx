import React, { useState } from 'react';
import logo from './logo.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="p-8 md:p-24 lg:container lg:mx-auto">
			<h1 className="text-4xl text-red-700 ">Post</h1>

			<div className="mt-24">
				<ol className="mt-24">
					<li className="mb-2">
						<a aria-label="" className="">
							<h3>时间 17:00 @koajs/body 与 @koajs/bodyparser 区别</h3>
						</a>
					</li>
					<li className="mb-2">
						<a aria-label="" className="">
							<h3>时间 17:00 @koajs/body 与 @koajs/bodyparser 区别</h3>
						</a>
					</li>
					<li className="mb-2">
						<a aria-label="" className="">
							<h3>时间 17:00 @koajs/body 与 @koajs/bodyparser 区别</h3>
						</a>
					</li>
					<li className="mb-2">
						<a aria-label="" className="">
							<h3>时间 17:00 @koajs/body 与 @koajs/bodyparser 区别</h3>
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default App;

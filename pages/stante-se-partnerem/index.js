import {
	ButtonLinkFilledBig,
	ButtonLinkOutlineBig,
	HeadingWrapper,
	MainH2,
} from "@components/atoms";
import { StaticSite } from "@components/templates";

export default function Partner() {
	return (
		<StaticSite>
			{/* "Staňte se naším partnerem" + CTA */}
			<section className="relative bg-white overflow-hidden">
				<div className="max-w-7xl lg:w-1/2">
					<div className="relative z-10 py-8 lg:bg-white sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32 ml-auto">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
							<div className="text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-white lg:text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block">Staňte se naším</span>
									<span className="block text-main-800">Partnerem</span>
								</h1>
								<p className="mt-3 text-base text-gray-200 lg:text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
									commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
								</p>
								<div className="mt-5 sm:mt-8 flex flex-wrap gap-3 justify-start">
									<ButtonLinkFilledBig>Staňte se partnerem</ButtonLinkFilledBig>
									<ButtonLinkOutlineBig>Naše síť</ButtonLinkOutlineBig>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 w-screen lg:right-0 lg:w-1/2">
					<img
						className="w-full h-full object-cover blur-sm lg:blur-0"
						src="https://source.unsplash.com/random/?partner"
						alt="Partner"
					/>
					<div
						className="lg:hidden absolute bg-black bg-opacity-60 inset-0"
						aria-hidden="true"
					></div>
				</div>
			</section>
			{/* Centered 2x2 grid "Co vám přinese partnerství" */}

			<div className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-main-600 font-semibold tracking-wide uppercase">
							Benefity
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Co vám přinese partnerství
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/globe-alt --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Možnost přístupu do administrátorské konzole
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/scale --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Propojení s vaším firemním účtem
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/lightning-bolt --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Vytváření události
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-main-500 text-white">
										{/* <!-- Heroicon name: outline/annotation --> */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										Možnost zasílat notifikací vašim zákazníkům
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
									perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			{/* "Co znamená být naším partnerem" */}
			<section className="relative">
				<div className="flex flex-col mx-auto lg:flex-row">
					<div className="relative px-4 mx-auto py-12 lg:py-16 lg:max-w-7xl lg:pl-6 lg:mr-auto">
						<div className="text-base max-w-prose mx-auto lg:max-w-lg lg:mr-0">
							<HeadingWrapper>
								<MainH2> Our Process</MainH2>
							</HeadingWrapper>
							<div className="mt-5 prose prose-red text-gray-500">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, excepturi tempore
									repudiandae nihil ipsam officiis dolor deleniti ex maiores dicta commodi magni
									sapiente vel id ipsum suscipit fugit, ea ducimus.
								</p>
								<h3>Some header</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla autem
									porro quod aliquam itaque a dolore delectus praesentium maxime!
								</p>
								<ul>
									<li>Lorem ipsum dolor sit.</li> <li>Lorem ipsum dolor sit.</li>
									<li>Lorem ipsum dolor sit.</li>
								</ul>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, libero.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 lg:h-auto flex items-center justify-center">
						<img
							className="h-56 w-full object-cover lg:h-full shadow-md"
							src="https://source.unsplash.com/random/?garden"
							alt=""
							loading="lazy"
						/>
					</div>
				</div>
			</section>
			{/* "Jednoduchá administrátorská konzole" */}

			<div className="bg-white">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="bg-main-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
						<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
							<div className="lg:self-center">
								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									<span className="block">Jednoduchá Administrátorská konzole.</span>
								</h2>
								<p className="mt-4 text-lg leading-6 text-main-200">
									Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
									adipiscing sagittis vel nulla nec.
								</p>
								<a
									href="#"
									className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-main-600 hover:bg-main-50"
								>
									Live demo
								</a>
							</div>
						</div>
						<div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
							<img
								className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
								src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
								alt="App screenshot"
							/>
						</div>
					</div>
				</div>
			</div>
		</StaticSite>
	);
}
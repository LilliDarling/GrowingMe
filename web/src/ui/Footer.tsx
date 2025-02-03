import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="navbar flex-col bg-base-100">
		<div className="w-full flex justify-center">
			<div className="">
				<Image src="/public/leaf.png" alt="leaf" width={8} height={8} />
			</div>
			<div>
				<p>Growing Me</p>
			</div>
		</div>

		<div className="flex p-0  m-0 w-full border-1 border-[#186733]" />

		<div className="w-full flex justify-evenly items-center">
			<ul className="menu menu-horizontal list-none">
				<li>
					<Link href="/" className="text-xl">
						Home
					</Link>
				</li>
				<li>
					<Link href="/about" className="text-xl">
						About
					</Link>
				</li>
				<li>
					<Link href="/articles" className="text-xl">
						Articles
					</Link>
				</li>
				<li>
					<Link href="/gallery" className="text-xl">
						Gallery
					</Link>
				</li>
			</ul>
		</div>
		
		<form className="w-full flex justify-center">
			<fieldset className="form-control flex w-80">
				<div className="join">
					<input
					type="text"
					placeholder="Enter email..."
					className="input input-bordered join-item" />
					<button className="btn btn-primary join-item">Subscribe</button>
				</div>
				<Image src="/public/leaf.png" alt="leaf" width={8} height={8} />
			</fieldset>
		</form>

		<div className="flex w-full justify-center">
			<ul className="menu menu-horizontal px-1 list-none">
				<li>
					<a href="#" className="w-8 h-8">
						<Icon icon="fa6-brands:square-bluesky" />
					</a>
				</li>
				<li>
					<a href="#" className="w-8 h-8">
						<Icon icon="fa6-brands:tiktok" />
					</a>
				</li>
				<li>
					<a href="#" className="w-8 h-8">
						<Icon icon="fa6-brands:discord" />
					</a>
				</li>
			</ul>
		</div>
		<p className="flex w-full justify-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
	</footer>
  )
}
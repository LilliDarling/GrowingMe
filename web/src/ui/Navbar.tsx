"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image';


export default function Navbar() {
  const pathname = usePathname();

  return (
	<nav className="navbar bg-base-100 flex-col">
		<div className="w-full flex justify-between items-center py-4">
			<div className="flex-1">
				{/* insert image for logo here */}
				<a className="btn btn-ghost text-xl">Growing Me</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 list-none">
					<li>
						<a href="#" className="w-8 h-8">
							<Icon icon="fa6-brands:square-bluesky" className="w-full h-full" />
						</a>
					</li>
					<li>
						<a href="#" className="w-8 h-8">
							<Icon icon="fa6-brands:tiktok" className="w-full h-full" />
						</a>
					</li>
					<li>
						<a href="#" className="w-8 h-8">
							<Icon icon="fa6-brands:discord" className="w-full h-full" />
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div className="w-full border-1 border-[#186733]" />

		<div className="w-full flex justify-between items-center py-4">
			<ul className="menu menu-horizontal px-1 list-none">
				{[
					{ href: "/", text: "Home" },
					{ href: "/about", text: "About" },
					{ href: "/articles", text: "Articles" },
					{ href: "/gallery", text: "Gallery" },
					{ href: "/contact", text: "Contact" }
				].map((link, index) => (
					<li>
						<Link 
						key={link.href} 
						href={link.href} 
						className="text-xl mr-8 last:mr-0"
						>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</nav>
  )
}

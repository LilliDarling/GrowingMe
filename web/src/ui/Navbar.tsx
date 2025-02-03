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
		</div>

		<div className="w-full border-1 border-[#186733]" />

		<div className="w-full flex justify-between items-center py-4">
			<ul className="menu menu-horizontal px-1 list-none">
				<li>
					<Link href="/" className="text-xl pr-8">
						Home
					</Link>
				</li>
				<li>
					<Link href="/about" className="text-xl px-8">
						About
					</Link>
				</li>
				<li>
					<Link href="/articles" className="text-xl px-8">
						Articles
					</Link>
				</li>
				<li>
					<Link href="/gallery" className="text-xl px-8">
						Gallery
					</Link>
				</li>
			</ul>
		</div>
	</nav>
  )
}

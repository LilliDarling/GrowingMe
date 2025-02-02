"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image';


export default function Navbar() {
  const pathname = usePathname();

  return (
	<div className="navbar bg-base-100">
		<div className="flex-1">
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
    // <nav className="w-full bg-white">
    //   <div className="max-w-7xl mx-auto px-4">
    //     {/* Top section with logo and social icons */}
    //     <div className="flex items-center justify-between py-4">
    //       {/* Logo section */}
    //       <div className="items-center gap-4">

    //         {/* Brand name */}
    //         <h2 className="text-4xl font-bold text-black font-['Raleway']">
    //           Growing Me
    //         </h2>
    //       </div>

    //       {/* Social icons */}
    //       <div className="flex items-center gap-6">
    //         <a href="#" className="w-8 h-8">
    //           <Icon icon="fa6-brands:square-bluesky" className="w-full h-full" />
    //         </a>
    //         <a href="#" className="w-8 h-8">
    //           <Icon icon="fa6-brands:tiktok" className="w-full h-full" />
    //         </a>
    //         <a href="#" className="w-8 h-8">
    //           <Icon icon="fa6-brands:discord" className="w-full h-full" />
    //         </a>
    //       </div>
    //     </div>

    //     {/* Divider */}
    //     <div className="w-full border-2 border-[#186733]" />

    //     {/* Bottom section with navigation and search */}
    //     <div className="flex items-center justify-between py-2">
    //       {/* Navigation links */}
    //       <div className="flex gap-8">
    //         <Link href="/" className="text-xl text-black font-['Raleway']">
    //           Home
    //         </Link>
    //         <Link href="/about" className="text-xl text-black font-['Raleway']">
    //           About
    //         </Link>
    //         <Link href="/articles" className="text-xl text-black font-['Raleway']">
    //           Articles
    //         </Link>
    //         <Link href="/gallery" className="text-xl text-black font-['Raleway']">
    //           Gallery
    //         </Link>
    //         <Link href="/contact" className="text-xl text-black font-['Raleway']">
    //           Contact
    //         </Link>
    //       </div>

    //       {/* Search box
    //       <div className="flex items-center gap-2 px-4 py-1 border border-[#2055ad] rounded-[20px]">
    //         <Search className="w-4 h-4 text-[#909090]" />
    //         <span className="text-base text-[#909090] font-['Raleway']">Search</span>
    //       </div> */}
    //     </div>
    //   </div>
    // </nav>
  );
}

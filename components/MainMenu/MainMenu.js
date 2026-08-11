"use client"
import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHamburger, FaHouseUser } from 'react-icons/fa';

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  console.log("MENU: ", items);

  const handleMenuClick = () => {
    setMobileNavExpanded((prev) => !prev);
  }

  return <div className="bg-slate-800 sticky top-0 z-20 px-5 text-white">
    <div className="flex items-center justify-between h-[64px]">
      <div className="flex items-center py-4 pl-5 text-pink-600">
        <FaHouseUser size={30} />
        <span className="sr-only">Hot Dang Homes</span>
      </div>

      <nav className="hidden md:flex flex-1 justify-end items-center gap-2">
        {(items || []).map(item => (
          <div key={item.id} className='hover:bg-slate-500 relative group'>
            <Link href={item.destination} className="p-5 block">{item.label}</Link>
            {!!item.subMenuItems?.length && (
              <div className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                {item.subMenuItems.map(subItem => (
                    <Link key={subItem.id} href={subItem.destination} className='hover:bg-slate-500 p-5 block whitespace-nowrap' >
                      {subItem.label}
                    </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className='ml-3'>
          <ButtonLink 
            destination={callToActionDestination} 
            label={callToActionLabel} 
          />
        </div>
      </nav>

      <button
        type="button"
        onClick={handleMenuClick}
        aria-expanded={mobileNavExpanded}
        className="md:hidden p-2"
      >
        <FaBars size={30} />
      </button>
    </div>

    <nav className={`${mobileNavExpanded ? 'flex' : 'hidden'} flex-col md:hidden w-full`}>
      {(items || []).map(item => (
        <div key={item.id} className='w-full border-b border-slate-600'>
          <Link href={item.destination} className="p-4 block w-full">{item.label}</Link>
          {!!item.subMenuItems?.length && (
            <div className='bg-slate-600'>
              {item.subMenuItems.map(subItem => (
                <Link key={subItem.id} href={subItem.destination} className='hover:bg-slate-500 p-4 block whitespace-nowrap'>
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className='p-4'>
        <ButtonLink 
          destination={callToActionDestination} 
          label={callToActionLabel} 
        />
      </div>
    </nav>
  </div>
}
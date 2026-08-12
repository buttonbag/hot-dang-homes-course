"use client"
import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHamburger, FaHouseUser, FaPlus } from 'react-icons/fa';

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  console.log("MENU: ", items);

  const handleMenuClick = () => {
    setMobileNavExpanded((prev) => !prev);
  }

  return <><div className="bg-slate-800 sticky top-0 z-50 px-5 text-white">
    <div className="flex items-center justify-between h-[64px]">
      <div className="flex items-center py-4 pl-5 text-sky-500">
        <Link href={"/"}>
          <FaHouseUser size={30} />
          <span className="sr-only">Hot Dang Homes</span>
        </Link>
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
        className="md:hidden py-4 z-20"
      >
        <div>{!mobileNavExpanded ? <FaBars size={30} /> : <FaPlus size={30} className='rotate-45' />}</div>
      </button>
    </div>

    <nav className={`${mobileNavExpanded ? 'max-h-[500px]' : 'max-h-0'} absolute left-0 top-full z-30 bg-slate-800 overflow-hidden flex flex-col md:hidden w-full duration-300 ease-in-out `}>
      {(items || []).map(item => (
        <div key={item.id} className='w-full border-b border-slate-600'>
          <Link href={item.destination} onClick={handleMenuClick} className="p-4 block w-full">{item.label}</Link>
          {!!item.subMenuItems?.length && (
            <div>
              {item.subMenuItems.map(subItem => (
                <Link key={subItem.id} href={subItem.destination} onClick={handleMenuClick} className='hover:bg-slate-500 p-4 block whitespace-nowrap'>
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className='p-4' onClick={handleMenuClick}>
        <ButtonLink 
          destination={callToActionDestination} 
          label={callToActionLabel} 
        />
      </div>
    </nav>
  </div>
  <div id='menu-id-overlay' className={`
          fixed inset-0 bg-black/80 transition-opacity duration-300 md:hidden z-20
          ${mobileNavExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `} onClick={handleMenuClick}/>
  </>
}
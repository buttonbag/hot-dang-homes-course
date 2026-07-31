
import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import { FaHouseUser } from 'react-icons/fa';

export const MainMenu = ({ items, callToActionLabel, callToActionDestination }) => {
  console.log("MENU: ", items);

  return <div className="bg-slate-800 sticky top-0 z-20 h-[64px] px-5 text-white flex">
    <div className="py-4 pl-5 flex text-pink-600">
      <div className='flex'>
        <FaHouseUser size={30} />
        Hot Dang Homes
      </div>
    </div>
    <nav className='flex flex-1 justify-end'>
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
      <div className='ml-3 my-auto'>
        <ButtonLink 
          destination={callToActionDestination} 
          label={callToActionLabel} 
        />
      </div>
    </nav>
  </div>
}
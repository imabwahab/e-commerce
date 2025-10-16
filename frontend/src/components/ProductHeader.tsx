import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { aToZ, zToA, highestPrice, lowestPrice } from '../redux/appSlice';

interface PoductHeaderProps {
  header: string,
  title: string | undefined
}

const ProductHeader: React.FC<PoductHeaderProps> = ({ header, title }) => {
  const dispatch = useDispatch();

  const [sortPopup, setSortPopup] = useState(false);
  const sortData = [
    {
      name: 'a-z', func: () => {
        setSortPopup(false);
        dispatch(aToZ());
      }
    },
    {
      name: 'z-a', func: () => {
        setSortPopup(false);
        dispatch(zToA());
      }
    },
    {
      name: 'lowestPrice', func: () => {
        setSortPopup(false);
        dispatch(lowestPrice());
      }
    }, {
      name: 'highestPrice', func: () => {
        setSortPopup(false);
        dispatch(highestPrice());
      }
    }
  ]
  return (
    <>
      {/* Section Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-4 h-10 bg-red-500 rounded'></span>
          <p className='text-red-500 font-semibold text-base'>{header}</p>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          {title}
        </h2>
        <div className='flex flex-row gap-3'>
          <div className='relative '>
            <button
              onClick={() => setSortPopup(true)}
              className='py-2 px-3 rounded text-white cursor-pointer bg-red-500'>Sort</button>

            <ul className={`${sortPopup ? "block" : 'hidden'} absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40`}>
              {sortData.map((dat, i) => (
                <li
                  key={i}
                  onClick={dat.func}
                  className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'
                >
                  {dat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHeader
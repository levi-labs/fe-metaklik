'use client';

import React from 'react';
import TableLinks from './_components/TableLInks';

import { dummyLinks } from './_components/Dummy';
import Paginate from './_components/Paginate';
import Link from 'next/link';

export default function LinkPage() {
  return (
    <div className='min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min p-4'>
      <h2 className='text-2xl font-bold'>Links Page</h2>
      <p>This is the links page.</p>
      <div className='flex flex-row justify-between align-middle items-center'>
        <div className='flex-col items-center'>
          <Link
            href='/dashboard/links/create'
            className='bg-blue-950 hover:bg-blue-800 hover:font-bold text-white py-2 px-4 rounded-md mt-4'
          >
            Create
            {/* <PlusCircleIcon className='' /> Create */}
          </Link>
        </div>
        <div className='flex-col items-center'>
          <input
            type='text'
            placeholder='Search'
            className='border border-gray-300 rounded-md px-4 py-2'
          />
        </div>
      </div>
      <div className='flex flex-row mt-2 pt-2'>
        <div className='w-full flex flex-col items-center'>
          <TableLinks links={dummyLinks} />
          <div className='self-end'>
            <Paginate />
          </div>
        </div>
      </div>
    </div>
  );
}

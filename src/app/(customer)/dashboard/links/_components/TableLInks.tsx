'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export type LinksType = {
  id: string;
  short_code: string;
  original_url: string;
  is_active: boolean;
  custom_domain: string | null;
  generate_url: string;
};

interface TableLinksProps {
  links: LinksType[];
}
export default function TableLinks({ links }: TableLinksProps) {
  const [link, setLinks] = useState<LinksType[]>(links);

  const handleToggleActive = (id: string, newValue: boolean) => {
    console.log(id);

    setLinks((prev) => {
      console.log('prev', prev);
      const updatedLinks = prev.map((link) =>
        link.id === id ? { ...link, is_active: newValue } : link
      );
      console.log('updatedLinks', updatedLinks);
      return updatedLinks;
    });
  };

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className='bg-blue-950'>
          <TableRow>
            <TableHead className='w-[100px] text-white font-bold'>#</TableHead>
            <TableHead className='text-white font-bold'>ID</TableHead>
            <TableHead className='text-white font-bold'>Domain</TableHead>
            <TableHead className='text-white font-bold'>Share Link</TableHead>
            <TableHead className='text-white font-bold'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {link.map((link, index) => (
            <TableRow key={link.id}>
              <TableCell className='font-medium'>{index + 1}</TableCell>
              <TableCell className='font-medium'>{link.id}</TableCell>
              <TableCell>{link.custom_domain || 'None'}</TableCell>
              <TableCell className='font-medium'>{link.generate_url}</TableCell>
              <TableCell>
                <Switch
                  id={`is-active-${link.id}`}
                  // name='is-active'
                  checked={link.is_active}
                  onCheckedChange={(checked) => {
                    handleToggleActive(link.id, checked === true);
                  }}
                />
                <Label htmlFor={`is-active-${link.id}`}>
                  {link.is_active ? 'Active' : 'Inactive'}
                </Label>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

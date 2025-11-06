'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function DetailPage() {
  const { id } = useParams();
  return <div>DetailPage with id: {id}</div>;
}

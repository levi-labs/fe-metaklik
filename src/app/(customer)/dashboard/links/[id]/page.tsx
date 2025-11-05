import { useParams } from 'next/navigation';

export default function DetailPage() {
  const id = useParams().id;
  // Example id, replace with actual logic to get id
  return <div>DetailPage with id: {id}</div>;
}

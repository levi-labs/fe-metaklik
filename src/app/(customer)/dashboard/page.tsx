import { ChartActivity } from './_components/ChartActivity';

export default function DashboardPage() {
  return (
    <>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='aspect-video rounded-xl bg-muted/50' />
        <div className='aspect-video rounded-xl bg-muted/50' />
        <div className='aspect-video rounded-xl bg-muted/50' />
      </div>
      <div className='w-full min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min overflow-hidden'>
        <div className='w-full flex-col md:flex-row overflow-hidden'>
          <div className='w-full flex-1 bg-red-400 overflow-hidden'>
            <ChartActivity />
          </div>
          <div className='w-full h-full flex flex-col bg-green-400'></div>
        </div>
        <div className='w-full h-full flex flex-row bg-blue-400'></div>
      </div>
    </>
  );
}

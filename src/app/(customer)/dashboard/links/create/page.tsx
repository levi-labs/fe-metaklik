'use client';
import React from 'react';
import { IconCheck, IconInfoCircle, IconPlus } from '@tabler/icons-react';
import {
  AlertCircleIcon,
  ArrowUpIcon,
  CheckCircle2Icon,
  InfoIcon,
  MailIcon,
  Search,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
export default function CreatePage() {
  const [currentLength, setCurrentLength] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [checkURL, setCheckURL] = React.useState(false);
  const [ogData, setOgData] = React.useState<{
    item_id: number;
    shop_id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    price: number;
    currency: string;
    stock: number;
    sold: number;
    site_domain?: string;
    site_name?: string;
  } | null>(null);

  const handleCheckURL = () => {
    setCheckURL(false);
    setLoading(true);
    // Simulate URL checking logic
    setTimeout(() => {
      setCheckURL(true);
      setLoading(false);
      setOgData({
        item_id: 23022109422,
        shop_id: 218101998,
        title: 'Converse All Star Classic High Grey White BNIB 100% Authentic',
        description:
          'Converse All Star Classic High Grey White – BNIB, 100% Authentic, ukuran tersedia.',
        image: 'https://cf.shopee.co.id/file/abc12345xyz', // contoh
        url: 'https://shopee.co.id/Converse-All-Star-Classic-High-Grey-White-BNIB-100-Authentic-i.218101998.23022109422',
        price: 499000, // asumsi dalam Rupiah
        currency: 'IDR',
        stock: 50, // asumsi
        sold: 120, // asumsi
        site_domain: 'shopee.co.id',
        site_name: 'Shopee Indonesia',
      });
    }, 1000);
  };
  const handleCharacterLimit = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const maxLength = 120;

    const currentLength = event.target.value.length;
    if (currentLength >= maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }

    setCurrentLength(currentLength);
  };
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <h2 className='text-2xl font-bold'>Create Link</h2>
          <p>This is the create link page.</p>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <div className='grid w-full max-w-2xl gap-6'>
          <InputGroup>
            <InputGroupInput placeholder='Enter URL...' />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            {loading && (
              <InputGroupAddon align='inline-end'>
                <IconPlus className='animate-spin' />
              </InputGroupAddon>
            )}
            {checkURL && (
              <InputGroupAddon align='inline-end'>
                <IconCheck className='text-green-500!' />
              </InputGroupAddon>
            )}
            <InputGroupAddon align='inline-end'>
              <InputGroupButton
                type='button'
                variant='secondary'
                onClick={handleCheckURL}
                disabled={loading}
              >
                Search
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <Separator />
          {checkURL && (
            <Alert
              variant='default'
              className='mb-4 border-green-500! bg-[repeating-linear-gradient(135deg,#e5e7eb_0,#e5e7eb_1px,transparent_1px,transparent_8px)] shadow-xl'
            >
              <AlertTitle className='text-green-500!'>
                <CheckCircle2Icon className='text-green-500! inline-block' />{' '}
                Success! Your url have been checked.
              </AlertTitle>
              <AlertDescription>
                <p>Please check your field below.</p>
                <ul className='list-inside list-disc text-sm'>
                  <li>{ogData?.title}</li>
                  <li>{ogData?.item_id}</li>
                  <li>{ogData?.shop_id}</li>
                  <li>{ogData?.url}</li>
                  <li>{ogData?.price}</li>
                  <li>{ogData?.currency}</li>
                  <li>{ogData?.description}</li>
                  <li>{ogData?.site_name}</li>
                  <li>{ogData?.site_domain}</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}
          <Separator className='animate-pulse ' />
          <h2 className='text-slate-900 font-semibold align-middle'>
            <InfoIcon className='w-6! h-6! me-1.5 inline-block' /> Check and
            Adjust Your Best Details
          </h2>
          <InputGroup className='mb-0!'>
            <InputGroupInput
              id='title'
              type='text'
              placeholder='Enter your title'
            />
            <InputGroupAddon align='inline-end'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton className='rounded-full' size='icon-xs'>
                    <IconInfoCircle />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder='example.com' className='pl-11' />
            <InputGroupAddon>
              <Label htmlFor='domain' className='text-foreground me-2'>
                Domain
              </Label>
              <InputGroupText id='domain'>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align='inline-end'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton className='rounded-full' size='icon-xs'>
                    <IconInfoCircle />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupTextarea
              placeholder='Enter your message'
              onChange={(e) => handleCharacterLimit(e)}
              maxLength={120}
            />
            <InputGroupAddon align='block-end'>
              <InputGroupText
                className={
                  currentLength > 110
                    ? 'text-red-500 text-xs'
                    : 'text-muted-foreground text-xs'
                }
              >
                {currentLength}/{120 - currentLength} characters left
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </>
  );
}

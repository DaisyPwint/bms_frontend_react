<<<<<<< HEAD
import React from 'react';
import { cn } from '../../lib/utils';
import { Skeleton } from './Skeleton';
=======
import { cn } from '../../lib/utils.ts';
import { Skeleton } from './skeleton';
>>>>>>> upstream/main

export default function ListSkeleton({ className }: { className: string }) {
  return (
    <div className={cn('w-full flex flex-col gap-8 h-[90vh]', className)}>
      <Skeleton className={'w-2/5 h-10 '} />
      <Skeleton className={'w-full h-2/3  rounded-xl'} />
      <Skeleton className={'w-2/5 h-10 self-end'} />
    </div>
  );
}

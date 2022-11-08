import * as React from 'react';

import { useState } from 'react';
import { Button } from 'primereact/button';

export interface ITopContactTabProps {
}

export default function TopContactTab (props: ITopContactTabProps) {
  return (
    <div>

      <div className="grid grid-cols-4 gap-4 pt-4">
        <div className='grid gap-1'>
          <Button icon="pi pi-check" className="p-button-rounded p-button-outlined  hover:bg-red-500" aria-label="Submit" />
          <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
          <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
          <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
        </div>
        
        
      </div>


        
    </div>
  );
}

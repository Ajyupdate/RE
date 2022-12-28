import * as React from 'react';

import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';

import backgroundImage from 'public/REBackground.jpg'
import { Button } from 'primereact/button';
import Link from 'next/link';
import Navigation from './LandingPage/Navigation';

export interface ITopContactTabProps {
}

export default function TopContactTab (props: ITopContactTabProps) {

  const [selectedCity1, setSelectedCity1] = useState<any>(null);

  const cities = [
    { name: 'Eng' },
    
  ];

  const onCityChange = (e: { value: any}) => {
    setSelectedCity1(e.value);
  }
  return (
    

      <div
        className=" "
        style={{
          backgroundImage: "url('/REBackground.jpg')",
          // backgroundSize: "cover",
          // backgroundClip: "padding-box",
          backgroundRepeat: "repeat",
          // backgroundPosition: "center",
        }}
      >
        123
        {/* <Navigation/> */}
        
        {/* <div>
          <div className="flex justify-content-around pt-4  ">
            <div className='grid gap-3'>
              <Button icon="pi pi-facebook" className="p-button-rounded p-button-outlined  hover:bg-red-500" aria-label="Submit" />
              <Button icon="pi pi-twitter" className="p-button-rounded p-button-secondary hover:bg-red-500 p-button-outlined" aria-label="Bookmark" />
              <Button icon="pi pi-instagram" className="p-button-rounded p-button-success hover:bg-red-500 p-button-outlined" aria-label="Search" />
              <Button icon="pi pi-envelope" className="p-button-rounded p-button-info hover:bg-red-500 p-button-outlined" aria-label="User" />
            </div>`
              
            <div className='grid gap-2'>
              
              <p><i className="pi pi-map-marker text-red-500"></i></p>
              <p>Allen Avenue, Ikeja 10012, <br/> Lagos State</p>
              
            </div>  

            <div className='grid gap-2'>
              <p><i className="pi pi-clock text-red-500"></i></p>
              <p>Mon - Sat 08:00 am - 5.00 pm, <br/> Sunday 12.00 noon <br/> Lagos State</p>
            </div>

            <div>
              <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="LANG" />
              <p>
                <Link href="/">Sign in</Link>/
                <Link href="/">Sign up</Link>
              </p>
            </div>
          </div>  

          <Navigation/>
        </div> */}
        
      

        
    </div>
  );
}

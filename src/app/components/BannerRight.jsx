import Image from 'next/image';
import React from 'react';

const BannerRight = () => {
    return (
        <div className="flex gap-0.5 flex-col ">
          <Image className="lg:min-w-[438px] lg:max-h-[200px] object-cover" src="/Images/5614025_2954478.jpg" alt="imgae1" height={200} width={220}></Image>


             <Image className="lg:min-w-[438px] lg:max-h-[200px] object-cover" src="/Images/1275.jpg" alt="imgae1" height={200} width={200}></Image>
        </div>
    );
};

export default BannerRight;
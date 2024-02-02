import React from 'react';
import PCard from './PCard';
import QCard from './QCard';

const ProfileMid = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-6 py-12 px-10">
        <div className='mx-auto'>
          <PCard></PCard>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <QCard></QCard>
        </div>
      </div>
    );
};

export default ProfileMid;
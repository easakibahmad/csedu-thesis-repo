import React from 'react';
import PCard from './PCard';
import QCard from './QCard';

const ProfileMid = () => {
    return (
        <div className='grid grid-cols-4 items-center py-12 px-10'>
            <div><PCard></PCard></div>
            <div className='col-span-3'><QCard></QCard></div>
            <div></div>
        </div>
    );
};

export default ProfileMid;
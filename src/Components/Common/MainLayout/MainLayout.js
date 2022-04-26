import React from "react";
import './MainLayout.css';

export function MainLayout(props) {
    const {firstSlot, secondSlot} = props;

    return(
        <section className='MainLayout'>
            <div className='MainLayout_firstSlot'>
                {firstSlot}
            </div>
           <div className='MainLayout_secondSlot'>
               {secondSlot}
           </div>

        </section>
    );
}
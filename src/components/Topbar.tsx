import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './topbar.css';
import Link from 'next/link';

Topbar.propTypes = {
    
};

function Topbar() {
    return (
        <div>
            <div className="topbar bg-slate-800 text-center text-white font-medium text-sm">
                <div className="w-full flex items-center justify-between p-4 pl-8 pr-8">
                    <div className="topbar-left">
                        <ul className='flex'>
                            <li className='flex-1'>
                                <Link href={'/'}>
                                <FontAwesomeIcon icon={faPhone} />
                                    +84 (867 543 248)</Link>
                            </li>
                            <li className='flex-1 ml-2'>
                                <a href="">Tmqzuang24@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="topbar-right">
                        <ul className='flex'>
                            <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href=""></a><FontAwesomeIcon icon={faTwitter} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
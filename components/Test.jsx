'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


const TestComponent = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div>
            <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full toggler"
                alt="profile"
                onClick={() => {
                    console.log('Image Clicked');
                    setToggleDropdown((prev) => !prev);
                }}
            />

            {toggleDropdown && (
                <div className="dropdown">
                <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                >
                    My Profile
                </Link>
            </div>
            )}
        </div>
    );
};

export default TestComponent;
import React from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { CiGrid2H } from "react-icons/ci";

const Sortedicons = () => {
    return (
        <div>
            <div className='flex w-full justify-between items-center mt-6'>
            <div className='flex items-center gap-4'>
                <div><PiSquaresFour className='bg-black text-white rounded p-0.5' size={24} /></div>
                <div><CiGrid2H className='bg-black text-white rounded p-0.5'  size={24}/></div>
                <div>
                    <select className='border outline-none rounded p-1.5' defaultValue="">
                        <option value="" disabled>Headphones Type</option>
                        <option value="featured">Featured</option>
                        <option value="in-ear">In-ear headphone</option>
                        <option value="on-ear">On-ear headphone</option>
                        <option value="over-ear">Over-ear headphone</option>
                    </select>

                </div>
                <div>
                    <select className='border outline-none rounded p-1.5' defaultValue="">
                        <option value="" disabled>Company</option>
                        <option value="featured">JBL</option>
                        <option value="in-ear">Sony</option>
                        <option value="on-ear">Boat</option>
                        <option value="over-ear">Zebronics</option>
                    </select>

                </div>
                <div>
                    <select className='border outline-none rounded p-1.5' defaultValue="">
                        <option value="" disabled>Colour</option>
                        <option value="featured">Blue</option>
                        <option value="in-ear">Black</option>
                        <option value="on-ear">White</option>
                        <option value="over-ear">Brown</option>
                    </select>

                </div>
                <div>
                    <select className='border outline-none rounded p-1.5' defaultValue="">
                        <option value="" disabled>Price</option>
                        <option value="featured">0 - ₹1,000</option>
                        <option value="in-ear">₹1,000 - ₹10,000</option>
                        <option value="on-ear">₹10,000 - ₹20,000</option>

                    </select>
                </div>
            </div>
            <div>
                <select className='border outline-none rounded p-1.5' defaultValue="">
                    <option value="" disabled>Sort by: Featured</option>
                    <option value="featured">Price : Lowest</option>
                    <option value="in-ear">Price : Highest</option>
                    <option value="on-ear">Name: (A-Z)</option>

                </select>
            </div>
            </div>
        </div>
    )
}

export default Sortedicons
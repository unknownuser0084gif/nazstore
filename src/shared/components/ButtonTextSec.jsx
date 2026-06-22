import React from 'react'

export default function ButtonTextSec({ text, className }) {
       return (
              <button
                     className={`bg-box_primary text-white cursor-pointer ${className}`}
              >
                     {text}
              </button>
       )
}

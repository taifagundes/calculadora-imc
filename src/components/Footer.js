import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-accent text-secondary'>
      <section className='container mx-auto py-8'>

        {/* copyright */}
        <div className='container mx-auto flex justify-center mt-4'>
          <div className='border-b-2 border-b-rose-400 w-full'></div>
        </div>
        {/* copyright */}
        <div className="container mx-auto text-left p-4">
          Copyright © 2023 Fagundes Dev
        </div>
      </section>
    </footer>
  )
}

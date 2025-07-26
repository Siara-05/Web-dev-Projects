


import React from 'react'

// Form component receives the toggle function and current theme as props

const Form = ({ onToggleTheme }) => {

  return (
  
  <div className='justify-center py-20 text-center px-15'>
  
  {/* Heading - style changes based on theme */}
      <h1 className='justify-center px-10 py-4 text-2xl font-bold'>  
         Theme Changer by React.js and Tailwind.css
      </h1>

{/* Paragraph - style changes based on theme */}
      <p className='px-5 py-2 mx-10 text-lg font-normal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur reprehenderit modi aperiam inventore libero repudiandae animi facere veniam sint deserunt accusantium totam explicabo, exercitationem esse dicta et quasi repellendus porro minus iure voluptates, quam molestiae culpa! Eligendi, quos natus. Fugit, illo?
      </p>

{/* Button - style changes based on theme */}
      <div className='flex justify-center mt-6'>
  
        <button 
          className='w-32 p-2 text-white transition rounded shadow bg-blue-950 hover:bg-black '
          onClick={onToggleTheme} >
          Change theme
       
        </button>
     
      </div>
   
    </div>
  )
}

export default Form

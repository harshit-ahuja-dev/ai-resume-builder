import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='mt-2 text-slate-700'>
      <h1 className="text-3xl font-semibold text-center mx-auto">
        {title}
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        {description}
      </p>
    </div>
  )
}

export default Title

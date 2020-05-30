import React from 'react'

function Error({ type, message, show = false }) {
  const isError = type === 'error';

  return (
    <>
      {show &&
        <div role="alert"
          className={`p-2 ${isError ? 'bg-red-600' : 'bg-green-700'} items-center ${isError ? 'text-red-100' : 'text-green-100'} leading-none
           lg:rounded-full flex lg:inline-flex self-center mx-auto`} >
          <span className={`flex rounded-full ${isError ? 'bg-red-500' : 'bg-green-500'} uppercase px-2 py-1 text-xs font-bold mr-3`}>
            {isError ? 'Error' : 'Success'}
          </span>
          <span className="mr-2 text-left flex-auto text-gray-200">{message}</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      }
    </>
  )
}

export default Error

// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page

import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">🚧 Work in Progress 🚧</h1>
        <p className="text-lg text-gray-600 mb-6">This page is under construction. Stay tuned! We'll be ready soon.</p>
        
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Progress</div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        <p className="text-sm text-gray-400">Thank you for your patience!</p>
      </div>
    </div>
  )
}

export default Page

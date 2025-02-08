"use client"

import { useState } from 'react'

export default function WorkbookSignup() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Replace with your actual email signup logic
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscribed(true)
        setEmail('')
      } else {
        alert('Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="bg-blue-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and get the latest insights delivered straight to your inbox.
      </p>

      {!subscribed ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                flex-grow 
                px-4 py-3 
                border border-gray-300 
                rounded-l-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500
              "
            />
            <button 
              type="submit" 
              className="
                bg-blue-600 
                text-white 
                px-6 py-3 
                rounded-r-lg 
                hover:bg-blue-700 
                transition-colors
              "
            >
              Subscribe
            </button>
          </div>
        </form>
      ) : (
        <div className="text-green-600 font-bold">
          Thank you for subscribing!
        </div>
      )}
    </div>
  )
}
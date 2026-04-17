'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // In a real app, you would send this data to a backend API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-800 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-800 rounded-md">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </div>
          
          {/* Contact Info and Map */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-2">
                Have questions or need assistance? We're here to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">123 Business Avenue</p>
                    <p className="text-sm text-gray-500">City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 4 15.284 4 9V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">info@example.com</p>
                    <p className="text-sm text-gray-500">Email us for inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.657V16a2 2 0 002 2h2a2 2 0 002-2V5.657a1 1 0 00-.789-1.414l-3.142-1.292a1 1 0 00-1.225 0l-3.142 1.292A1 1 0 005 5.657z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Google Map Preview - Using iframe embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.022070031991!2d-73.98930848464172!3d40.75050107932443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda3cf%3A0xb89d1fe6bc499443!2sTimes%20Square%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1619738999575"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
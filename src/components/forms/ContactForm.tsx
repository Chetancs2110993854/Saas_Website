import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { createContactInquiry } from '../../lib/supabase'
import { CheckIcon, SendIcon } from 'lucide-react'

interface ContactFormProps {
  onSuccess?: () => void
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: submitError } = await createContactInquiry(formData)
      
      if (submitError) {
        throw submitError
      }

      setSuccess(true)
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        subject: '',
        message: '',
        inquiry_type: 'general'
      })
      
      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for contacting StarBoost. We'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setSuccess(false)}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-50"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <Input
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type
          </label>
          <select
            name="inquiry_type"
            value={formData.inquiry_type}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 bg-white"
          >
            <option value="general">General Inquiry</option>
            <option value="sales">Sales & Pricing</option>
            <option value="support">Technical Support</option>
            <option value="partnership">Partnership</option>
            <option value="press">Press & Media</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 resize-none"
          required
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}
      
      <Button 
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <SendIcon size={20} />
          </>
        )}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        We'll get back to you within 24 hours. For urgent matters, please call us directly.
      </p>
    </form>
  )
}
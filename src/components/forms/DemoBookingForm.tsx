import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { createDemoBooking } from '../../lib/supabase'
import { CheckIcon, CalendarIcon } from 'lucide-react'

interface DemoBookingFormProps {
  onSuccess?: () => void
}

export const DemoBookingForm: React.FC<DemoBookingFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone: '',
    meeting_type: 'strategy_session',
    message: ''
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
      const { error: submitError } = await createDemoBooking(formData)
      
      if (submitError) {
        throw submitError
      }

      setSuccess(true)
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone: '',
        meeting_type: 'strategy_session',
        message: ''
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in StarBoost. Our team will contact you within 24 hours to schedule your personalized demo.
        </p>
        <Button 
          onClick={() => setSuccess(false)}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-50"
        >
          Submit Another Request
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
            Company Name
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
            Phone Number
          </label>
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Meeting Type
        </label>
        <select
          name="meeting_type"
          value={formData.meeting_type}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 bg-white"
        >
          <option value="quick_overview">Quick Overview (15 min)</option>
          <option value="strategy_session">Full Strategy Session (30 min)</option>
          <option value="technical_deep_dive">Technical Deep Dive (45 min)</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your online presence goals..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 resize-none"
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
            Submitting...
          </>
        ) : (
          <>
            <CalendarIcon size={20} />
            Request Demo
          </>
        )}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        Our team will contact you within 24 hours to schedule your demo.
      </p>
    </form>
  )
}
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { subscribeToNewsletter } from '../../lib/supabase'
import { CheckIcon, RocketIcon } from 'lucide-react'

interface NewsletterFormProps {
  onSuccess?: () => void
  className?: string
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess, className = '' }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: submitError } = await subscribeToNewsletter(email)
      
      if (submitError) {
        if (submitError.code === '23505') {
          throw new Error('This email is already subscribed to our newsletter.')
        }
        throw submitError
      }

      setSuccess(true)
      setEmail('')
      
      if (onSuccess) {
        onSuccess()
      }

      // Reset success state after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={`text-center p-4 bg-green-50 rounded-xl border border-green-200 ${className}`}>
        <div className="flex items-center justify-center gap-2 text-green-700">
          <CheckIcon size={20} />
          <span className="font-medium">Successfully subscribed!</span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address" 
          className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-lg"
          required
        />
        <Button 
          type="submit"
          disabled={loading}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Subscribing...
            </>
          ) : (
            <>
              <RocketIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
              Subscribe Now
            </>
          )}
        </Button>
      </div>
      
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      
      <p className="text-gray-500 text-sm text-center">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </form>
  )
}
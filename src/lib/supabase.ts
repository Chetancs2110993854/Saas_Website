import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  full_name?: string
  company_name?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface DemoBooking {
  id: string
  user_id?: string
  full_name: string
  email: string
  company_name?: string
  phone?: string
  meeting_type: string
  preferred_date?: string
  message?: string
  status: string
  created_at: string
}

export interface ContactInquiry {
  id: string
  full_name: string
  email: string
  company_name?: string
  subject: string
  message: string
  inquiry_type: string
  status: string
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribed_at: string
  is_active: boolean
}

// Auth functions
export const signUp = async (email: string, password: string, userData?: Partial<User>) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Demo booking functions
export const createDemoBooking = async (booking: Omit<DemoBooking, 'id' | 'created_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('demo_bookings')
    .insert([{
      ...booking,
      status: 'pending'
    }])
    .select()
    .single()
  
  return { data, error }
}

export const getDemoBookings = async (userId?: string) => {
  let query = supabase
    .from('demo_bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (userId) {
    query = query.eq('user_id', userId)
  }

  const { data, error } = await query
  return { data, error }
}

export const updateDemoBookingStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from('demo_bookings')
    .update({ status })
    .eq('id', id)
    .select()
    .single()
  
  return { data, error }
}

// Contact inquiry functions
export const createContactInquiry = async (inquiry: Omit<ContactInquiry, 'id' | 'created_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert([{
      ...inquiry,
      status: 'new'
    }])
    .select()
    .single()
  
  return { data, error }
}

export const getContactInquiries = async () => {
  const { data, error } = await supabase
    .from('contact_inquiries')
    .select('*')
    .order('created_at', { ascending: false })
  
  return { data, error }
}

// Newsletter functions
export const subscribeToNewsletter = async (email: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
    .single()
  
  return { data, error }
}

export const unsubscribeFromNewsletter = async (email: string) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .update({ is_active: false })
    .eq('email', email)
    .select()
    .single()
  
  return { data, error }
}

export const getNewsletterSubscribers = async () => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .eq('is_active', true)
    .order('subscribed_at', { ascending: false })
  
  return { data, error }
}

// User profile functions
export const createUserProfile = async (user: Omit<User, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select()
    .single()
  
  return { data, error }
}

export const updateUserProfile = async (id: string, updates: Partial<User>) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  return { data, error }
}

export const getUserProfile = async (id: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()
  
  return { data, error }
}
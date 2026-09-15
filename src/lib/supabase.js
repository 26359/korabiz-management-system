import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ixtopqnnvqfohdtukuxw.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dG9wcW5udnFmb2hkdHVrdXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MDMyOTQsImV4cCI6MjEwNTA3OTI5NH0.2Ulzl8phtAGnPnud1gGcpFn1dtMVIuFg8bmSxd_GyAA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ilrznnreizpvpgkmwcql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlscnpubnJlaXpwdnBna213Y3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0MTcyNjUsImV4cCI6MTk5Mzk5MzI2NX0.xlTmgaBGdJHjYFhPyWI6jXd8c21EBWWfFQGv4r48Y9M'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
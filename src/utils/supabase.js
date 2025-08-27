
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mctnzcgwdduccdisyhlh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdG56Y2d3ZGR1Y2NkaXN5aGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTQwMzMsImV4cCI6MjA3MTg3MDAzM30.y817ortCDj8ysLawlcC7CZNRsgn7fahLk84e8sC2Gtc"
const supabase = createClient(supabaseUrl, supabaseKey) 

export default supabase;
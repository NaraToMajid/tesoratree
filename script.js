const SUPABASE_URL = "https://mqonelsoqyvrasrzrzfl.supabase.co/"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xb25lbHNvcXl2cmFzcnpyemZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NjEzOTQsImV4cCI6MjA4MTUzNzM5NH0.exHvN0BA3P71DcZbavZ0DMk8pUEpWQ6VCuH672wEdJ4"

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function publish(){

 const username = document.getElementById("username").value
 const title = document.getElementById("title").value
 const url = document.getElementById("url").value

 if(!username || !title || !url){
  alert("Isi semua field")
  return
 }

 const { data, error } = await supabase
  .from("links")
  .insert([
   {
    username: username,
    title: title,
    url: url
   }
  ])

 if(error){
  console.log(error)
  alert("Error publish")
  return
 }

 const link = window.location.origin + "/" + username

 document.getElementById("result").innerText =
 "Link kamu: " + link

}

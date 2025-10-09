# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Clear existing votes
Vote.destroy_all

# Sample careers for elementary career day
careers = [
  "Doctor", "Nurse", "Veterinarian", "Teacher", "Police Officer",
  "Firefighter", "Chef", "Artist", "Musician", "Astronaut",
  "Scientist", "Engineer", "Pilot", "Athlete", "Writer",
  "Dentist", "Librarian", "Farmer", "Architect", "Video Game Designer"
]

# Sample student names
names = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason",
  "Isabella", "Logan", "Mia", "Lucas", "Charlotte", "Oliver", "Amelia",
  "Elijah", "Harper", "James", "Evelyn", "Benjamin", "Abigail", "Alexander",
  "Emily", "Michael", "Ella", "Daniel", "Madison", "Henry", "Scarlett",
  "Jackson", "Grace", "Sebastian", "Chloe", "Aiden", "Lily", "Matthew",
  "Zoey", "Samuel", "Layla", "David", "Penelope", "Joseph", "Riley",
  "Carter", "Nora", "Owen", "Hannah", "Wyatt", "Aria", "John"
]

genders = ["male", "female"]
grades = ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"] # Elementary grades K-5

# Create 100 sample votes
100.times do
  Vote.create!(
    name: names.sample,
    career: careers.sample,
    gender: genders.sample,
    grade: grades.sample
  )
end

puts "Created #{Vote.count} sample votes"

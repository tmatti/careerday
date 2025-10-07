import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import Header from "../components/Header";

const DREAM_JOBS = [
  "Teacher",
  "Doctor",
  "Veterinarian",
  "Police Officer",
  "Firefighter",
  "Astronaut",
  "Engineer",
  "Artist",
  "Athlete",
  "Chef",
  "Scientist",
  "Musician",
  "Video Game Designer",
  "YouTuber",
  "Other",
];

export default function Vote() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    gender: "",
    dreamJob: "",
    otherJob: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Use otherJob if "Other" is selected, otherwise use dreamJob
    const jobToSubmit =
      formData.dreamJob === "Other" ? formData.otherJob : formData.dreamJob;

    // TODO: Submit to backend
    console.log({
      name: formData.name,
      grade: formData.grade,
      gender: formData.gender,
      dreamJob: jobToSubmit,
    });

    // Navigate to results or success page
    router.get("votes");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head title="Career Day - Vote!" />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-yellow-400 p-4">
        {/* Header */}
        <Header />

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <h2 className="block text-2xl font-bold text-purple-700 mb-2">
                Your Info 🪪
              </h2>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 text-lg border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  placeholder="Enter your name"
                />

                {/* Grade Select */}
                <div>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  >
                    <option value="">Grade</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="1st">1st Grade</option>
                    <option value="2nd">2nd Grade</option>
                    <option value="3rd">3rd Grade</option>
                    <option value="4th">4th Grade</option>
                    <option value="5th">5th Grade</option>
                  </select>
                </div>

                {/* Gender Radio Buttons */}
                <div className="flex gap-4 justify-center">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Boy"
                      checked={formData.gender === "Boy"}
                      onChange={handleInputChange}
                      required
                      className="w-6 h-6 text-purple-600 focus:ring-4 focus:ring-purple-200"
                    />
                    <span className="text-2xl font-bold text-purple-700">
                      Boy
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Girl"
                      checked={formData.gender === "Girl"}
                      onChange={handleInputChange}
                      required
                      className="w-6 h-6 text-purple-600 focus:ring-4 focus:ring-purple-200"
                    />
                    <span className="text-2xl font-bold text-purple-700">
                      Girl
                    </span>
                  </label>
                </div>
              </div>

              {/* Dream Job Select */}
              <div>
                <label
                  htmlFor="dreamJob"
                  className="block text-2xl font-bold text-purple-700 mb-2"
                >
                  Dream Job 🚀
                </label>
                <select
                  id="dreamJob"
                  name="dreamJob"
                  value={formData.dreamJob}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-lg border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                >
                  <option value="">What do you want to be?</option>
                  {DREAM_JOBS.map((job) => (
                    <option key={job} value={job}>
                      {job}
                    </option>
                  ))}
                </select>
              </div>

              {/* Other Job Input - Shows when "Other" is selected */}
              {formData.dreamJob === "Other" && (
                <div className="animate-fadeIn">
                  <label
                    htmlFor="otherJob"
                    className="block text-2xl font-bold text-purple-700 mb-2"
                  >
                    Tell us your dream job! ✨
                  </label>
                  <input
                    type="text"
                    id="otherJob"
                    name="otherJob"
                    value={formData.otherJob}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-lg border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                    placeholder="Type your dream job here"
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-green-500 hover:to-blue-600"
                >
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

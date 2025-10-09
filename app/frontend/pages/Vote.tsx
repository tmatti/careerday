import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";
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

export default function Vote({ errors }: { errors: any }) {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    gender: "",
    dreamJob: "",
    otherJob: "",
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      alert(JSON.stringify(errors));
    }
  }, [errors]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Use otherJob if "Other" is selected, otherwise use dreamJob
    const jobToSubmit =
      formData.dreamJob === "Other" ? formData.otherJob : formData.dreamJob;

    const params = {
      vote: {
        name: formData.name,
        grade: formData.grade,
        gender: formData.gender,
        career: jobToSubmit,
      },
    };

    console.log(params);

    router.post("/votes", params);
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Section */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 space-y-6">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                  About You 🪪
                </h2>

                {/* Name and Grade Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-blue-600 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 text-lg border-4 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                      placeholder="Your name (optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="grade"
                      className="block text-sm font-semibold text-blue-600 mb-2"
                    >
                      Grade
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 text-lg border-4 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                    >
                      <option value="">Pick your grade</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="1st">1st Grade</option>
                      <option value="2nd">2nd Grade</option>
                      <option value="3rd">3rd Grade</option>
                      <option value="4th">4th Grade</option>
                      <option value="5th">5th Grade</option>
                    </select>
                  </div>
                </div>

                {/* Gender Selection */}
                <div>
                  <label className="block text-sm font-semibold text-blue-600 mb-3">
                    I am a... <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4 justify-start">
                    <label className="flex-1 max-w-[200px]">
                      <input
                        type="radio"
                        name="gender"
                        value="Boy"
                        checked={formData.gender === "Boy"}
                        onChange={handleInputChange}
                        required
                        className="peer sr-only"
                      />
                      <div className="cursor-pointer border-4 border-blue-300 rounded-xl px-6 py-4 text-center font-bold text-lg text-blue-700 peer-checked:border-blue-500 peer-checked:bg-blue-100 peer-checked:text-blue-700 hover:border-blue-400 transition-all">
                        👦 Boy
                      </div>
                    </label>
                    <label className="flex-1 max-w-[200px]">
                      <input
                        type="radio"
                        name="gender"
                        value="Girl"
                        checked={formData.gender === "Girl"}
                        onChange={handleInputChange}
                        required
                        className="peer sr-only"
                      />
                      <div className="cursor-pointer border-4 border-blue-300 rounded-xl px-6 py-4 text-center font-bold text-lg text-blue-700 peer-checked:border-pink-500 peer-checked:bg-pink-100 peer-checked:text-pink-700 hover:border-blue-400 transition-all">
                        👧 Girl
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Dream Job Section */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 space-y-4">
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                  Your Dream Job 🚀
                </h2>
                <div>
                  <label
                    htmlFor="dreamJob"
                    className="block text-sm font-semibold text-blue-600 mb-2"
                  >
                    What do you want to be when you grow up?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="dreamJob"
                    name="dreamJob"
                    value={formData.dreamJob}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 text-lg border-4 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                  >
                    <option value="">Choose your dream job...</option>
                    {DREAM_JOBS.map((job) => (
                      <option key={job} value={job}>
                        {job}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Other Job Input - Shows when "Other" is selected */}
              {formData.dreamJob === "Other" && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 animate-fadeIn">
                  <label
                    htmlFor="otherJob"
                    className="block text-2xl font-bold text-orange-700 mb-3"
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
                    className="w-full px-5 py-4 text-lg border-4 border-orange-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all"
                    placeholder="Type your dream job here..."
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-3xl font-bold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
                >
                  🎉 Submit My Vote! 🎉
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

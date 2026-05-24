"use client";

import Image from "next/image";

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Public Speaking",
  "Content Creation",
  "Team Collaboration",
  "Creative Thinking",
];

const experiences = [
  {
    title: "Student at Telkom School Malang",
    year: "2024 - Present",
    desc: "Learning software engineering, web development, and digital creativity.",
  },
  {
    title: "School Organization",
    year: "2024",
    desc: "Actively participating in student activities and teamwork projects.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#fff7fb] text-pink-950 overflow-hidden">
      {/* BACKGROUND BLUR */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="fixed bottom-0 right-0 w-72 h-72 bg-rose-300 rounded-full blur-3xl opacity-20 -z-10" />

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-pink-400 font-semibold mb-4">
              Welcome to my profile ✨
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Zahra
              <br />
              <span className="text-pink-500">Aurellia</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-pink-700">
              Software Engineering Student
            </h2>

            <p className="mt-7 text-lg leading-8 text-pink-900/70 max-w-xl">
              An 11th grade student at SMK Telkom Malang who enjoys
              technology, aesthetic design, and building modern digital
              experiences with creativity and passion.
            </p>

            {/* BUTTON */}
            <div className="flex gap-4 mt-10">
              <a
                href="#contact"
                className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-7 py-3 rounded-full shadow-lg shadow-pink-300/40"
              >
                Contact Me
              </a>

              <a
                href="#about"
                className="border-2 border-pink-300 hover:bg-pink-100 transition-all duration-300 text-pink-600 px-7 py-3 rounded-full"
              >
                About Me
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-400 rounded-[50px] blur-3xl opacity-30 group-hover:opacity-40 transition duration-500"></div>

              <Image
                src="/profile.jpg"
                alt="Profile"
                width={380}
                height={380}
                className="relative rounded-[40px] border-[10px] border-white object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-pink-100 rounded-[40px] p-10 md:p-14 shadow-xl">
          <h2 className="text-4xl font-black text-pink-500 mb-8">
            About Me 💖
          </h2>

          <p className="text-lg leading-9 text-pink-900/75">
            I am a student who loves learning new things, especially in
            technology and design. I enjoy exploring frontend development,
            creating aesthetic interfaces, and improving my creativity every
            day. Besides studying, I also enjoy listening to music, taking
            photos, watching movies, and spending time with friends.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-pink-500">
              My Skills 🎀
            </h2>

            <p className="mt-4 text-pink-900/60">
              Some things that I enjoy learning and developing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white border border-pink-100 rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <p className="font-semibold text-pink-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 bg-gradient-to-b from-pink-50 to-pink-100/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl font-black text-pink-500">
              Experience 🌸
            </h2>

            <p className="mt-4 text-pink-900/60">
              My learning journey and activities.
            </p>
          </div>

          <div className="space-y-7">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-pink-100 rounded-[30px] p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h3 className="text-2xl font-bold text-pink-700">
                    {item.title}
                  </h3>

                  <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>

                <p className="mt-5 leading-8 text-pink-900/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-24 bg-gradient-to-r from-pink-500 to-rose-400 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">
            Let’s Connect ✨
          </h2>

          <p className="text-lg text-pink-100 leading-8 max-w-2xl mx-auto">
            Feel free to reach out through email or social media.
          </p>

          {/* CONTACT CARD */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <a
              href="mailto:zarathobaroni@email.com"
              className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📧</div>

              <h3 className="font-semibold text-xl mb-2">Email</h3>

              <p className="text-pink-100 text-sm break-all">
                zarathobaroni@email.com
              </p>
            </a>

            <a
              href="https://instagram.com/djaraaur"
              target="_blank"
              className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📸</div>

              <h3 className="font-semibold text-xl mb-2">Instagram</h3>

              <p className="text-pink-100 text-sm">@djaraaur</p>
            </a>

            <a
              href="https://github.com/zahraaurel"
              target="_blank"
              className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">💼</div>

              <h3 className="font-semibold text-xl mb-2">GitHub</h3>

              <p className="text-pink-100 text-sm">
                github.com/zahraaurel
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

const skills = [
  "Frontend Development",
  "UI/UX Design",
  "Creative Thinking",
  "Public Speaking",
  "Team Collaboration",
  "Content Creation",
];

const experiences = [
  {
    title: "SMK Telkom Malang",
    year: "2024 — Present",
    desc: "Learning software engineering, web development, and digital creativity.",
  },
  {
    title: "School Organization",
    year: "2024",
    desc: "Participating in teamwork activities and improving communication skills.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#fffafc] text-[#2a1f26] overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-200/30 blur-3xl rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-semibold text-lg tracking-wide">
            Zahra Aurellia
          </h1>

          <nav className="hidden md:flex items-center gap-10 text-sm text-[#6b5a63]">
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-pink-500 transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-pink-500 transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-pink-100 shadow-sm text-sm text-pink-600">
              ✦ Software Engineering Student
            </div>

            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.95] tracking-[-4px]">
              Creating
              <br />
              <span className="text-pink-500">Elegant</span> Digital
              <br />
              Experiences.
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#6f5d66] max-w-2xl">
              Hi, I’m Zahra Aurellia — an 11th grade student at
              SMK Telkom Malang with a strong interest in frontend
              development, modern interfaces, and aesthetic digital design.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <a
                href="#contact"
                className="bg-[#1e1b1d] text-white px-8 py-4 rounded-full hover:scale-[1.03] transition-all duration-300 shadow-xl"
              >
                Get In Touch
              </a>

              <a
                href="#about"
                className="bg-white/70 backdrop-blur-xl border border-pink-100 px-8 py-4 rounded-full hover:bg-white transition-all duration-300"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* FLOATING INFO */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[28px] p-6 shadow-lg">
              <p className="text-sm text-[#8b7b84] mb-3">Focus</p>
              <h3 className="font-semibold text-lg">Frontend Dev</h3>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[28px] p-6 shadow-lg">
              <p className="text-sm text-[#8b7b84] mb-3">Passion</p>
              <h3 className="font-semibold text-lg">UI Aesthetics</h3>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[28px] p-6 shadow-lg">
              <p className="text-sm text-[#8b7b84] mb-3">School</p>
              <h3 className="font-semibold text-lg">SMK Telkom</h3>
            </div>

            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[28px] p-6 shadow-lg">
              <p className="text-sm text-[#8b7b84] mb-3">Grade</p>
              <h3 className="font-semibold text-lg">11th Grade</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-pink-400">
                About Me
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight">
                Minimal,
                <br />
                thoughtful,
                <br />
                and aesthetic.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-[#6f5d66]">
                I enjoy learning modern web technologies and exploring
                beautiful user interfaces. Besides coding, I love music,
                movies, visual aesthetics, and spending time discovering
                new creative ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-pink-400">
                Skills
              </p>

              <h2 className="mt-4 text-5xl font-black">
                What I’m Learning.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group bg-white/70 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-100 mb-6"></div>

                <h3 className="text-xl font-semibold">{skill}</h3>

                <p className="mt-3 text-[#7a6872] leading-7 text-sm">
                  Continuously improving through practice, exploration,
                  and hands-on learning experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="px-6 py-32 bg-white/40 backdrop-blur-xl"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black mb-16">
            Learning Journey.
          </h2>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 border border-white/50 rounded-[32px] p-8 shadow-lg"
              >
                <div className="flex items-start justify-between gap-5 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[#6f5d66] leading-8">
                      {item.desc}
                    </p>
                  </div>

                  <span className="text-sm bg-pink-100 text-pink-600 px-4 py-2 rounded-full">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1f1b1e] text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />

            <p className="text-sm uppercase tracking-[0.2em] text-pink-300">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              Let’s build
              <br />
              something beautiful.
            </h2>

            <div className="grid md:grid-cols-3 gap-5 mt-14">
              <a
                href="mailto:zarathobaroni@email.com"
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
              >
                <p className="text-pink-300 text-sm mb-3">Email</p>

                <h3 className="font-medium break-all">
                  zarathobaroni@email.com
                </h3>
              </a>

              <a
                href="https://instagram.com/djaraaur"
                target="_blank"
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
              >
                <p className="text-pink-300 text-sm mb-3">Instagram</p>

                <h3 className="font-medium">@djaraaur</h3>
              </a>

              <a
                href="https://github.com/zahraaurel"
                target="_blank"
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
              >
                <p className="text-pink-300 text-sm mb-3">GitHub</p>

                <h3 className="font-medium">github.com/zahraaurel</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#8b7b84]">
          <p>© 2026 Zahra Aurellia</p>

          <p>Designed with simplicity and elegance.</p>
        </div>
      </footer>
    </main>
  );
}
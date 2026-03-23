import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Properties");
  const navItems = ["Properties", "Program Operators", "Providers"];

  return (
    <div
      className="min-h-screen bg-[#ece9f5]"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="px-5 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1460px] overflow-hidden rounded-[32px] border border-white/40 bg-white/80 shadow-[0_20px_80px_rgba(72,60,120,0.16)] backdrop-blur-xl">
          {/* HEADER */}
          <header className="px-8 pt-7 pb-6 md:px-10">
            <div className="flex items-center justify-between">
              <h1 className="text-[26px] font-semibold text-[#1b2857] flex items-center gap-3">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#dfe4ff] shadow-inner">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6172ff]" />
                </span>
                Enrich Xchange
              </h1>

              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-[14px] border border-gray-200 text-gray-600 bg-white">
                  Login
                </button>
                <button className="px-5 py-2 rounded-[14px] bg-indigo-600 text-white shadow">
                  Get Started
                </button>
              </div>
            </div>

            {/* TAGLINE */}
            {/* TOP BADGE */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "14px",
  }}
>
  <div
    style={{
      padding: "12px 28px",
      borderRadius: "999px",
      backgroundColor: "#eef2ff",
      color: "#4f46e5",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "-0.2px",
      boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.06)",
    }}
  >
    Housing • Care • Service Coordination
  </div>
</div>
            {/* NAV */}
            <div className="mt-4 flex justify-center">
              <div className="flex bg-[#eef0f7] rounded-full p-1 shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`px-5 py-2 rounded-full text-[14px] transition ${
                      activeTab === item
                        ? "bg-white text-[#2d3b73] shadow text-sm font-medium"
                        : "text-[#6b7280] text-sm font-medium"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button className="px-4 text-gray-400">…</button>
              </div>
            </div>
<div className="text-center text-sm font-medium text-gray-600 mt-4 mb-6">
  Looking for support? Start here.
</div>
            {/* SEARCH BAR */}
            <div className="mt-5 flex justify-center">
              <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow md:flex-row md:items-center">
                <div className="flex-1 px-5 py-4">
                  <p className="text-xs text-gray-500">Location</p>
                  <input
                    placeholder="City or zip"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                <div className="hidden md:block w-px h-10 bg-gray-200" />

                <div className="flex-1 px-5 py-4">
                  <p className="text-xs text-gray-500">Type of Support</p>
                  <input
                    placeholder="Housing, shelter, treatment"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                <div className="hidden md:block w-px h-10 bg-gray-200" />

                <div className="flex-1 px-5 py-4">
                  <p className="text-xs text-gray-500">Who is this for?</p>
                  <input
                    placeholder="Youth, adult, family"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                    <div className="px-3 py-3">
                  <button className="rounded-full bg-indigo-600 px-6 py-3 text-white shadow">
                    Find Help
                  </button>
                </div>
              </div>
            </div>
          </header>


          {/* MAIN */}
          <main className="px-8 pb-8 md:px-10 md:pb-10">
            {/* HERO */}
            <section className="relative overflow-hidden rounded-[32px] min-h-[420px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/bg-hero.jpg')" }}
              />

              {/* Slight stronger overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/78 via-purple-400/52 to-transparent" />

              {/* Soft right glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.30),transparent_60%)]" />

              {/* Content */}
              <div className="relative z-10 px-10 py-14 text-white">
                <span className="inline-flex rounded-full bg-white/18 px-5 py-2 text-sm backdrop-blur border border-white/10">
                  Housing + Care Coordination
                </span>

                <h2 className="mt-6 max-w-3xl text-[46px] md:text-[60px] font-semibold leading-tight tracking-[0.01em]">
                  Find the right support, housing, and services faster
                </h2>

                <p className="mt-6 max-w-2xl text-lg text-white/90">
                  Enrich Xchange helps property owners, operators, licensed
                  professionals, and families connect through one shared marketplace.
                </p>

                <button className="mt-6 rounded-[14px] bg-white px-6 py-3 font-medium text-[#2d3b73] shadow">
                  Explore Listings
                </button>
              </div>
            </section>

            {/* CARDS */}
            <section className="mt-8 grid md:grid-cols-3 gap-4">
              {/* PROPERTY OWNERS */}
              <div className="p-6 bg-white rounded-2xl shadow">
                <span className="text-sm bg-indigo-100 px-3 py-1 rounded-full text-[#4f46e5]">
                  Property Owners
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#2b355d]">
                  Monetize Your Property
                </h3>
                <p className="mt-3 text-gray-600">
                  List your home or space to support housing programs and earn reliable income.
                </p>
                <button className="mt-5 rounded-[14px] bg-[#f5f6fb] px-4 py-2 font-medium text-[#2d3b73] border border-[#e6e8f2]">
                  List Your Property
                </button>
              </div>

              {/* PROVIDERS */}
              <div className="p-6 bg-white rounded-2xl shadow">
                <span className="text-sm bg-indigo-100 px-3 py-1 rounded-full text-[#4f46e5]">
                  Licensed Providers
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#2b355d]">
                  Offer Your Services
                </h3>
                <p className="mt-3 text-gray-600">
                  Connect with operators who need your services and grow your impact.
                </p>
                <button className="mt-5 rounded-[14px] bg-indigo-600 px-4 py-2 font-medium text-white">
                  List Your Service
                </button>
              </div>

              {/* OPERATORS */}
              <div className="p-6 bg-white rounded-2xl shadow">
                <span className="text-sm bg-indigo-100 px-3 py-1 rounded-full text-[#4f46e5]">
                  Program Operators
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#2b355d]">
                  Scale Your Programs
                </h3>
                <p className="mt-3 text-gray-600">
                  Access housing and providers in one place to help people find placement faster.
                </p>
                <button className="mt-5 rounded-[14px] bg-indigo-600 px-4 py-2 font-medium text-white">
                  List Your Program
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}


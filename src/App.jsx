import { useState } from "react";

export default function EnrichXchangeLanding() {
  const [activeTab, setActiveTab] = useState("Properties");
  const navItems = ["Properties", "Program Operators", "Providers"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f7fb]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,247,251,0.96))]" />

      <div className="relative z-10 px-6 py-6 md:px-10 md:py-8">
        <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[32px] border border-white/50 bg-white/72 shadow-[0_20px_80px_rgba(72,60,120,0.14)] backdrop-blur-xl">
          <header className="px-8 pt-7 pb-5 md:px-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.10)]" />
                <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1b2857]">
                  Enrich Xchange
                </h1>
              </div>

              <div className="flex gap-3">
                <button className="rounded-full border border-gray-200 bg-white/85 px-5 py-2 text-gray-600">
                  Login
                </button>

                <button className="rounded-full bg-indigo-600 px-5 py-2 text-white shadow-sm">
                  Get Started
                </button>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="rounded-full border border-[#e8eaf4] bg-[#edf1ff]/95 px-7 py-3 text-[13px] font-semibold tracking-[-0.01em] text-[#5960b5] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                Housing • Care • Service Coordination
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-1 rounded-full border border-[#e6e7ef] bg-[#f1f2f7]/95 p-1 shadow-sm">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`rounded-full px-7 py-3 text-[14px] font-medium transition ${
                      activeTab === item
                        ? "bg-white text-[#2d3b73] shadow"
                        : "text-[#6b7280]"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <button className="rounded-full px-4 py-3 text-[14px] text-[#6b7280]">
                  ...
                </button>
              </div>
            </div>

            <div className="mt-3 flex justify-center">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-[#2f3447] md:text-[17px]">
                Looking for support? Start here.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="flex w-full max-w-[1180px] flex-col overflow-hidden rounded-[24px] border border-[#e7e7ee] bg-white/92 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:flex-row md:items-center">
                <div className="flex-1 px-6 py-5 transition hover:bg-gray-50/80">
                  <p className="text-[12px] font-semibold text-gray-500">Location</p>
                  <input
                    type="text"
                    placeholder="City or zip"
                    className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="hidden h-10 w-px bg-gray-200 md:block" />

                <div className="flex-1 px-6 py-5 transition hover:bg-gray-50/80">
                  <p className="text-[12px] font-semibold text-gray-500">
                    Type of Support
                  </p>
                  <input
                    type="text"
                    placeholder="Housing, shelter, treatment"
                    className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="hidden h-10 w-px bg-gray-200 md:block" />

                <div className="flex-1 px-6 py-5 transition hover:bg-gray-50/80">
                  <p className="text-[12px] font-semibold text-gray-500">
                    Who is this for?
                  </p>
                  <input
                    type="text"
                    placeholder="Youth, adult, family"
                    className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="px-4 py-4">
                  <button className="w-full rounded-[20px] bg-indigo-600 px-8 py-4 text-white shadow-[0_12px_24px_rgba(79,70,229,0.28)] md:w-auto">
                    Find Help
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="px-8 pb-8 md:px-10">
            <section className="relative mt-3 min-h-[455px] overflow-hidden rounded-[30px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-600/90 to-transparent" />

              <div
                className="absolute inset-0 bg-cover bg-center opacity-34"
                style={{ backgroundImage: "url('/bg-hero.jpg')" }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.45),transparent_16%),...]" />

              <div className="absolute right-0 top-0 h-full w-[58%] bg-white/18 blur-3xl" />

              <div className="relative z-10 p-10 text-white md:p-12">
                <span className="inline-block rounded-full bg-white/18 px-4 py-2 text-[13px] font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
                  Housing + Care Coordination
                </span>

                <h2 className="mt-5 max-w-[780px] text-4xl font-semibold leading-[1.18] tracking-[-0.03em] md:text-[62px]">
                  Find the right support,
                  <br />
                  housing, and services faster
                </h2>

                <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-white/88">
                  Enrich Xchange helps property owners, operators, licensed
                  professionals, and families connect through one shared
                  marketplace.
                </p>

                <button className="mt-8 rounded-[18px] bg-white px-6 py-4 font-medium text-indigo-600 shadow-sm">
                  Explore Listings
                </button>
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-[#ececf3] bg-white/78 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur">
                <div className="relative">
                  <span className="rounded-full bg-[#edf1ff] px-3 py-1 text-[12px] font-medium text-[#7a80c8]">
                    Property Owners
                  </span>

                  <h3 className="mt-4 text-[20px] font-semibold text-gray-800">
                    Monetize Your Property
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-gray-500">
                    Support housing programs and earn reliable income while
                    making an impact by partnering with trusted program
                    operators.
                  </p>

                  <button className="mt-4 rounded-[14px] bg-[#f6f7fb] px-4 py-2 text-[#7b80a5]">
                    List Your Property
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#ececf3] bg-white/78 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur">
                <div className="relative">
                  <span className="rounded-full bg-[#edf1ff] px-3 py-1 text-[12px] font-medium text-[#7a80c8]">
                    Licensed Providers
                  </span>

                  <h3 className="mt-4 text-[20px] font-semibold text-gray-800">
                    Offer Your Service
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-gray-500">
                    Connect with program operators who need your services and
                    grow your impact while earning extra income.
                  </p>

                  <button className="mt-4 rounded-[14px] bg-indigo-600 px-4 py-2 text-white shadow-sm">
                    List Your Service
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#ececf3] bg-white/78 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur">
                <div className="relative">
                  <span className="rounded-full bg-[#edf1ff] px-3 py-1 text-[12px] font-medium text-[#7a80c8]">
                    Program Operators
                  </span>

                  <h3 className="mt-4 text-[20px] font-semibold text-gray-800">
                    Scale Your Programs
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-gray-500">
                    Access housing and providers in one place to help individuals in need of assistant find 
                    support and placement faster.
                  </p>

                  <button className="mt-4 rounded-[14px] bg-indigo-600 px-4 py-2 text-white shadow-sm">
                    List Your Program
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
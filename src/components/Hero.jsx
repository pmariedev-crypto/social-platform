export default function Hero() {
  return (
    <section className="px-6 mt-6">
      <div className="rounded-[28px] min-h-[430px] p-8 flex flex-col justify-between bg-indigo-600">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            Housing + Care Coordination
          </span>

          <h1 className="text-white text-5xl leading-tight font-semibold max-w-3xl">
            Find the right support,
            <br />
            housing, and services faster
          </h1>

          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            Enrich Xchange helps property owners, operators, licensed
            professionals, and families connect through one shared marketplace.
          </p>
        </div>

        <div className="mt-8">
          <button className="px-5 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow">
            Explore Listings
          </button>
        </div>
      </div>
    </section>
  );
}
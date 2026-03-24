export default function PopularCategories() {
  return (
    <section className="mt-16 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#0f172a]">
          Popular Categories
        </h2>

        <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
          Show more
        </button>
      </div>

      {/* Grid - ONLY 4 CARDS */}
      <div className="grid md:grid-cols-4 gap-4">
        <CategoryCard
          title="Transitional Housing"
          subtitle="Supportive placement options"
          image="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
        />

        <CategoryCard
          title="Youth Services"
          subtitle="Programs for teens and young adults"
          image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        />

        <CategoryCard
          title="Veterans Support"
          subtitle="Resources and trusted programs"
          image="https://images.unsplash.com/photo-1511895426328-dc8714191300"
        />

        <CategoryCard
          title="Elder Care"
          subtitle="Support and care for older adults"
          image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
        />
      </div>
    </section>
  );
}

function CategoryCard({ title, subtitle, image }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow hover:shadow-xl transition duration-300">
      <div
        className="h-32 rounded-xl bg-cover bg-center mb-3"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
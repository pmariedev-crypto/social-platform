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

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        <CategoryCard
          title="Transitional Housing"
          subtitle="Supportive placement options"
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        />

        <CategoryCard
          title="Behavioral Programs"
          subtitle="Structured care and services"
          image="https://images.unsplash.com/photo-1516549655169-df83a0774514"
        />

        <CategoryCard
          title="Family Support"
          subtitle="Resources and trusted programs"
          image="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2"
        />

        <CategoryCard
          title="Case Coordination"
          subtitle="Manage placement and next steps"
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        />
      </div>
    </section>
  );
}

function CategoryCard({ title, subtitle, image }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow hover:shadow-lg transition duration-300">
      <div
        className="h-32 rounded-xl bg-cover bg-center mb-3"
        style={{ backgroundImage: `url(${image})` }}
      />

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
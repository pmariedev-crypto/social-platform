
function Cards() {
  return (
    <section style={{ marginBottom: "26px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ fontSize: "28px", margin: 0, color: "#0f172a" }}>
          Popular categories
        </h2>
        <button
          style={{
            padding: "10px 14px",
            borderRadius: "10px",
            border: "1px solid #dbe1ea",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Show more
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "16px",
        }}
      >
        <CategoryCard
          title="Transitional Housing"
          subtitle="Supportive placement options"
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        />
        <CategoryCard
          title="Behavioral Programs"
          subtitle="Structured care and services"
          image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80"
        />
        <CategoryCard
          title="Family Support"
          subtitle="Resources and trusted programs"
          image="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80"
        />
        <CategoryCard
          title="Case Coordination"
          subtitle="Manage placement and next steps"
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
        />
      </div>
    </section>
  );
}

function CategoryCard({ title, subtitle, image }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "18px",
        padding: "12px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "120px",
          borderRadius: "14px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "14px",
        }}
      ></div>
      <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111827" }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.6" }}>
        {subtitle}
      </p>
    </div>
  );
}

export default Cards;
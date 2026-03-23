function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "24px",
            fontWeight: "700",
            color: "#334155",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#6366f1",
              display: "inline-block",
            }}
          ></span>
          Enrich Xchange
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            color: "#64748b",
            fontSize: "14px",
            flexWrap: "wrap",
          }}
        >
          <span>Properties</span>
          <span>Program Operators</span>
          <span>Providers</span>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "1px solid #dbe1ea",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#6366f1",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 18px",
        }}
      >
        <div
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
            color: "#4f46e5",
            fontSize: "13px",
            fontWeight: "600",
            border: "1px solid #e0e7ff",
            boxShadow: "0 4px 12px rgba(79,70,229,0.12)",
          }}
        >
          Housing • Care • Service Coordination
        </div>
      </div>
    </>
  );
}

export default Navbar;
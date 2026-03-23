import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section className="mt-12 px-6 grid md:grid-cols-3 gap-6">
      
      <FeatureCard
        label="Property Owners"
        title="Monetize Property"
        description="List your home or space to support housing programs and create steady income."
        buttonText="List Your Property"
        buttonColor="bg-indigo-500"
      />

      <FeatureCard
        label="Licensed Providers"
        title="Join Programs"
        description="Connect with operators who need your services and grow your impact."
        buttonText="List Your Service"
        buttonColor="bg-indigo-600"
      />

      <FeatureCard
        label="Program Operators"
        title="Scale Your Programs"
        description="Access housing and providers to expand your services faster."
        buttonText="List Your Program"
        buttonColor="bg-indigo-700"
      />

    </section>
  );
}
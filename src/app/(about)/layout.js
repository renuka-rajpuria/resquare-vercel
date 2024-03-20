import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "5+ Projects Completed",
    "2+ Years of Freelancing",
    "Contributed as a Teaching Assistant 📝",
    "Recipient of the Best Manager Award at Mindkraft 2024 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

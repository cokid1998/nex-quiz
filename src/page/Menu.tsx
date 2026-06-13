import QuizCard from "@/components/QuizCard";

export default function Menu() {
  return (
    <div className="min-h-[calc(100vh-var(--top-magic-number))] bg-zinc-50 p-6 rounded-lg">
      <div className="mx-auto max-w-3xl">
        <QuizCard />
      </div>
    </div>
  );
}

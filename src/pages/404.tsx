import Othello from "@/components/Othello";

export default function NotFound() {
  return (
    <div className="container mb-2" style={{ minHeight: "600px" }}>
      <p className="text-center">ここには、何もありません (泣)</p>
      <p className="text-center">代わりに、オセロを設置しておきました♪</p>

      <div className="mx-auto" style={{ maxWidth: "480px" }}>
        <Othello />
      </div>
    </div>
  );
}

export default function CourseCard({ title, lang }: { title: string; lang: string }) {
    return (
      <div className="p-4 border rounded-xl shadow bg-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">Language: {lang}</p>
      </div>
    );
  }
  
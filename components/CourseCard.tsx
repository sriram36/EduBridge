type CourseCardProps = {
  title: string;
  lang: string;
  progress?: number; // make it optional
};

export default function CourseCard({ title, lang, progress }: CourseCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2 border">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">Language: {lang}</p>

      {progress !== undefined && (
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{progress}% completed</p>
        </div>
      )}
    </div>
  );
}

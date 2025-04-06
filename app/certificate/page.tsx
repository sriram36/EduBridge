export default function CertificatePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-2xl font-bold mb-4">Your Certificate</h2>
        <a
          href="/certificate.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Download Certificate (PDF)
        </a>
      </div>
    );
  }
  
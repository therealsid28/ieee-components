import { X } from 'lucide-react'; 

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#0F172A] text-white flex justify-between items-center px-6 py-3 rounded-xl max-w-4xl mx-auto mt-6 shadow-md">
      <p className="text-sm">
        <span className="font-semibold">GeneriCon 2023</span>
        <span className="mx-2">·</span>
        Join us in Denver from <strong>June 7 – 9</strong> to see what’s coming next
        <span className="ml-1">→</span>
      </p>
      <button className="text-white hover:text-gray-300">
        <X size={16} />
      </button>
    </div>
  );
}
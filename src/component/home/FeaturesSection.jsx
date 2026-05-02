import React from 'react';
import { Book, Users, ShieldCheck, Sparkles } from 'lucide-react';



const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">


        <div className="relative group bg-[#F2FAF6] border border-[#e2f1e9] rounded-3xl p-8 flex flex-col items-start transition-all hover:shadow-lg">

          <div className="w-20 h-20 rounded-full border-2 border-dashed border-green-200 flex items-center justify-center bg-white mb-6">
            <div className="w-16 h-16 rounded-full bg-[#1A4D2E] flex items-center justify-center text-white">
              <Book size={32} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Collection</h3>
          <p className="text-gray-600 leading-relaxed max-w-xs mb-10">
            From classic literature to modern bestsellers, we have books for every reader.
          </p>

        </div>

        <div className="relative group bg-[#F2FAFE] border border-[#e2f1fe] rounded-3xl p-8 flex flex-col items-start transition-all hover:shadow-lg">

          <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center bg-white mb-6">
            <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
              <Users size={32} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Borrowing</h3>
          <p className="text-gray-600 leading-relaxed max-w-xs mb-10">
            Borrow books digitally with just a few clicks and read at your own pace.
          </p>


        </div>
        <div className="relative group bg-[#F2FAF6] border border-[#fef1e2] rounded-3xl p-8 flex flex-col items-start transition-all hover:shadow-lg overflow-hidden">

          <div className="w-20 h-20 rounded-full border-2 border-dashed border-orange-200 flex items-center justify-center bg-white mb-6">
            <div className="w-16 h-16 rounded-full bg-[#FB923C] flex items-center justify-center text-white">
              <ShieldCheck size={32} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
          <p className="text-gray-600 leading-relaxed max-w-xs mb-10">
            Your data and privacy are our top priority. Read worry-free with us.
          </p>

          <div className="absolute bottom-6 right-6 flex items-center gap-2">
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;
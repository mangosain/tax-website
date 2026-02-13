import { Box, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-gray-900 text-lg font-bold">
               <div className="w-6 h-6 bg-[rgb(83,154,248)] text-white rounded-sm flex items-center justify-center">
                 <Box size={14} />
               </div>
               <span>SaHiTax</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-gray-500">
              Precise financial strategies for modern businesses and professionals.
            </p>
            <div className="flex gap-3 pt-2">
                <div className="text-gray-400 hover:text-[rgb(83,154,248)] transition-colors cursor-pointer"><Instagram size={18}/></div>
                <div className="text-gray-400 hover:text-[rgb(83,154,248)] transition-colors cursor-pointer"><Linkedin size={18}/></div>
                <div className="text-gray-400 hover:text-[rgb(83,154,248)] transition-colors cursor-pointer"><Facebook size={18}/></div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">FBP Optimization</a></li>
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">ITR Filing</a></li>
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">Tax Saving</a></li>
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">Notice Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[rgb(83,154,248)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>© 2026 SaHiTax. All rights reserved.</div>
          <div>New Delhi, India.</div>
        </div>
      </div>
    </footer>
);

export default Footer;
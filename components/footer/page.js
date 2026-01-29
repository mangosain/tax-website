import {
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  Send,
  MapPin,
  Box,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-900 text-sm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Brand & Social */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white text-xl font-bold tracking-tight">
            {/* Logo Icon reused */}
            <div className="w-8 h-8 bg-white text-black rounded-sm flex items-center justify-center transition-transform hover:scale-105">
              <Box size={20} />
            </div>
            <span>&lt;NAME&gt;</span>
          </div>
          <p className="max-w-xs leading-relaxed text-zinc-500">
            I create innovative financial strategies that transform businesses
            and drive wealth growth.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-zinc-500">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FBP Optimization
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                ITR Filing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Tax Saving
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Notice Management
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-zinc-500">
            <li className="flex items-start gap-3">
              <Send size={18} className="mt-0.5 text-zinc-600" />
              <span className="hover:text-white transition-colors cursor-pointer">
                contact@email.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-zinc-600" />
              <span className="hover:text-white transition-colors cursor-pointer">
                +91 98765 43210
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-zinc-600" />
              <span className="hover:text-white transition-colors cursor-pointer">
                Financial District, New Delhi
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <div>© 2026 &lt;NAME&gt;. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

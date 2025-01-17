import { LiveTicker } from "./LiveTicker";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <LiveTicker />
      <div className="bg-crypto-card py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Risk Disclaimer</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-red-400 text-sm mb-4 font-medium">
              ⚠️ Warning: Cryptocurrency trading involves substantial risk and may not be suitable for everyone. The high degree of leverage can work against you as well as for you. Before deciding to trade cryptocurrencies you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Crypto Compare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
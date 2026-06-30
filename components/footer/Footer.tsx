import { Github, Send, Linkedin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center flex flex-col items-center gap-5 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            Let’s build your website together
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md">
            I design and develop modern, fast, and user-friendly web interfaces.
          </p>

          <a
            href="https://t.me/Aa_alfa"
            target="_blank"
            className="mt-4 px-7 py-3 rounded-lg bg-electro-blue hover:opacity-90 transition"
          >
            Contact Me
          </a>
          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/amir-hossein13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://t.me/Aa_alfa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amirhossein-attarnia-2043002bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+989934904062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center text-sm text-[#A1A1AA]">
          © {new Date().getFullYear()} amirhossein. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

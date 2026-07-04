import { Github, Send, Linkedin, Phone, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-32 border-t border-border/80" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="panel mb-16 px-8 py-10 text-center sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Let’s build something meaningful
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Ready to turn an idea into a polished product?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
            I’m available for freelance collaborations, product launches, and
            full-time frontend opportunities.
          </p>

          <a
            href="https://t.me/Aa_alfa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-background transition hover:opacity-90"
          >
            Contact Me
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/amir-hossein13"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-background"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://t.me/Aa_alfa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-background"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amirhossein-attarnia-2043002bb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-background"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+989934904062"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-background"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.instagram.com/aa_alfa13/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 transition hover:bg-primary hover:text-background"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border/80 pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} amirhossein. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
// import Nabvar from "./Nabvar"; // Asegúrate de que el nombre sea correcto (Navbar)

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground transition-colors duration-500">
      
      {/* 1. Fondo Gradiente dinámico */}
      {/* Cambiamos violet-950 por algo más suave en light mode y usamos variables */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-background to-cyan-500/10 dark:from-violet-950/40 dark:to-cyan-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-violet-500/10 dark:from-violet-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-cyan-500/10 dark:from-cyan-600/20 via-transparent to-transparent"></div>
      </div> */}

      {/* 2. Grid pattern (bajamos la opacidad para que no brille tanto en light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size[4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge: Usamos border-border en lugar de border-white */}
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-muted/30 backdrop-blur-sm border border-border">
            <span className="text-sm text-muted-foreground font-medium">Available for freelance work</span>
          </div>

          {/* 3. El Título (CRÍTICO): Cambiamos 'from-white' por 'from-foreground' */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-linear-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent font-bold tracking-tight">
            Gustavo Alejandro López Zárate
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Building scalable and beautiful web applications with modern technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {/* Botón Principal: Usamos primary y primary-foreground */}
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            {/* Botón Secundario: Usamos bordes definidos en CSS */}
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:bg-secondary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Iconos Sociales: Quitamos bg-white/5 */}
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "#contact", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 text-foreground/70 hover:text-foreground transition-all duration-300"
                whileHover={{ y: -4 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4. Indicador de Scroll: Usamos border-foreground/20 */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
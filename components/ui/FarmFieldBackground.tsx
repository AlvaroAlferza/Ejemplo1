"use client";

import { motion } from "motion/react";

const technologies = [
  {
    name: "NEXT.JS",
    x: "7%",
    y: "18%",
    delay: 0,
  },
  {
    name: "REACT",
    x: "88%",
    y: "17%",
    delay: 0.8,
  },
  {
    name: "TYPESCRIPT",
    x: "5%",
    y: "78%",
    delay: 1.4,
  },
  {
    name: "MOTION",
    x: "89%",
    y: "76%",
    delay: 2,
  },
];

const particles = [
  { x: "12%", y: "35%", delay: 0 },
  { x: "22%", y: "62%", delay: 0.7 },
  { x: "31%", y: "28%", delay: 1.2 },
  { x: "68%", y: "31%", delay: 0.4 },
  { x: "77%", y: "63%", delay: 1.5 },
  { x: "86%", y: "43%", delay: 2 },
  { x: "42%", y: "72%", delay: 0.9 },
  { x: "59%", y: "76%", delay: 1.8 },
];

function Plant({
  left,
  top,
  scale = 1,
  delay = 0,
}: {
  left: string;
  top: string;
  scale?: number;
  delay?: number;
}) {
  return (
    <motion.div
      style={{
        left,
        top,
        scale,
      }}
      animate={{
        rotate: [-2, 3, -2],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute origin-bottom"
    >
      <svg
        width="70"
        height="90"
        viewBox="0 0 70 90"
        fill="none"
      >
        <path
          d="M35 88 C35 65 35 40 35 18"
          stroke="#526548"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M35 50 C24 42 17 34 15 23"
          stroke="#657653"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M35 61 C47 53 55 45 58 34"
          stroke="#657653"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M15 23 C23 20 31 23 35 30 C26 31 19 28 15 23Z"
          fill="#657653"
          fillOpacity="0.55"
        />

        <path
          d="M58 34 C50 30 43 33 38 40 C47 41 54 38 58 34Z"
          fill="#657653"
          fillOpacity="0.55"
        />

        <path
          d="M35 18 C27 13 26 6 29 2 C36 6 38 11 35 18Z"
          fill="#526548"
          fillOpacity="0.65"
        />
      </svg>
    </motion.div>
  );
}

export default function FarmFieldBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* =====================================================
          GLOW CENTRAL
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D9BD68]/[0.10]
          blur-[120px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          GRANDES FORMAS DE TERRENO
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-[15%]
          top-[18%]
          h-[360px]
          w-[70%]
          rounded-[45%]
          border
          border-[#657653]/25
          bg-[#657653]/[0.045]
        "
        animate={{
          x: ["0%", "5%", "0%"],
          rotate: [0, 1.5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          -right-[18%]
          top-[28%]
          h-[390px]
          w-[72%]
          rounded-[45%]
          border
          border-[#657653]/20
          bg-[#657653]/[0.035]
        "
        animate={{
          x: ["0%", "-5%", "0%"],
          rotate: [0, -1.5, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          left-[15%]
          bottom-[-18%]
          h-[400px]
          w-[70%]
          rounded-[50%]
          border
          border-[#657653]/20
          bg-[#657653]/[0.04]
        "
        animate={{
          x: ["0%", "4%", "0%"],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SVG PRINCIPAL DEL CAMPO
      ====================================================== */}

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="fieldGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#657653"
              stopOpacity="0.03"
            />

            <stop
              offset="50%"
              stopColor="#657653"
              stopOpacity="0.16"
            />

            <stop
              offset="100%"
              stopColor="#657653"
              stopOpacity="0.03"
            />
          </linearGradient>

          <linearGradient
            id="waterGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#D9BD68"
              stopOpacity="0"
            />

            <stop
              offset="45%"
              stopColor="#D9BD68"
              stopOpacity="0.8"
            />

            <stop
              offset="100%"
              stopColor="#D9BD68"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* =================================================
            SURCOS IZQUIERDOS
        ================================================== */}

        <motion.path
          d="M-100 280 C180 170 380 390 650 250"
          fill="none"
          stroke="url(#fieldGradient)"
          strokeWidth="22"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          animate={{
            x: ["0", "35", "0"],
          }}
          transition={{
            pathLength: {
              duration: 2,
            },
            x: {
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <motion.path
          d="M-100 330 C190 220 390 440 670 300"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.14"
          strokeWidth="3"
          strokeDasharray="15 18"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M-100 385 C190 270 400 500 680 350"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="8 16"
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            SURCOS DERECHOS
        ================================================== */}

        <motion.path
          d="M950 270 C1210 400 1390 160 1710 290"
          fill="none"
          stroke="url(#fieldGradient)"
          strokeWidth="22"
          animate={{
            x: ["0", "-35", "0"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M930 325 C1200 450 1400 215 1710 350"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.14"
          strokeWidth="3"
          strokeDasharray="15 18"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M920 380 C1200 510 1400 270 1710 410"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="8 16"
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            GRAN CAMPO INFERIOR
        ================================================== */}

        <motion.path
          d="M-100 650 C260 520 480 780 800 630 C1120 480 1350 720 1700 570"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.11"
          strokeWidth="30"
          animate={{
            x: ["0", "45", "0"],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M-100 700 C260 570 480 830 800 680 C1120 530 1350 770 1700 620"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeDasharray="12 14"
          animate={{
            strokeDashoffset: [0, -160],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            CANAL DE AGUA
        ================================================== */}

        <motion.path
          d="M-150 510 C180 430 390 570 650 500 C900 430 1120 540 1750 450"
          fill="none"
          stroke="#657653"
          strokeOpacity="0.13"
          strokeWidth="10"
        />

        <motion.path
          d="M-150 510 C180 430 390 570 650 500 C900 430 1120 540 1750 450"
          fill="none"
          stroke="url(#waterGradient)"
          strokeWidth="3"
          strokeDasharray="5 25"
          animate={{
            strokeDashoffset: [0, -300],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            SEGUNDO CANAL
        ================================================== */}

        <motion.path
          d="M-150 555 C180 475 390 615 650 545 C900 475 1120 585 1750 495"
          fill="none"
          stroke="#D9BD68"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="3 35"
          animate={{
            strokeDashoffset: [0, -250],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* =====================================================
          PLANTAS ANIMADAS
      ====================================================== */}

      <Plant left="17%" top="31%" scale={0.7} delay={0} />
      <Plant left="25%" top="39%" scale={0.55} delay={1} />
      <Plant left="76%" top="32%" scale={0.65} delay={0.5} />
      <Plant left="82%" top="43%" scale={0.5} delay={1.5} />
      <Plant left="29%" top="73%" scale={0.7} delay={0.8} />
      <Plant left="72%" top="70%" scale={0.65} delay={1.2} />

      {/* =====================================================
          PARTÍCULAS FLOTANTES
      ====================================================== */}

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          style={{
            left: particle.x,
            top: particle.y,
          }}
          className="
            absolute
            h-1.5
            w-1.5
            rounded-full
            bg-[#D9BD68]
          "
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            opacity: [0.15, 0.75, 0.15],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 4 + index * 0.35,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          TECNOLOGÍAS
      ====================================================== */}

      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          style={{
            left: tech.x,
            top: tech.y,
          }}
          className="
            absolute
            hidden
            items-center
            gap-2
            md:flex
          "
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8 + tech.delay,
            duration: 0.7,
          }}
          animate={{
            y: [0, -8, 0],
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#D9BD68]"
          />

          <span className="text-[10px] font-semibold tracking-[0.22em] text-[#526548]/65">
            {tech.name}
          </span>
        </motion.div>
      ))}

      {/* =====================================================
          VIÑETA CENTRAL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(243,240,231,0.96)_0%,rgba(243,240,231,0.82)_28%,rgba(243,240,231,0.35)_65%,rgba(243,240,231,0)_100%)]
        "
      />

      {/* Bordes */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F3F0E7] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F3F0E7] to-transparent" />
    </div>
  );
}
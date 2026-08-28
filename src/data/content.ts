import { Code2, Cpu, Shield, Wrench } from "lucide-react";

export const siteConfig = {
  name: "David Cungniago",
  username: "davidcungniago",
  hostname: "security",
  role: "Cybersecurity Enthusiast",
  tagline: "Web Security",
  status: "Available for opportunities",
  email: "cndavid784@gmail.com",
  github: "https://github.com/davidcungniago",
};

export const aboutData = {
  summary: "Mahasiswa Pradita University dengan fokus Web/Software Security. Selalu antusias membedah sistem untuk menemukan kerentanan dan membangun solusi yang aman.",
  interests: [
    "Web Application Penetration Testing",
    "Forensic",
    "CTF Challenges",
  ]
};

export const skillsData = [
  {
    category: "Security",
    icon: Shield,
    items: [
      { name: "Web App Security (OWASP Top 10)", level: 95 },
      { name: "SQL Injection & XSS", level: 90 },
      { name: "Vulnerability Assessment", level: 90 },
      { name: "Penetration Testing basics", level: 95 },
    ]
  },

  {
    category: "Development",
    icon: Code2,
    items: [
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "React/Next.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PHP & Node.js", level: 70 },
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Burp Suite & Nmap", level: 90 },
      { name: "Wireshark", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Git & Linux CLI", level: 90 },
    ]
  }
];

export const projectsData = [
 {
    id: "proj-1",
    slug: "obe-management-security",
    title: "OBE-Management System Security Assessment",
    date: "2025-08-15",
    tags: ["Web Security", "OWASP", "Pentest"],
    status: "high", // success, medium, high
    description:
      "Melakukan security assessment komprehensif pada sistem ERP kampus. Menemukan dan meremediasi kerentanan IDOR, mengimplementasikan rate limiting, dan mengamankan endpoint API dari eksploitasi.",
    link: "https://github.com",
    image: "/assets/placeholder-1.jpg",
    detail: {
      overview:
        "Security assessment internal terhadap OBE-Management System, sebuah platform akademik berbasis arsitektur microservices (.NET, Next.js, PostgreSQL, Docker, Ocelot API Gateway, Nginx). Assessment dilakukan oleh tim Security QA/QC internal dengan merujuk pada standar OWASP Top 10, OWASP ASVS, dan Docker Security Best Practices. Tujuannya adalah mengidentifikasi kelemahan arsitektur, kerentanan pada level aplikasi, dan misconfiguration container, lalu langsung menerapkan remediasi (security hardening) untuk mencapai arsitektur Defense in Depth.",
      problem:
        "Sistem ini menyimpan data pribadi (PII) mahasiswa dan dosen dalam jumlah besar, sehingga celah keamanan sekecil apapun berisiko tinggi terhadap kebocoran data maupun penyalahgunaan hak akses. Temuan awal menunjukkan belum adanya prinsip Zero Trust antar service internal, container yang berjalan dengan privilege berlebih, serta minimnya proteksi terhadap serangan web umum seperti brute force, XSS, dan session hijacking.",
      approach:
        "Pengujian dilakukan dengan kombinasi SAST (static analysis terhadap source code) dan DAST (dynamic testing terhadap aplikasi berjalan), mencakup pengujian pada layer autentikasi, otorisasi antar-microservice, API gateway, hingga konfigurasi container. Setiap temuan diverifikasi tingkat keterexploitasiannya sebelum masuk ke tahap remediasi, mengikuti pendekatan Defense in Depth di tiga layer: infrastruktur (hardening container), komunikasi internal (autentikasi antar microservice), dan aplikasi/edge (rate limiting, security headers, cookie hardening).",
      impact:
        "Assessment menemukan total 11 temuan (1 Critical, 3 High, 1 Medium, dan 6 kategori pengujian yang terbukti sudah aman by design). Seluruh temuan yang berisiko — termasuk celah bypass autentikasi tingkat Critical — berhasil diremediasi sepenuhnya sebelum sistem naik ke tahap produksi, secara signifikan mengurangi permukaan serangan baik dari sisi eksternal maupun internal.",
      gallery: [],
      report: {
        executiveSummary:
          "Assessment ini mengungkap sejumlah kerentanan critical dan high-severity yang tersebar di lapisan infrastruktur, API gateway, microservices, dan modul autentikasi — termasuk belum diterapkannya arsitektur Zero Trust antar service internal, container yang berjalan dengan privilege berlebih, dan minimnya proteksi terhadap serangan web umum. Segera setelah temuan diidentifikasi, tim security langsung melakukan security hardening menyeluruh: container di-restrict dari root privilege dengan resource cap untuk mencegah DoS, komunikasi antar microservice internal diamankan dengan autentikasi JWT bergaya Zero Trust, serta diterapkan rate limiting ketat di API gateway, HTTP security headers, dan cookie hardening pada layer aplikasi. Seluruh temuan berhasil diremediasi sepenuhnya.",
        methodology:
          "Pengujian dilakukan menggunakan kombinasi Static Application Security Testing (SAST) dan Dynamic Application Security Testing (DAST), dengan referensi utama OWASP Top 10, OWASP ASVS, dan Docker Security Best Practices. Fokus pengujian mencakup access control, autentikasi & manajemen sesi, input validation, konfigurasi container/infrastruktur, serta ketahanan terhadap serangan denial-of-service pada level aplikasi.",
        findings: [
          { category: "Hardcoded Secrets in Repository", severity: "high", status: "Fixed" },
          { category: "Authorization Bypass (Backdoor Token)", severity: "critical", status: "Fixed" },
          { category: "Stored Cross-Site Scripting (XSS)", severity: "info", status: "Verified Secure" },
          { category: "CSV Formula Injection", severity: "high", status: "Verified Secure" },
          { category: "JWT Role Injection & Signature Forgery", severity: "info", status: "Verified Secure" },
          { category: "Broken Object Level Authorization (IDOR)", severity: "high", status: "Fixed" },
          { category: "Missing Rate Limiting", severity: "high", status: "Fixed" },
          { category: "Insecure Token Storage", severity: "info", status: "Verified Secure" },
          { category: "Unrestricted File Upload Size", severity: "info", status: "Verified Secure" },
          { category: "Vulnerable Third-Party Dependencies", severity: "medium", status: "Fixed" },
        ],
        remediation:
          "Remediasi diterapkan berlapis mengikuti prinsip Defense in Depth. Pada level infrastruktur, container di-hardening dengan prinsip least privilege (non-root user) dan resource limit. Pada level komunikasi internal, seluruh microservice diwajibkan melewati autentikasi terverifikasi sebelum bisa saling berkomunikasi (model Zero Trust). Pada level aplikasi, diterapkan rate limiting di API gateway, validasi otorisasi eksplisit di setiap endpoint sensitif, penguatan konfigurasi cookie/session (HttpOnly & Secure flag), serta pembaruan seluruh dependency pihak ketiga yang teridentifikasi rentan ke versi terbaru yang sudah dipatch.",
        lessonsLearned:
          "Project ini memperkuat pemahaman saya bahwa kerentanan paling berbahaya sering kali bukan yang paling rumit secara teknis celah bypass autentikasi tingkat Critical yang ditemukan justru berasal dari mekanisme testing/debugging yang tertinggal di kode dan tidak dibatasi khusus ke environment development. Ini menegaskan pentingnya code review yang ketat sebelum rilis, prinsip least privilege secara konsisten di semua layer (bukan hanya di titik yang terlihat jelas), dan pentingnya defense in depth di mana satu lapisan proteksi gagal, lapisan lain tetap bisa menahan eksploitasi.",
        hasPdf: false,
        pdfUrl: "#" // Kosongkan atau isi link versi PDF sanitized jika ingin ditampilkan
      }
    }
  },
  {
    id: "proj-2",
    slug: "erp-manufacturing-analysis",
    title: "ERP Manufacturing Security Analysis",
    date: "2025-05-20",
    tags: ["Audit", "Risk Assessment", "Network Security"],
    status: "medium",
    description:
      "Analisis keamanan untuk sistem ERP manufaktur. Mengidentifikasi miskonfigurasi pada arsitektur jaringan dan memberikan rekomendasi pengerasan (hardening) sistem serta best practices untuk autentikasi.",
    link: "https://github.com",
    image: "/assets/placeholder-2.jpg",
    detail: {
      overview: "[ISI SENDIRI NANTI] ...",
      problem: "[ISI SENDIRI NANTI] ...",
      approach: "[ISI SENDIRI NANTI] ...",
      impact: "[ISI SENDIRI NANTI] ...",
      gallery: [],
      report: null
    }
  },
  {
    id: "proj-3",
    slug: "safepath-smart-walking-stick",
    title: "SafePath - Smart Walking Stick",
    date: "2025-02-10",
    tags: ["IoT", "ESP32", "Hardware"],
    status: "success",
    description:
      "Proyek IoT tongkat pintar untuk tunanetra yang dilengkapi fitur fall detection dan pelacakan GPS real-time via protokol MQTT yang diamankan.",
    link: "https://github.com",
    image: "/assets/placeholder-3.jpg",
    detail: {
      overview: "[ISI SENDIRI NANTI] ...",
      problem: "[ISI SENDIRI NANTI] ...",
      approach: "[ISI SENDIRI NANTI] ...",
      impact: "[ISI SENDIRI NANTI] ...",
      gallery: [],
      report: null
    }
  },
];
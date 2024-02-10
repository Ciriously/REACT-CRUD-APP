const data = [
  // Existing data
  {
    cveId: "CVE-2024-1234",
    severity: "High",
    cvss: "7.5",
    affectedPackages: ["redis-server", "redis-tools"],
    cweId: "CWE-119",
  },
  {
    cveId: "CVE-2024-5678",
    severity: "CRITICAL",
    cvss: "5.0",
    affectedPackages: ["libblas3", "libarchive13"],
    cweId: "CWE-79",
  },
  // Additional data
  {
    cveId: "CVE-2024-9101",
    severity: "Medium",
    cvss: "4.0",
    affectedPackages: ["libarchive13", "libnode72"],
    cweId: "CWE-200",
  },
  {
    cveId: "CVE-2024-9101",
    severity: "Medium",
    cvss: "4.0",
    affectedPackages: ["apache2", "apache2-bin"],
    cweId: "CWE-200",
  },
  {
    cveId: "CVE-2024-9102",
    severity: "Low",
    cvss: "2.5",
    affectedPackages: ["libssl1.1", "openssl"],
    cweId: "CWE-310",
  },
  {
    cveId: "CVE-2024-9103",
    severity: "High",
    cvss: "7.0",
    affectedPackages: ["mysql-server", "mysql-client"],
    cweId: "CWE-89",
  },
  {
    cveId: "CVE-2024-9104",
    severity: "Critical",
    cvss: "9.0",
    affectedPackages: ["linux-image-generic", "linux-libc-dev"],
    cweId: "CWE-119",
  },
  {
    cveId: "CVE-2024-9105",
    severity: "Medium",
    cvss: "5.0",
    affectedPackages: ["python3.8", "libpython3.8"],
    cweId: "CWE-78",
  },
  {
    cveId: "CVE-2024-9106",
    severity: "High",
    cvss: "7.5",
    affectedPackages: ["nginx", "nginx-common"],
    cweId: "CWE-400",
  },
  {
    cveId: "CVE-2024-9107",
    severity: "Low",
    cvss: "3.0",
    affectedPackages: ["php7.4", "php7.4-cli"],
    cweId: "CWE-79",
  },
  {
    cveId: "CVE-2024-9108",
    severity: "Critical",
    cvss: "10.0",
    affectedPackages: ["docker.io", "containerd"],
    cweId: "CWE-20",
  },
  {
    cveId: "CVE-2024-9109",
    severity: "Medium",
    cvss: "4.5",
    affectedPackages: ["postgresql", "postgresql-client"],
    cweId: "CWE-264",
  },
  {
    cveId: "CVE-2024-9110",
    severity: "High",
    cvss: "8.0",
    affectedPackages: ["nodejs", "npm"],
    cweId: "CWE-94",
  },
];

export default data;

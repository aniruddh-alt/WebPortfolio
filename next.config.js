/** @type {import('next').NextConfig} */
const nextConfig = {
  // Older applications link to /resume.pdf; the file is now the CV.
  async redirects() {
    return [{ source: '/resume.pdf', destination: '/cv.pdf', permanent: true }]
  },
}

module.exports = nextConfig

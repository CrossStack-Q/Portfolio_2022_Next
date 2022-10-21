/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path:'',
    domains: ['raw.githubusercontent.com','skills.thijs.gg'],
  },
}

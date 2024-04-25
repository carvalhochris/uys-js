/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://unlockyoursound.com',
  generateRobotsTxt: true, // (optional)
  exclude: ['/rss', '/wordpress', 'wp-cron.php', 'wp-login.php', 'xmlrpc.php'],
}
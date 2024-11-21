

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const fs = require('fs')
const path = require('path')

async function main() {
  const csvFilePath = path.join(__dirname, 'exoplanetas_relevantes.csv')
  const data = fs.readFileSync(csvFilePath, 'utf-8')

  const lines = data.split('\n').slice(1)
  for (const line of lines) {
    const [
      pl_name, hostname, sy_snum, sy_pnum, discoverymethod, disc_year, disc_facility,
      pl_orbper, pl_orbsmax, pl_rade, pl_bmasse, st_spectype, st_teff, st_rad, st_mass,
      sy_dist, sy_vmag, sy_kmag, sy_gaiamag
    ] = line.split(',')

    await prisma.exoplanet.create({
      data: {
        pl_name,
        hostname,
        sy_snum: parseInt(sy_snum),
        sy_pnum: parseInt(sy_pnum),
        discoverymethod,
        disc_year: parseInt(disc_year),
        disc_facility: disc_facility || null,
        pl_orbper: pl_orbper ? parseFloat(pl_orbper) : null,
        pl_orbsmax: pl_orbsmax ? parseFloat(pl_orbsmax) : null,
        pl_rade: pl_rade ? parseFloat(pl_rade) : null,
        pl_bmasse: pl_bmasse ? parseFloat(pl_bmasse) : null,
        st_spectype: st_spectype || null,
        st_teff: st_teff ? parseFloat(st_teff) : null,
        st_rad: st_rad ? parseFloat(st_rad) : null,
        st_mass: st_mass ? parseFloat(st_mass) : null,
        sy_dist: sy_dist ? parseFloat(sy_dist) : null,
        sy_vmag: sy_vmag ? parseFloat(sy_vmag) : null,
        sy_kmag: sy_kmag ? parseFloat(sy_kmag) : null,
        sy_gaiamag: sy_gaiamag ? parseFloat(sy_gaiamag) : null,
      }
    })
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

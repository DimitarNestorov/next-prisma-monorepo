const { Photon } = require('@prisma/photon')

const photon = new Photon()

module.exports = async (_req, res) => {
  const data = await photon.users.findMany()
  res.json(data)
}

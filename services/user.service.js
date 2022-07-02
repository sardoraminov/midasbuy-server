const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function allUsers() {
  return prisma.user.findMany()
}

function createUser(login, password) {
  return prisma.user.create({
    data: {
      login,
      password
    }
  })
}

module.exports = {
  allUsers,
  createUser
}
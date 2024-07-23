import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "suryanshrao01@gmail.com",
      name:"Suryansh Rao"
    } 
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("!! Query Done !!")
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

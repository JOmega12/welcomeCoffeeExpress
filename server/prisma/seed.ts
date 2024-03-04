import { PrismaClient } from '@prisma/client'
import { encryptPassword } from '../auth.utils';

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.favorite.deleteMany();
  await prisma.coffee.deleteMany();
  await prisma.user.deleteMany();
  const testUsername = await prisma.user.create({
    data: {
        username: 'tester',
        passwordHash: await encryptPassword('testPass'),
    }
  })

  const jenUser = await prisma.user.create({
    data: {
        username: 'jen',
        passwordHash: await encryptPassword('jenHash'),
    }
  })

  const cappucino = await prisma.coffee.create({
    data: {
      title: 'Cappucino',
      instructions: '1 shot espresso, rest water',
      image: 'https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?resize=1200:*',
    }
  })

  const matchaDreamLatte = await prisma.coffee.create({
    data: {
      title: 'Brown Sugar Matcha Dream ',
      instructions: 'Matcha Latte with a pump of brown sugar',
      image: 'https://christieathome.com/wp-content/uploads/2020/12/Brown-Sugar-Boba-Matcha-Latte-10-460x460.jpg',
    }
  })
  
  const brownSugarOatmilk = await prisma.coffee.create({
    data: {
      title: 'Mix coffee with Oatmilk',
      instructions: 'Mix 2 espresso shots with Oatmilk',
      image: 'https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg',
    }
  })

  const VsColdBrew = await prisma.coffee.create({
    data: {
      title: 'Vanilla Creme Cold Brew ',
      instructions: 'Coffee that is brewed overnight with vanilla creme"',
      image: 'https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg',
    }
  })

  const testFavoriteOne = await prisma.favorite.create({
    data: {
      userId: testUsername.id,
      coffeeId: matchaDreamLatte.id
    },
  })
  
  const testFavoriteTwo = await prisma.favorite.create({
    data: {
      userId: testUsername.id,
      coffeeId: brownSugarOatmilk.id
    },
  })
  
  const jenFavoriteOne = await prisma.favorite.create({
    data: {
      userId: jenUser.id,
      coffeeId: brownSugarOatmilk.id
    },
  })
  
}

main()
    .then(() => {
        console.log('seeded')
    }).catch(() => {
        console.log('Something went wrong')
    })

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
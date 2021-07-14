import db from '../db/connection.js'
import Post from '../models/post.js'
import faker from 'faker'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

    // create an array of 20 objects
    // use faker package to generate fake data
    const posts = [...Array(20)].map(item => {
        return {
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
        }
    })
    await Post.insertMany(posts)
    console.log('Created Posts!')

  // close database connection. done.
  db.close()
}

insertData()
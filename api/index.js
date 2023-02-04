const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('../api/routes/user')
const authRoute = require('../api/routes/auth')
const productRoute = require('../api/routes/product')
const cartRoute = require('../api/routes/cart')
const orderRoute = require('../api/routes/order')

dotenv.config()

mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log('DB Connection Successfull'))
  .catch((err) => {
    console.log(err)
  })

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!')
})

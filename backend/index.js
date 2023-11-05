const express = require('express')
require('dotenv').config();
const mongoose=require('mongoose')
const cors = require('cors')
const app= express()
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: 'http://example.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }));
const Port=process.env.PORT || 4000

mongoose.connect(process.env.URI)
.then(()=>console.log('mongoDB connected successfully!!'))
.catch((err)=>console.log(err))


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const restaurantRoutes=require('./routes/restaurantRoutes')
app.use('/restaurants',restaurantRoutes)

const foodItemsRoutes=require('./routes/foodItemsRoutes')
app.use('/food-items',foodItemsRoutes)

const orderRoutes=require('./routes/orderRoutes')
app.use('/order',orderRoutes)

const transactionRoutes=require('./routes/transactionRoutes')
app.use('/transaction',transactionRoutes)

const itemRoutes=require('./routes/itemsRoutes')
app.use('/items',itemRoutes)

app.listen(Port,()=>console.log(`Server is listening on port ${Port}`))
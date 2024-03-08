const yup = require('yup');
const OrderService = require('../services/order-service');
const {sendNotification} = require("../config/rabbitmq.js");
  class OrderController {
    static async create(req, res) {
      try {
        const { user_id, description } = req.body
        if (typeof description !== 'string') {
          throw new yup.ValidationError(['description must be a string'], description, 'description');
        }
        const schema = yup.object({
          user_id: yup.string().required(),
          description: yup.string().required(),
         });
       
        if(!await schema.isValid({ user_id, description })) {
          throw { status: 400, message: 'Validation Fails'}
        }
        const {result, exists} = await OrderService.create({ user_id, description })

        sendNotification('Order Created', exists.email)

        res.status(201).json({
         message: `Order ${result._id} created with success`,
         description: result.description,
        });
      } catch (error) { 
        console.log(error)
        res
          .status(error.status || 500)
          .json({ error: error.message || 'Server Error' });
      }
    }
  }
  
  module.exports = OrderController

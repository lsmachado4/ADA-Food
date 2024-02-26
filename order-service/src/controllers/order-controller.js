const yup = require('yup');
const OrderService = require('../services/order-service');
  class OrderController {
    static async create(req, res) {
      try {
        const schema = yup.object({
          order_id: yup.string().required(),
          user_id: yup.string().required(),
          description: yup.string().required(),
         });
       
         if(!await schema.isValid(req.body)) {
          throw { status: 400, message: 'Validation Fails'}
      }
        const { order_id, user_id, description } = (req.body)
        const result = await OrderService.create({ order_id, user_id, description })
        console.log(result, "result")
        return res.status(201).json({
         message: 'Order created with success',
         details: {
            order_id: result.order_id,
            user_id: result.user_id,
            description: result.description
         }
        });
      } catch (error) { 
        res
          .status(error.status || 500)
          .json({ error: error.message || 'Server Error' });
      }
    }
  }
  
  module.exports = OrderController

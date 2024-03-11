// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Restaurant, RestaurantMetrics, MenuItem, Rating, Order, OrderItem, Customer } = initSchema(schema);

export {
  Restaurant,
  RestaurantMetrics,
  MenuItem,
  Rating,
  Order,
  OrderItem,
  Customer
};
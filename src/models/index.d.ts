import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly cuisineType: string;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly hoursOfOperation?: string | null;
  readonly priceRange?: string | null;
  readonly deliveryOptions?: string | null;
  readonly isActive: boolean;
  readonly metrics?: RestaurantMetrics | null;
  readonly menuItem?: (MenuItem | null)[] | null;
  readonly order?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMetricsId?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly cuisineType: string;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly hoursOfOperation?: string | null;
  readonly priceRange?: string | null;
  readonly deliveryOptions?: string | null;
  readonly isActive: boolean;
  readonly metrics: AsyncItem<RestaurantMetrics | undefined>;
  readonly menuItem: AsyncCollection<MenuItem>;
  readonly order: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMetricsId?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

type EagerRestaurantMetrics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestaurantMetrics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly turnoverRate?: number | null;
  readonly peakHours?: string | null;
  readonly restaurant?: Restaurant | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMetricsRestaurantId?: string | null;
}

type LazyRestaurantMetrics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestaurantMetrics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly turnoverRate?: number | null;
  readonly peakHours?: string | null;
  readonly restaurant: AsyncItem<Restaurant | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMetricsRestaurantId?: string | null;
}

export declare type RestaurantMetrics = LazyLoading extends LazyLoadingDisabled ? EagerRestaurantMetrics : LazyRestaurantMetrics

export declare const RestaurantMetrics: (new (init: ModelInit<RestaurantMetrics>) => RestaurantMetrics) & {
  copyOf(source: RestaurantMetrics, mutator: (draft: MutableModel<RestaurantMetrics>) => MutableModel<RestaurantMetrics> | void): RestaurantMetrics;
}

type EagerMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly special: boolean;
  readonly price: number;
  readonly images?: (string | null)[] | null;
  readonly restaurant?: Restaurant | null;
  readonly ratings?: (Rating | null)[] | null;
  readonly dietaryFlags?: (string | null)[] | null;
  readonly allergens?: (string | null)[] | null;
  readonly orderItem?: (OrderItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMenuItemId?: string | null;
}

type LazyMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly special: boolean;
  readonly price: number;
  readonly images?: (string | null)[] | null;
  readonly restaurant: AsyncItem<Restaurant | undefined>;
  readonly ratings: AsyncCollection<Rating>;
  readonly dietaryFlags?: (string | null)[] | null;
  readonly allergens?: (string | null)[] | null;
  readonly orderItem: AsyncCollection<OrderItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantMenuItemId?: string | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem) & {
  copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem>) => MutableModel<MenuItem> | void): MenuItem;
}

type EagerRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating: number;
  readonly review?: string | null;
  readonly menuItem?: MenuItem | null;
  readonly customer?: Customer | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly menuItemRatingsId?: string | null;
  readonly customerRatingId?: string | null;
}

type LazyRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating: number;
  readonly review?: string | null;
  readonly menuItem: AsyncItem<MenuItem | undefined>;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly menuItemRatingsId?: string | null;
  readonly customerRatingId?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer?: Customer | null;
  readonly restaurant?: Restaurant | null;
  readonly orderItems?: (OrderItem | null)[] | null;
  readonly status: string;
  readonly orderTime: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantOrderId?: string | null;
  readonly customerOrderId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly restaurant: AsyncItem<Restaurant | undefined>;
  readonly orderItems: AsyncCollection<OrderItem>;
  readonly status: string;
  readonly orderTime: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantOrderId?: string | null;
  readonly customerOrderId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly menuItem?: MenuItem | null;
  readonly quantity: number;
  readonly order?: Order | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly menuItemOrderItemId?: string | null;
  readonly orderOrderItemsId?: string | null;
}

type LazyOrderItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly menuItem: AsyncItem<MenuItem | undefined>;
  readonly quantity: number;
  readonly order: AsyncItem<Order | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly menuItemOrderItemId?: string | null;
  readonly orderOrderItemsId?: string | null;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem>) => OrderItem) & {
  copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem>) => MutableModel<OrderItem> | void): OrderItem;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating?: (Rating | null)[] | null;
  readonly order?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating: AsyncCollection<Rating>;
  readonly order: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}
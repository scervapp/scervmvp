/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      city
      state
      zipcode
      geoLat
      geoLong
      cuisineType
      website
      phone
      hoursOfOperation {
        nextToken
        __typename
      }
      priceRange
      deliveryOptions
      isActive
      metrics {
        id
        turnoverRate
        peakHours
        createdAt
        updatedAt
        restaurantMetricsRestaurantId
        __typename
      }
      menuItem {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsId
      __typename
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      city
      state
      zipcode
      geoLat
      geoLong
      cuisineType
      website
      phone
      hoursOfOperation {
        nextToken
        __typename
      }
      priceRange
      deliveryOptions
      isActive
      metrics {
        id
        turnoverRate
        peakHours
        createdAt
        updatedAt
        restaurantMetricsRestaurantId
        __typename
      }
      menuItem {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsId
      __typename
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      city
      state
      zipcode
      geoLat
      geoLong
      cuisineType
      website
      phone
      hoursOfOperation {
        nextToken
        __typename
      }
      priceRange
      deliveryOptions
      isActive
      metrics {
        id
        turnoverRate
        peakHours
        createdAt
        updatedAt
        restaurantMetricsRestaurantId
        __typename
      }
      menuItem {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsId
      __typename
    }
  }
`;
export const createRestaurantMetrics = /* GraphQL */ `
  mutation CreateRestaurantMetrics(
    $input: CreateRestaurantMetricsInput!
    $condition: ModelRestaurantMetricsConditionInput
  ) {
    createRestaurantMetrics(input: $input, condition: $condition) {
      id
      turnoverRate
      peakHours
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsRestaurantId
      __typename
    }
  }
`;
export const updateRestaurantMetrics = /* GraphQL */ `
  mutation UpdateRestaurantMetrics(
    $input: UpdateRestaurantMetricsInput!
    $condition: ModelRestaurantMetricsConditionInput
  ) {
    updateRestaurantMetrics(input: $input, condition: $condition) {
      id
      turnoverRate
      peakHours
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsRestaurantId
      __typename
    }
  }
`;
export const deleteRestaurantMetrics = /* GraphQL */ `
  mutation DeleteRestaurantMetrics(
    $input: DeleteRestaurantMetricsInput!
    $condition: ModelRestaurantMetricsConditionInput
  ) {
    deleteRestaurantMetrics(input: $input, condition: $condition) {
      id
      turnoverRate
      peakHours
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      createdAt
      updatedAt
      restaurantMetricsRestaurantId
      __typename
    }
  }
`;
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
      id
      name
      description
      special
      price
      images
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      ratings {
        nextToken
        __typename
      }
      dietaryFlags
      allergens
      orderItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMenuItemId
      __typename
    }
  }
`;
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
      id
      name
      description
      special
      price
      images
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      ratings {
        nextToken
        __typename
      }
      dietaryFlags
      allergens
      orderItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMenuItemId
      __typename
    }
  }
`;
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
      id
      name
      description
      special
      price
      images
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      ratings {
        nextToken
        __typename
      }
      dietaryFlags
      allergens
      orderItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      restaurantMenuItemId
      __typename
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      rating
      review
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      menuItemRatingsId
      customerRatingId
      __typename
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      rating
      review
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      menuItemRatingsId
      customerRatingId
      __typename
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      rating
      review
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      menuItemRatingsId
      customerRatingId
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      status
      orderTime
      createdAt
      updatedAt
      restaurantOrderId
      customerOrderId
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      status
      orderTime
      createdAt
      updatedAt
      restaurantOrderId
      customerOrderId
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      customer {
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      status
      orderTime
      createdAt
      updatedAt
      restaurantOrderId
      customerOrderId
      __typename
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      quantity
      order {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      menuItemOrderItemId
      orderOrderItemsId
      __typename
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      quantity
      order {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      menuItemOrderItemId
      orderOrderItemsId
      __typename
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      menuItem {
        id
        name
        description
        special
        price
        images
        dietaryFlags
        allergens
        createdAt
        updatedAt
        restaurantMenuItemId
        __typename
      }
      quantity
      order {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      menuItemOrderItemId
      orderOrderItemsId
      __typename
    }
  }
`;
export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
      id
      number
      status
      seats
      currentOrder {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
      id
      number
      status
      seats
      currentOrder {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
      id
      number
      status
      seats
      currentOrder {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHoursOfOperation = /* GraphQL */ `
  mutation CreateHoursOfOperation(
    $input: CreateHoursOfOperationInput!
    $condition: ModelHoursOfOperationConditionInput
  ) {
    createHoursOfOperation(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      dayOfWeek
      openTime
      closeTime
      createdAt
      updatedAt
      restaurantHoursOfOperationId
      __typename
    }
  }
`;
export const updateHoursOfOperation = /* GraphQL */ `
  mutation UpdateHoursOfOperation(
    $input: UpdateHoursOfOperationInput!
    $condition: ModelHoursOfOperationConditionInput
  ) {
    updateHoursOfOperation(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      dayOfWeek
      openTime
      closeTime
      createdAt
      updatedAt
      restaurantHoursOfOperationId
      __typename
    }
  }
`;
export const deleteHoursOfOperation = /* GraphQL */ `
  mutation DeleteHoursOfOperation(
    $input: DeleteHoursOfOperationInput!
    $condition: ModelHoursOfOperationConditionInput
  ) {
    deleteHoursOfOperation(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        city
        state
        zipcode
        geoLat
        geoLong
        cuisineType
        website
        phone
        priceRange
        deliveryOptions
        isActive
        createdAt
        updatedAt
        restaurantMetricsId
        __typename
      }
      dayOfWeek
      openTime
      closeTime
      createdAt
      updatedAt
      restaurantHoursOfOperationId
      __typename
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      rating {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      rating {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      rating {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;

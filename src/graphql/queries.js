/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRestaurantMetrics = /* GraphQL */ `
  query GetRestaurantMetrics($id: ID!) {
    getRestaurantMetrics(id: $id) {
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
export const listRestaurantMetrics = /* GraphQL */ `
  query ListRestaurantMetrics(
    $filter: ModelRestaurantMetricsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurantMetrics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        turnoverRate
        peakHours
        createdAt
        updatedAt
        restaurantMetricsRestaurantId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        review
        createdAt
        updatedAt
        menuItemRatingsId
        customerRatingId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        orderTime
        createdAt
        updatedAt
        restaurantOrderId
        customerOrderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        createdAt
        updatedAt
        menuItemOrderItemId
        orderOrderItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
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
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        status
        seats
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHoursOfOperation = /* GraphQL */ `
  query GetHoursOfOperation($id: ID!) {
    getHoursOfOperation(id: $id) {
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
export const listHoursOfOperations = /* GraphQL */ `
  query ListHoursOfOperations(
    $filter: ModelHoursOfOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoursOfOperations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dayOfWeek
        openTime
        closeTime
        createdAt
        updatedAt
        restaurantHoursOfOperationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

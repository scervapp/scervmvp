/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
export const onCreateRestaurantMetrics = /* GraphQL */ `
  subscription OnCreateRestaurantMetrics(
    $filter: ModelSubscriptionRestaurantMetricsFilterInput
  ) {
    onCreateRestaurantMetrics(filter: $filter) {
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
export const onUpdateRestaurantMetrics = /* GraphQL */ `
  subscription OnUpdateRestaurantMetrics(
    $filter: ModelSubscriptionRestaurantMetricsFilterInput
  ) {
    onUpdateRestaurantMetrics(filter: $filter) {
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
export const onDeleteRestaurantMetrics = /* GraphQL */ `
  subscription OnDeleteRestaurantMetrics(
    $filter: ModelSubscriptionRestaurantMetricsFilterInput
  ) {
    onDeleteRestaurantMetrics(filter: $filter) {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onCreateMenuItem(filter: $filter) {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onUpdateMenuItem(filter: $filter) {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onDeleteMenuItem(filter: $filter) {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateTable = /* GraphQL */ `
  subscription OnCreateTable($filter: ModelSubscriptionTableFilterInput) {
    onCreateTable(filter: $filter) {
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
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable($filter: ModelSubscriptionTableFilterInput) {
    onUpdateTable(filter: $filter) {
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
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable($filter: ModelSubscriptionTableFilterInput) {
    onDeleteTable(filter: $filter) {
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
export const onCreateHoursOfOperation = /* GraphQL */ `
  subscription OnCreateHoursOfOperation(
    $filter: ModelSubscriptionHoursOfOperationFilterInput
  ) {
    onCreateHoursOfOperation(filter: $filter) {
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
export const onUpdateHoursOfOperation = /* GraphQL */ `
  subscription OnUpdateHoursOfOperation(
    $filter: ModelSubscriptionHoursOfOperationFilterInput
  ) {
    onUpdateHoursOfOperation(filter: $filter) {
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
export const onDeleteHoursOfOperation = /* GraphQL */ `
  subscription OnDeleteHoursOfOperation(
    $filter: ModelSubscriptionHoursOfOperationFilterInput
  ) {
    onDeleteHoursOfOperation(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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

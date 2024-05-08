Feature: Ecommerce validation

  Scenario: Place the Order
    Given Login to ecommerce application with "userbilling09@gmail.com" and "Test@123"
    When add "ZARA COAT 3" to the cart
    Then verify "ZARA COAT 3" is displayed in the cart
    When Enter valid details and place the Order
    Then verify order in present in the order history

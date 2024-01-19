import sys

quantityA = 0
quantityB = 0
quantityC = 0
reply = "yes"

# User input
while reply.lower() == "yes":
    name = input("Enter the product name: ")
    if name == "A":
        quantityA += int(input("Enter the product quantity: "))
    elif name == "B":
        quantityB += int(input("Enter the product quantity: "))
    elif name == "C":
        quantityC += int(input("Enter the product quantity: "))
    reply = input("Will you buy more products? ")

ans = input("Do you want the products to be wrapped as a gift?")

# Calculating total price before discount
totalPrice = quantityA * 20 + quantityB * 40 + quantityC * 50

# Calculating total quantity
totalQuant = quantityA + quantityB + quantityC

# These prices will get calculated only if the customer is eligible for discount
totalPrice1 = sys.maxsize
totalPrice2 = sys.maxsize
totalPrice3 = sys.maxsize
totalPrice4 = sys.maxsize

# TASK - 1

# "flat_10_discount": If cart total exceeds $200, apply a flat $10 discount on the cart total.
if totalPrice > 200:
    totalPrice1 = totalPrice - totalPrice * 0.1

# "bulk_10_discount": If total quantity exceeds 20 units, apply a 10% discount on the cart total.
if totalQuant > 20:
    totalPrice2 = totalPrice - totalPrice * 0.1

# "bulk_5_discount": If the quantity of any single product exceeds 10 units, apply a 5% discount on that item's total
# price.
discQuantityA = discQuantityB = discQuantityC = 0
if quantityA > 10:
    discQuantityA = quantityA * 20 * 0.05

if quantityB > 10:
    discQuantityB = quantityB * 40 * 0.05

if quantityC > 10:
    discQuantityC = quantityC * 50 * 0.05

totalPrice3 = totalPrice - discQuantityA + discQuantityB + discQuantityC

# "tiered_50_discount": If total quantity exceeds 30 units & any single product quantity greater than 15,
# then apply a 50% discount on products which are above 15 quantities.
# The first 15 quantities have the original price and units above 15 will get a 50% discount.
discQuantityA = discQuantityB = discQuantityC = 0
if totalQuant > 30 and (quantityA > 15 or quantityB > 15 or quantityC > 15):
    if quantityA > 15:
        discQuantityA = quantityA * 20 * 0.5
    if quantityA > 15:
        discQuantityB = quantityB * 40 * 0.5
    if quantityA > 15:
        discQuantityC = quantityC * 50 * 0.5

totalPrice4 = totalPrice - discQuantityA + discQuantityB + discQuantityC

# Calculating the most beneficial amount after giving discount
amount = min(totalPrice, totalPrice1, totalPrice2, totalPrice3, totalPrice4)

# Assigning the name of the applied discount to the discount variable
discount = None
if amount == totalPrice:
    discount = "None"
elif amount == totalPrice1:
    discount = "flat_10_discount"
elif amount == totalPrice2:
    discount = "bulk_10_discount"
elif amount == totalPrice3:
    discount = "bulk_5_discount"
elif amount == totalPrice4:
    discount = "tiered_50_discount"

# Calculating the gift wrap fee
giftWrap = 0
if ans.lower() == "yes":
    giftWrap = totalQuant

# Calculating the shipping fee
shipping = 1
extra = 0

if totalQuant > 10:
    shipping = totalQuant / 10
    if totalQuant % 10 > 0:
        extra += 1

shipping = (shipping + extra) * 5

# Calculating the total fee
totalFee = giftWrap + shipping + amount

# OUTPUT
if quantityA > 0:
    print(f"Product: A Quantity of A = {quantityA} units")

if quantityB > 0:
    print(f"Product: B Quantity of B = {quantityB} units")

if quantityC > 0:
    print(f"Product: C Quantity of C = {quantityC} units")

print(
    f"Subtotal: {totalPrice}, discount name: {discount}, amount after discount: {amount}, shipping fee: {shipping}, gift wrap fee: {giftWrap}, Total: {totalFee} "
)
# Subtotal refers to total amount before discount

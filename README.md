# Palm Clothing
[Live Demo](http://wallstreet-bets.herokuapp.com/#/)

E-Commerce Store allows users to browse the store, add/remove items from the cart, and purchase items using Stripe.


## Technologies

- Frontend: React, Hooks, Typescript, ContextAPI
- Backend: Node, Express, MongoDB
- [Stripe API](https://stripe.com/docs)

Palm Clothing was built with a Node and Express on the backend, utilizing a MongoDB for data storage, with a React for a dynamic frontend and ContextAPI for state management. Stripe API was used to allow the users to go through the user experience of checking items from a cart with a fake credit card to allow purchase.

![](palmclothing-splash.gif)

## Features

- Secure frontend to backend user authentication using JWT and BCRYPT
- Simulate frontend to backend store checkout using Stripe API
- Aethetic UI Design of Home Page
- Allows Users to dynamically add, remove, and change number of items in their cart
- Optimizing Performance through React Hooks(useMemo, useCallback) and Code Splitting

### Cart State Management using Context API
 
 Once a user logs in, they are able to view a visualization of their chart balance. They are also able to see general news, as well as stock/comapnies that they follow or own.
```javascript
interface ICart {
  hidden: boolean,
  toggleHidden: Function,
  cartItems: ShopItem[] | [],
  addItem: Function,
  removeItem: Function,
  clearCartItem: Function ,
  cartItemsCount: number,
  totalCost: number,
}

interface ICartProps {
  children: React.ReactNode;
}

export const CartContext = createContext<ICart>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCartItem: () => {},
  cartItemsCount: 0,
  totalCost: 0
})

const CartProvider: React.FC<ICartProps> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Array<ShopItem|any>> ([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0)

  const toggleHidden = () => setHidden(!hidden);

  const addItem = (item: ShopItem) => {
    setCartItems(addItemToCart(cartItems, item));
    setTotalCost(addPriceToTotal(totalCost, item.price));
    setCartItemsCount(addItemToCount(cartItemsCount, 1));
  };

  const removeItem = (item: ShopItem) => {
    setCartItems(removeItemFromCart(cartItems, item));
    setTotalCost(removePriceFromTotal(totalCost, item.price));
    setCartItemsCount(removeItemFromCount(cartItemsCount, 1));
  };

  const clearCartItem = (item: ShopItem) => setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setTotalCost(getCartTotalCost(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{ hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, totalCost, clearCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
```

### Stripe API

```javascript
const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key = 'pk_test_UUiyCylfTQgfFNtvGMHNYxBW00igKn4Yn8';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card');
    });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Chris Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  )
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes });
    }
  })
})
 
}
```
 
### Dashboard
 

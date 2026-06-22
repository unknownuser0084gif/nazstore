import { lazy } from "react";
import withSuspense from "./WithSuspense";
import UserGuardLayout from "./UserGuardLayout"
import CheckoutGuardLayout from "./CheckoutGuardLayout"
// Pages
const Home = lazy(() => import("../pages/Home"))
const Cart = lazy(() => import("../pages/Cart"))
const FAQs = lazy(() => import("../pages/FAQs"))
const ProductDetails = lazy(() => import("../pages/product/ProductDetailsPage"))
const ProductsPage = lazy(() => import("../pages/product/ProductsPage"))
const NotFound = lazy(() => import("../pages/NotFound"))
const Testpage = lazy(() => import("../pages/Testpage"))
const Login = lazy(() => import("../pages/auth/Login"))
const Register = lazy(() => import("../pages/auth/Register"))
const Otp = lazy(() => import("../pages/auth/OtpPage"))
const ChangePassword = lazy(() => import("../pages/auth/CPPage"))
const EnterPhoneNumber = lazy(() => import("../pages/auth/EnterPNPage"))
const Repair = lazy(() => import("../pages/Repair"))
const ContactUs = lazy(() => import("../pages/ContactUs"))
const Services = lazy(() => import("../pages/Services"))
// user
const Dashboard = lazy(() => import("../pages/user/DashboardPage"))
const Addresses = lazy(() => import("../pages/user/AddressesPage"))
const Favorite = lazy(() => import("../pages/user/FavoritesPage"))
const Information = lazy(() => import("../pages/user/InformationPage"))
const Orders = lazy(() => import("../pages/user/OrdersPage"))
const Tickets = lazy(() => import("../pages/user/TicketsPage"))
const Transactions = lazy(() => import("../pages/user/TransactionsPage"))
// checkout
const Checkout = lazy(() => import("../pages/checkout/CheckoutPage"))
const Success = lazy(() => import("../pages/checkout/SuccessPage"))
const Fail = lazy(() => import("../pages/checkout/FailPage"))
const Payment = lazy(() => import("../pages/checkout/PaymentPage"))

// SET ROUTES
const routes = [
       // home pages 
       { path: "/", element: withSuspense(Home) },
       { path: "/cart", element: withSuspense(Cart) },
       { path: "/faqs", element: withSuspense(FAQs) },
       { path: "/contact-us", element: withSuspense(ContactUs) },
       { path: "/services", element: withSuspense(Services) },
       { path: "/repair", element: withSuspense(Repair) },// repair page
       { path: "*", element: withSuspense(NotFound) }, // 404 page
       // products pages
       { path: "/product/:slug", element: withSuspense(ProductDetails) },
       { path: "/products", element: withSuspense(ProductsPage) },
       // authentication pages
       { path: "/sign-in", element: withSuspense(Login) },
       { path: "/sign-up", element: withSuspense(Register) },
       { path: "/otp", element: withSuspense(Otp) },
       { path: "/change-password", element: withSuspense(ChangePassword) },
       { path: "/enter-phone-number", element: withSuspense(EnterPhoneNumber) },
       // user panel pages
       {
              path: "/user-panel",
              element: <UserGuardLayout />,
              children: [
                     { index: true, element: withSuspense(Dashboard) },
                     { path: "addresses", element: withSuspense(Addresses) },
                     { path: "favorites", element: withSuspense(Favorite) },
                     { path: "information", element: withSuspense(Information) }, ,
                     { path: "orders", element: withSuspense(Orders) },
                     { path: "tickets", element: withSuspense(Tickets) },
                     { path: "transactions", element: withSuspense(Transactions) },
              ]
       },
       // checkout out pages
       {
              path: "/checkout",
              element: <CheckoutGuardLayout />,
              children: [
                     { index: true, element: withSuspense(Checkout) },
                     { path: "success", element: withSuspense(Success) },
                     { path: "fail", element: withSuspense(Fail) },
                     { path: "payment", element: withSuspense(Payment) },
              ]
       },
       // testing page
       { path: "/test", element: <Testpage /> },
];
export default routes;
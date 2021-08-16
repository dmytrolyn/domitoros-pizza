import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Loading from '../Loading/Loading';

const PizzasContainer = React.lazy(() => import('../../pages/Pizzas/PizzasContainer'));
const DrinksContainer = React.lazy(() => import('../../pages/Drinks/DrinksContainer'));
const DessertsContainer = React.lazy(() => import('../../pages/Desserts/DessertsContainer'));
const ContactsContainer = React.lazy(() => import('../../pages/Contacts/ContactsContainer'));
const IndexContainer = React.lazy(() => import('../../pages/Index/IndexContainer'));
const CheckoutContainer = React.lazy(() => import('../../pages/Checkout/CheckoutContainer'));
const HistoryContainer = React.lazy(() => import('../../pages/History/HistoryContainer'));
const ProfileContainer = React.lazy(() => import('../../pages/Profile/ProfileContainer'));

const MainBlock = () => {
    return (
        <main className="content">
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={IndexContainer} />
                    <Route path="/pizzas" component={PizzasContainer} />
                    <Route path="/drinks" component={DrinksContainer} />
                    <Route path="/desserts" component={DessertsContainer} />
                    <Route path="/contacts" component={ContactsContainer} />
                    <Route path="/checkout" component={CheckoutContainer} />
                    <Route path="/history" component={HistoryContainer} />
                    <Route path="/profile" component={ProfileContainer} />
                    <Route path="/" component={() => <div>Page not found</div>} />
                </Switch>
            </Suspense>
        </main>
    )
}

export default MainBlock;
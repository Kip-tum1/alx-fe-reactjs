const NestedRoutesExample = () => (
    <Router>
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <Switch>
                {/* Route to Dashboard component */}
                <Route path="/dashboard" component={Dashboard} />
                {/* Default route to Home component */}
                <Route path="/">
                    <h2>Home</h2>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default NestedRoutesExample;
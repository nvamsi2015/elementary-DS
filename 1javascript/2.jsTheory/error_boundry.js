// as you run into error you entire application goes to  blank to prevent this we use error boundries

// in fetch request we can do .catch on promise to catch error and you can handle the error directly inside the component where you are making the request. 
//  but sometimes it's the best way bc you have error logic, loading logic inside the component which muddies the things little bit.
//  error boundries comes here, they are great in catching error without being part of your component bc they live outside of your component. 




import React from 'react'

class ErrorBoundry extends React.Components {
    state = {hasError:true} 

    static getDerivedStateFromError(error) {    // thrown error comes here as argument, we are not using that error here we are only updating hasError true for simplicity 
        return {hasError: true}
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render(){
        if (this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundry

// error boundry is just a component that you create in react. 
// it must be a class component to take advantage of static getDerivedStateFromError method that build into a class component
// anytime this component or children of this component throw an error instead of showing blank showing the blank page in the ui it will call the getDerivedStateFromError method 
// and allow you to update the state of the ErrorBoundry component based on the error that happened in the children of the ErrorBoundry children.
//  state can be single boolean to toggle hasError true/false. 

// and in the render method we care about this.props.fallback which is a passed fallback component to render it there is error, no error = render children. 
//  componentDidCatch will also get called evertime when error occurs, main diff is getDerivedStateFromError updates state, componentDidCatch runs some specific code. 
//  in most cases like sending logs to server or logging your database or reporting systems, rightknow we only consoled, if we go ans see in browser you can see the error and see entire stacktrace of components of error.

// you can make error boundry with complex use cases also but this is most simple and all you need. 

export default function App() {
    return(
        <Grid>
            <Card>
                <Suspence fallback="Loading">
                    <Data types = "Users" hasError />
                </Suspence>
            </Card>

            <Card>
                <Suspence fallback="Loading">
                    <Data types = "Comments" hasError />
                </Suspence>
            </Card>

            <Card>
                <Suspence fallback="Loading">
                    <Data types = "Posts" hasError />
                </Suspence>
            </Card>
        </Grid>
    )
}

export default function App() {
    return(
        <Grid>
            <Card>
                <ErrorBoundry fallback='Users Component Error'>
                    <Suspence fallback="Loading">
                        <Data types = "Users" hasError />
                    </Suspence>
                </ErrorBoundry>
            </Card>

            <Card>
                <ErrorBoundry fallback='Comments Component Error'>
                    <Suspence fallback="Loading">
                        <Data types = "Comments" hasError />
                    </Suspence>
                </ErrorBoundry>
            </Card>

            <Card>
                <ErrorBoundry fallback='Posts Component Error'>    
                    <Suspence fallback="Loading">
                        <Data types = "Posts" hasError />
                    </Suspence>
                </ErrorBoundry>
            </Card>
        </Grid>
    )
}

//  Fallback what we passes into the error boundary will get rendered instead of whole page blank
//  Error boundry is acutally wrapping that data component

// Suspense fallback is going to get rendered anytime we are in loading state. Errorboundry fallback when we get error.

//  one other use case is to wrap the whole app 

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ErrorBoundry fallback="There was an error">
            <App/>
        </ErrorBoundry>
    </React.StrictMode>
)

// now user will be notified with "the There was an error" when ever error happens to let the user know.


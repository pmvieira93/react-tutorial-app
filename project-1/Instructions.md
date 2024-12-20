# UI Kit

Follow the instructions component by component, make sure the component's test pass before moving on to the next section.
Create the following Components such that we have a functioning basic UI Kit:

## Link


    Start by importing the Link component in the index.js and using it in the App component for the tests to pass
    Should return an <a> element
    That element should have the provided text.
    It should also set the href attribute.
    It should set the class to ui-link which you can find in the index.css

For example: <Link href="https://react-tutorial.app">Shop online</Link> should render an <a href="https://react-tutorial.app" class="ui-link">Shop online</a> element.


## Button


    Should generate a <button> element with the text provided.
    It should also set the type and disabled attributes as they are received from the props.
    It should set the class to ui-button


## Container


    Should render a <div> element that wraps everything inside it.
    Should have the class ui-container

This is an example of what wrapping means <Container><p>content</p></Container>. This would end up rendering: <div class="ui-container"><p>content</p></div>


## Input


    Should render an <input /> element.
    Should set the type to type="text" by default (when the type prop has not been specified).
    It should also let the user change the type, so <Input type="email" /> should override the default type and set it to type="email".
    It should also accept the placeholder and name attributes.
    It should set the class to ui-textfield


# Notes


    Make sure to use the Components at least once in the <App /> Component for it to pass the tests.
    Make sure to use the classes provided in the index.css. For example: <Button /> needs to have the class ui-button on the <button> it renders.
    You do NOT need to import the index.css as it is automatically injected in the page.
    We also recommend that you experiment with the different Components & attributes and see how they work in the browser preview.


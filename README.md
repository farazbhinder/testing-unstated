#### Problem:

I want to set state in store.js by calling its function setList1 from componentDidMount, and on upon setting the list1 would like the component get rendered again as state has changed and component is subscribed to container... but I need to do page refresh to get the list displayed...

1. Am I calling the function setList1 of store.js correctly from componentDidMount of App.js correctly?
2. Why isn't my App component re-rendering when the setList1 is called from componentDidMount?

#### How to run:

1. `yarn start`
2. On firefox, open dev tools (F12), go to storage tab > local storage > localhost
3. Right click on appState and Delete All
4. Open console tab
5. Refresh page, appState will be set now --- but list1 is not displayed? on pressing F5 again, list gets displayed...

#### Approach A

1. Move fetching axios call to the container (store.js) in a function `fetchList1`
2. Call this function `fetchList1` from App.js (make sure to call this only if store state variabke `list1` is null - to avoid looping render of App.js)
3. Pass the `list1` as props to ListComponent from App.js  
   P.S. We didn't use local storage in store.js, so state is just being managed while app is running - not in web browser's local storage.

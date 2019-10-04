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

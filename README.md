# ServiceNow-cypress-automation


## Iframe issue
https://github.com/cypress-io/cypress/issues/969

https://github.com/cypress-io/cypress/issues/136

https://docs.cypress.io/guides/references/known-issues.html#Iframes




## Uncaught errors 
Uncaught ReferenceError: angular is not defined

This error originated from your application code, not from Cypress.

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the 'uncaught:exception' event.

https://on.cypress.io/uncaught-exception-from-application
Scenario: User successfully sgning up
Given the User has entered an email
Given the User has enterd a password
When the Users press "Sign up"
Then Users is signed up

Scenario: User did not successfully signed up
Given the User has entered an email
Given the User has enterd a password
When the Users press "Sign up"
Then Users is not signed up


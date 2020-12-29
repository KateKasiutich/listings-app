Scenario: User trying to login with correct data
Given the User has entered an email
Given the User has enterd a password
When the Users press "Login"
Then Users is logged in

Scenario: User trying to login with wrong data
Given the User has entered an email
Given the User has enterd a password
When the Users press "Login"
Then Users is not logged in
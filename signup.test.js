When("{user} opens sign up form", function(user) {
    user.EnterEmail({email: "new@gmail.com"})
})

When("{user} opens sign up form", function(user) {
    user.EnterEmail({email: "failgmail.com"})
})


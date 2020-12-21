When("{user} opens login form", function(user) {
    user.EnterEmail({email: "new@gmail.com"})
})

When("{user} opens login form", function(user) {
    user.EnterEmail({email: "fail@gmail.com"})
})
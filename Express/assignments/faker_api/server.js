const express = require("express");
const { faker } = require("@faker-js/faker")
const app = express();
const port = 8000;

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
})

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    }
})

const getBoth = () => {
    const company = createCompany()
    const user = createUser()
    return {
        user: user,
        company: company,
    }
}



// ROUTES
app.get("/api/user/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    res.json(getBoth());
})


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

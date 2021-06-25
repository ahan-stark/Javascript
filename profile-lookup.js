var contacts=[
    {
        "firstname":"Akira",
        "lastname":"Laine",
        "number":"0543236543",
        "likes":["Pizza","Coding","Brownie"]
    },

    {
        "firstname":"Ahan",
        "lastname":"Stark",
        "number":"0548736543",
        "likes":["Movies","Gaming","Cricket"]
    },
    {
        "firstname":"Tony",
        "lastname":"Stark",
        "number":"0543546543",
        "likes":["AI","Tech","Brownie"]
    },
    {
    "firstname":"Steve",
    "lastname":"Rogers",
    "number":"05435841243",
    "likes":["Fly","Leading","Fight"]
    },
];

function lookup(name,prop)
{
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i].firstname==name)
        {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such conatct"; 
}
var data=lookup("Ahan","likes");
console.log(data);
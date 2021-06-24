const dbConfig = {
    user: "wsadmin",
    password: "Adm!nP@ssw0rd",
    server: "192.168.11.110",
    database: "BS_API_Enquiries",
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'MSI'
    },
};

module.exports = dbConfig;
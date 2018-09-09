var connection = require("/connection.js");

var orm ={
        

selectAll : function(){
        return connection.db("SELECT * FROM burgers");
},

insertOne: function(value){
        return connection.db("INSERT INTO burgers (" + value + ")");
},

updateOne: function(id, devoured){
         return connection.db("UPDATE burgers SET devoured = " + devoured + "WHERE id = " + id ) ;
}
}



module.exports = orm;
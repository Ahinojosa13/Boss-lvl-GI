// Data security exercise. 
// Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly.

// The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public 

// function. The ssn property should not be accessible at all. Creating private objects and private properties helps you control who has access to what 
// data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' 
// or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they 
// definitely shouldn't have access to their ssn.


function object(){
    var pii = {                                     //The object has two properties: name and ssn
        name: 'Anthony Hinojosa',
        ssn: '312-13-2000'
    };
    return{                                        // By adding line 17-21 it'll control the returns to only give name and hide ssn if called by getName 
        getName: function() {
            return pii.name;                        
        }
    };    
}

var UserPii = object();
console.log(UserPii.getName()); //  Anthony Hinojosa
console.log(UserPii.ssn); //"undefined"             //Since I added the controlled return it'll only the properties listed 
console.log(UserPii.pii); //"undefined" 

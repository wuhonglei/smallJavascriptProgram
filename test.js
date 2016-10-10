var createPet = function(name) { // Outer function defines a variable called "name"
    return {
        setName: function(name) { // Enclosed function also defines a variable called "name"
            name = name; // ??? How do we access the "name" defined by the outer function ???
        }, 
        getName: function() {
        	return name;
        }
    }
}
var pet = createPet("wuhonglei");
pet.getName();
pet.setName("linjian");
pet.getName();

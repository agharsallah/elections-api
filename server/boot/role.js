module.exports = function(app) {

  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var User = app.models.User;



  //create the admin role
     Role.create({
       name: 'admin'
     }, function(err, role) {
       if (err) throw err;

       console.log('Created role:', role);

       //make bob an admin
       role.principals.create({
         principalType: RoleMapping.USER,
         principalId: 1,
       }, function(err, principal) {
         if (err) throw err;

         console.log('Created principal:', principal);
       });
     });
};

this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.incomingMessages : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h2>\n      <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.incomingMessages : depth0)) != null ? stack1.content : stack1), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <form class=\"chat-form\">\n    <input class=\"chat-form-message\" type=\"text\" placeholder=\"Write your message\">\n    <input type=\"submit\" value=\"Send\">\n  </form>\n  \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.incomingMessages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <form class=\"login-form\" method=\"post\">\n    <input class=\"login-form-username\" type=\"text\" placeholder=\"Username\">\n    <input type=\"submit\" value=\"Log In\">\n  </form>";
},"useData":true});
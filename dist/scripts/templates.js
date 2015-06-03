this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return " <form class=\"chat-form\" method=\"post\">\n    <input class=\"chat-form-message\" type=\"text\" placeholder=\"Write your message\">\n    <input type=\"submit\" value=\"Send\">\n  </form>\n  \n  <p>"
    + this.escapeExpression(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"data","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <form class=\"login-form\" method=\"post\">\n    <input class=\"login-form-username\" type=\"text\" placeholder=\"Username\">\n    <input type=\"submit\" value=\"Log In\">\n  </form>";
},"useData":true});
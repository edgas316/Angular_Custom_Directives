# Angular_Custom_Directives
###### Directive Categories
- **DOM-Driven Directives** - All about DOM Manipulation
- **Behavior-Driven Directives** - All about handling **DOM Events**
- **Data-Driven Directives** - All about data, using other directives and a controller

###### Directive Building Blocks
> $compile > DDO (return{}) > template > scope
###### The $compile provider
> "Compiles an HTML into JavaScript string and produces a template function, which can then be used to link scope and the template together

###### $compile provider relies on a Directive Definition Object (DDO)
###### Directive Categories
- Defines the template for the directive
- Can include DOM manipulation code
- Can define a controller for the directive
- Controls the directive's scope
- Defines how the directive can be used
- More...
###### Key DDO Properties
- restrict
- template
- templateUrl
- scope
- controller
- link - (DOM manipulation)

###### Data Binding in Dirrectives
- '@' - one way binding passes string to directive
- '=' - two way binding passes object to and can expect from a directive 
- '&' - passing/attaching an event/function to a directive

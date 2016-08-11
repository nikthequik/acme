describe('optIn directive', function() {

    var scope,
        element,
        compiled,
        html,
        img;

    beforeEach(module("acme"));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        img = "Logo";
        html = "<opt-in>" + img + "</opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));

    it('should render element, contain a form with 3 inputs, and transclude a logo', function(){
    	console.log(element);
        expect(element.find('input').length).toBe(3);
    })
});

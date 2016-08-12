describe('optIn directive', function() {

    var scope,
        element,
        compiled,
        html,
        img;

    beforeEach(module("acme"));
    beforeEach(module('templates/opt-in.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        img = "Logo";
        html = "<opt-in>" + img + "</opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));

    it('should contain a form with 3 inputs', function(){
    	console.log(element);
        expect(element.find('input').length).toBe(3);
    });
    it('should transclude a logo', function(){
    	console.log(element);
        expect(element.text()).toContain("Logo");
    });
});

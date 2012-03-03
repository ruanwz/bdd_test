var requirejs = require('requirejs');
requirejs(['../foo', '../bar'],
function   (foo, bar) {
  describe("test spec", function(){
    console.log('cccc');
    it("assert works",function(){
      expect(1+1).toEqual(2);
      console.log('aaaa');
    });
  });
  describe("foo",function(){
    it("found foo",function(){
      expect(foo.name).toEqual('foo');
    });
  });
  describe("bar",function(){
    it("found bar",function(){
      expect(bar.name()).toEqual('bar');
    });
  });


});

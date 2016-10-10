因为内部函数形成了闭包，你可以调用外部函数并且指定外部和内部函数的参数：

```javascript
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
// Think of it like: give me a function that adds 3 to whatever you give it
fn_inside = outside(3); 
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```
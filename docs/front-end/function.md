# 函数式编程

## 什么是函数式编程？

函数式编程（Functional Programming，FP），FP 是编程范式之一，常见的编程范式还有面向过程编程、面向对象编程。

+ 面向对象编程的思维方式：把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承和多态来演示事物事件的联系。

+ **函数式编程的思维方式**：把现实世界的事物和事物之间的**联系**抽象到程序世界（对运算过程进行抽象）。

## 闭包

闭包（Closure）：函数和其周围的状态（词法环境）的引用捆绑在一起形成闭包。可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员。

```javascript
// 函数作为返回值
function makeFn() {
    let msg = 'Hello Function!'
    return function() {
        console.log(msg)
    }
}

const fn = makeFn()
fn()
```


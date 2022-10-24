import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

// SomeNum used to be 'number'; now it's '100'.
type SomeNum = "100" extends `${infer U extends number}` ? U : never;

// SomeBigInt used to be 'bigint'; now it's '100n'.
type SomeBigInt = "100" extends `${infer U extends bigint}` ? U : never;

// SomeBool used to be 'boolean'; now it's 'true'.
type SomeBool = "true" extends `${infer U extends boolean}` ? U : never;

interface Person {
  name: String,
  age: Number;
}

@Component({
  standalone: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css'],
  imports: [ChildComponent]
})
export class StandaloneComponent{
  public testTryGetNumberIfFirst: SomeNum;
  constructor() {
    // 如果这些infer类型出现在模板字符串类型中并且被限制为原始类型，TypeScript 现在将尝试解析出文字类型。
    this.testTryGetNumberIfFirst = 100;
  }

  ngOnInit<T>(X: undefined) {
    let test = this.narrowUnknownishUnion({});
    console.log(test);
    let [a, b, c] = this.chooseRandomly([42, true, "hi!"], [0, false, "bye!"]);
    console.log('[a, b, c]:', [a, b, c]);
//       ^  ^  ^
//       |  |  |
//       |  |  string
//       |  |
//       |  boolean
//       |
//       number

    let objKeys = this.bar({age: 10, name: 'test'});
    console.log('objKeys', objKeys);
    
    //不受约束的泛型不再可分配给{}
    /* let nullKeys = this.bar(X);
    console.log('objKeys', nullKeys); */

    const key = Symbol();
    const numberOrString = Math.random() < 0.5 ? 42 : 'hello';

        const obj = {
            [key]: numberOrString,
        };

        if (typeof obj[key] === 'string') {
            const str = obj[key].toUpperCase();
            console.log(str);
        }
  }

  public test(x: unknown, y: {} | null | undefined, name: {}&number) {
    x = y;
    y = x;
    name //另一个变化是，{} 与任何其他对象类型相交会直接简化为该对象类型。
  }

 //这个改变让我们可以对于控制流分析和类型收束做合理的改进。例如，unknown 可以在条件判断里收束为 {} | null | undefined
  public narrowUnknownishUnion(x: {} | null | undefined) {
    if (x) {
        return 1  // {}
    }
    else {
       return 2  // {} | null | undefined
    }
  }

  public narrowUnknown(x: unknown) {
    if (x) {
        x;  // used to be 'unknown', now '{}'
    }
    else {
        x;  // unknown
    }
  }
  //泛型参数也会同样被收束。当检查一个泛型参数不是 null 或者 undefined 时，TypeScript 会把这个值和 {} 取交集
  public  throwIfNullable<T>(value: T): NonNullable<T> {
    if (value === undefined || value === null) {
        throw Error("Nullable value!");
    }

    // 以前会失败，因为 'T' 不能赋值给 'NonNullable<T>'.
    // 现在可以收束为 'T & {}' 同时现在也会不报错，因为前者就是 'NonNullable<T>'.
    return value;
}
 
  //绑定模式类型推断
  public chooseRandomly<T>(x: T, y: T): T {
    return x;
  }

  public bar(value: {}) {
    return Object.keys(value); // This call throws on null/undefined at runtime.
  }
  //绑定模式中未使用的重命名现在是类型签名中的错误
  // corrct 
  public makePerson({ name, age }: Person){

  }
  //error 您可能会认为 makePerson 显然接受了一个对象，该对象的 name 属性为类型字符串，age 属性为类型数字。然而 makePerson 虽然确实表示它将接受一个具有名称和年龄属性的对象，却没有为它们指定类型，它只是说它将名称和年龄分别重命名为字符串和数字
  /* public makePerson({ name: string, age: number }){

  } */

  public instantiatedExpression() {
      //实例化表达式： 并用给定新的类型参数替换对应的类型参数。任何其他签名都会被删除，在 Array , Map , 和 Set 中同样起作用。
      const ErrorMap = Map<string, Error>;
        // Has type `// Map<string, Error>`
      const errorMap = new ErrorMap();
  }

}

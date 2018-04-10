# [How to wire up TypeScript with React and webpack](http://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

## Step 1
```bash
npm install -g webpack
```

## Step 2
```bash
npm install --save react react-dom @types/react @types/react-dom
```


```bash
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```


## Code snippet

```typescript
import * as React from "react";

// 类型检查 取代react自带的prop-types扩展
export interface HelloProps { 
    compiler: string; 
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
```
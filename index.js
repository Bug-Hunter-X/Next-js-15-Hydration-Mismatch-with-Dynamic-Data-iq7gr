```javascript
// pages/about.js
import {getServerSideProps} from 'next/server';

export default function About({dynamicData}) {
  return (
    <div>
      <h1>About page</h1>
      <p>Some random number : {dynamicData}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const dynamicData = Math.random();
  return {
    props: {
      dynamicData,
    },
  };
}
```
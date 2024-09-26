import { useState } from 'react';

import { Flex } from '@chakra-ui/react';
import ReactLogo from '@images/react.svg?react';

import ViteLogo from '../public/vite.svg?react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flex>
        <a href="https://vitejs.dev" target="_blank">
          <ViteLogo />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo />
        </a>
      </Flex>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

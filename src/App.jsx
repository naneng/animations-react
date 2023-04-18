import './App.css';

// import React, { useState } from 'react';
// import { createRoot } from "react-dom/client";
// import { useSpring, animated } from 'react-spring';
// import './styles.css';

import React, { useState } from 'react'
import useMeasure from './useMeasure'
import {useSpring, animated} from 'react-spring'

const App = () => {
  const [active, toggle] = useState(false)
  const [bind, { width }] = useMeasure()
  const props = useSpring({
    width: active ? width : 0,
    backgroundColor: active ? 'hotpink' : 'turquoise',
    config: {duration: 3000}
  })
  
  return (
    <>
      <div {...bind} class="main" onClick={() => toggle(!active)}>
        <animated.div class="fill" style={{ width: props.width }} />
        <animated.div class="content">
          {props.width.interpolate(x => Math.floor(x * 100 / width))}</animated.div>
      </div>
    </>
  )
}

export default App


// function SpringDemo() {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform: x
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//             })
//             .interpolate(x => `scale(${x})`)
//         }}>
//         Hello React Spring
//       </animated.div>
//     </div>
//   )
// }

// export default SpringDemo

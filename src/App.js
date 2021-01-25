import React from 'react'
import BTLayout from './Container/BTLayout'
import BasicCar from './Container/BasicCar'
import {ContextProvider} from './context'
import BTGioHang from './Container/BTGioHang'
function App() {

  return (
    <div>
      <ContextProvider>
        <BTGioHang/>
        </ContextProvider>
    </div>
  );
}

export default App;

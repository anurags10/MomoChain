import { useState, useEffect } from 'react'
import './App.css'
import { ethers } from 'ethers'
import momo from './momo.png'
import Memos from './component/Memos'
import Buy from './component/Buy'
import abi from './contractJson/Momo.json'
function App() {

  const [state, setstate] = useState({
    provider:null,
    signer:null,
    contract: null
  })

  const [account, setaccount] = useState('Not connected') 

  useEffect(() => {
    const template = async () => {
      const contractAddress = "Deploying contract address";
      const contractAbi = abi.abi;
      //Metamask part

      try {
        const {ethereum} = window;
        const account = ethereum.request({
          method: "eth_requestAccounts"
        })
        window.ethereum.on('account changed',()=>{
          window.location.reload()
        })
        setaccount(account);
        const provider = new ethers.BrowserProvider(ethereum) // read the blockchain after ethers version 6 use BrowserProvider
        const signer = provider.getSigner()  // write the blockchain
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        )
        // console.log(contract);
        setstate({provider,signer,contract});
      } catch (error) {
        alert(error);
      }
    }
    template();
  },[])

  return (
    <div >
    <img src={momo} className="img-fluid" alt=".." width="100%" />
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App

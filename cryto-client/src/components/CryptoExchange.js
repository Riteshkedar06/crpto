import { Button } from '@mui/material'
import React,{useContext} from 'react'
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import EtherCard from './EtherCard';
import {TextField} from '@mui/material';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border-none text-sm white-glassmorphism"
  />
);
function CryptoExchange() {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
    
    const handleSubmit = (e) => {
      const { addressTo, amount, keyword, message } = formData;
  
      e.preventDefault();
  
      if (!addressTo || !amount || !keyword || !message) return;
  
      sendTransaction();
    };
  return (
    <div>
        CryptoExchange
        {!currentAccount && (
        <Button onClick={connectWallet}>
            connect wallet
        </Button>
        )}
        <div>
        <p className="text-black font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-black font-semibold text-lg mt-1">
                  Ethereum
                </p>
                <EtherCard address={shortenAddress(currentAccount)}/>
        </div>

        <Input placeholder="Address To" className="border " name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

{/*     
      <TextField
        variant="outlined"
        placeholder="Address To"
        name="addressTo"
        type="text"
        fullWidth
        margin="normal"
        size="small"
        onChange={(e) => handleChange(e, "addressTo")}
      />
      <TextField
        variant="outlined"
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        fullWidth
        margin="normal"
        size="small"
        onChange={(e) => handleChange(e, "amount")}
      />
      <TextField
        variant="outlined"
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        fullWidth
        margin="normal"
        size="small"
        onChange={(e) => handleChange(e, "keyword")}
      />
      <TextField
        variant="outlined"
        placeholder="Enter Message"
        name="message"
        type="text"
        fullWidth
        margin="normal"
        size="small"
        onChange={(e) => handleChange(e, "message")}
      /> */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        size="large"
        style={{ marginTop: "10px" }}
      >
        Send now
      </Button>
 
    </div>
  )
}

export default CryptoExchange
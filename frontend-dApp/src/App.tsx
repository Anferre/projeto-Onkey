import { useState, useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from 'ethers';
import './App.css';
import { MetaMaskInpageProvider } from "@metamask/providers";
import axios from 'axios';
import Ipfs from './components/ipfs';

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}


function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [contract, setContract] = useState<string>('');
  const [tokenURI, setTokenURI] = useState<string | null>(null);
  const [mintData, setMintData] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  // URL to ABAKHUS API
  const api_url = "https://arbitrum.abakhus.io/api";  
  // const api_url = "http://localhost:4002/api";  

  // Your ABAKHUS API-KEY
  const api_key = '9788e4feb4e80f447a76c545eae7c0cf'

  // Your contract deployed at Arbitrum Sepolia
  const contractAddress = '0xe7722879b1EBde58299044636fC7B2C770b3e0b3';
  
  useEffect(() => {
    // Connect with Metamask
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
          if (accounts && accounts.length > 0) {
            setAccount(accounts[0]);
            const provider = new ethers.BrowserProvider(window.ethereum as any);
            const signer = await provider.getSigner();
            setSigner(signer);
            setContract(contractAddress);
            
          } else {
            console.error('No accounts found');
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    connectWallet();

    // Add event listener for account changes
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0 && accounts[0] !== account) {
        setAccount(accounts[0]);
        window.location.reload();
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged as any);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [account]); // Add account to the dependency array
  
  /**
   * Get Tokens By Owner
   */
  const getTokensByOwner = async ()=> {
    try {
      const signature = await signer!.signMessage("Please sign this message to verify your ownership");
      
      const response = await axios.get(`${api_url}/getTokensByOwner`, {
        params: { owner: account, signature },
        headers: {
          'x-api-key': api_key
        }
      });
      
      const tokens = response.data.ret;
      console.log("Tokens: ", tokens.length);
      for (let i = 0; i < tokens.length; i++) {
        const tokenId = tokens[i];
        try {
          const metadataResponse = await axios.get(`${api_url}/getMetadataByTokenId`, {
            params: {owner: account, tokenId},
            headers: {
              'x-api-key': api_key
            }
          });
          const metadata = metadataResponse.data;
          console.log(`Metadata for Token ${tokenId}: `, metadata);
        } catch (err) {
          console.error(`Error fetching metadata for Token ${tokenId}: `, err);
        }
      }
      setTokenURI("No tokens found");
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * mint tokens
   * @returns 
   */
  const mintToken = async () => {
    if (!account) {
      console.error('Account is not connected');
      return;
    }

    try {
      toast.info('Minting token...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const response = await axios.post(`${api_url}/mint`, {
        owner: account,
        data: mintData
      }, {
        headers: {
          'x-api-key': api_key
        }
      });
      
      toast.success('Token minted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Mint response: ", response.data);
      
    } catch (err) {
      toast.error('Token minted error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.error(err);
    }
  };

  /**
   * burn token
   */
  const burnToken = async () => {
    try {
      // Lógica para queimar o token
      toast.info('Burning token...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Burn token");
      const response = await axios.post(`${api_url}/burn`, {
        owner: account,
        id: tokenId
      }, {
        headers: {
          'x-api-key': api_key
        }
      });
      toast.success('Token burned successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log("Burn response: ", response.data);
      // Adicione a lógica de burn aqui
    } catch (err) {
      toast.error('Token burned error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.error(err);
    }
  };

  /**
   * verify ABAKHUS API
   */
  const verifyToken = async () => {
    try {
      toast.info('Verifying token...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Add API key to axios headers
      const response = await axios.get(`${api_url}/verify`, {
        headers: {
          'x-api-key': api_key
        }
      });
 

      console.log("Verify response: ", response.data);
      
      toast.success('Token verified successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error(err);
      toast.error('Error verifying token!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plataforma de Gerenciamento Imobiliário</h1>
        {account ? (
          <div>
          <p>Conectado: {account}</p>
          <p>Contrato: {contract}</p>
          </div>
        ) : (
          <p>Conecte sua MetaMask</p>
        )}
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        
          <input
            type="button"
            value="Verify"
            onClick={verifyToken}
          />
          <input
            type="button"
            value="Get Tokens"
            onClick={getTokensByOwner}
          />
          Nome do Responsável: <input type="text" name="nomeResponsavel" id="nomeResponsavel" />
          CPF: <input type="text" name="cpf" id="cpf" /><br></br>
          Endereço do Responsável: <input type="text" name="enderecoResponsavel" id="enderecoResponsavel" />
          Bairro: <input type="text" name="bairro" id="bairro" /><br></br>
          Região: <input type="text" name="regiao" id="regiao" />
          CEP: <input type="text" name="cep" id="cep" /><br></br>
          Geolocalização: <input type="text" name="geolocalizacao" id="geolocalizacao" /><br></br>
          <textarea
          // cols={50}
          // rows={10}
          // placeholder="Insira o JSON para mint"
          // value={mintData}
          // onChange={(e) => setMintData(e.target.value)}
          />
          <input
            type="button"
            value="Mint"
            onClick={mintToken}
          />
          <input
            placeholder="TokenID para Burn"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
          <input
            type="button"
            value="Burn"
            onClick={burnToken}
          />
        </div>
        
        {tokenURI && (
          <div>
            <p>Token URI: {tokenURI}</p>
          </div>
        )}
        <Ipfs />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;


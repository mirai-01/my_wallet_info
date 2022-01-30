// App.js

// Imports
import Signup from "./Signup";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../Contexts/AuthContext";

// Functional Component
function App() {

  // Return
  return (


    // Auth Provider
    <AuthProvider>
    {/* Container */}
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>

      {/* Div  */}
      <div className="w-100" style={{maxWidth:"400px"}}>

        {/* Signup Component */}
        <Signup />
      </div>
    </Container>
    </AuthProvider>

    
  );
}

// Default Export
export default App;

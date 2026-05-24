[frontend footer.txt](https://github.com/user-attachments/files/28190518/frontend.footer.txt)
[frontend apps.txt](https://github.com/user-attachments/files/28190520/frontend.apps.txt)</>JavaScript

Import { BrowserRouter, Routes, Route } from �react-router-dom�;
Import Home from �./pages/Home�;
Import Login from �./pages/Login�;
Import Signup from �./pages/Signup�;
Import Dashboard from �./pages/Dashboard�;
Import DriverRegister from �./pages/DriverRegister�;

Function App() {
  Return (
    <BrowserRouter>
      <Routes>
        <Route path=�/� element={<Home />} />
        <Route path=�/login� element={<Login />} />
        <Route path=�/signup� element={<Signup />} />
        <Route path=�/dashboard� element={<Dashboard />} />
        <Route path=�/driver-register� element={<DriverRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

Export default App;

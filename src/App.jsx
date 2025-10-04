// EXTERNAL LIBRARY IMPORTS
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Create from './Create'

//  GLOBAL PAGES IMPORTS
import './App.css'
import './assets/css/Main.css'
import './assets/css/sb-admin-2.min.css'
import Loading from './pages/Loading'
import Theme from './components/theme/UI-setting/Theme'

import AdminBreedCreate from './components/tasks/admin/herd/breed/AdminBreedCreate'
import AdminBreedView from './components/tasks/admin/herd/breed/AdminBreedView'
import AdminBreedRead from './components/tasks/admin/herd/breed/AdminBreedRead'

import AdminMilkAdd from './components/tasks/admin/milk/AdminMilkAdd'
import AdminMilkView from './components/tasks/admin/milk/AdminMilkView'
import AdminMilkRead from './components/tasks/admin/milk/AdminMilkRead'

import Edit from './pages/Edit'
import UserManual from './components/manuals/UserManual'
import ModalWindow from './components/ui/modules/ModalWindow'
import Dashboard from './components/home/Dashboard'
import Backup from './components/backup/system/Backup'
import SchemaPdfView from './components/manuals/SchemaPdfView'
import Help from './components/manuals/Help'

// PAYMENTS
import BitcoinPayment from './components/tokens/BitcoinPayment'
import PayPalPayment from './components/tokens/PayPalPayment'

// import Navigation from './ui/Navigation'


// PAGES IMPORTS
import UserDashboard from './components/ui/dashboard/user/UserDashboard'
import Tokens from './components/tokens/Tokens'
import UserInfomation from './components/user/UserInfomation'
import UserSettings from './components/settings/UserSettings'
import Log from './components/user/log/Log'
import SelectTicket from './components/balance/SelectTicket'
import SelectAccount from './components/account/SelectAccount'

// HOME
import AccountBalance from './components/balance/AccountBalance'
import ManageAcc from './components/account/ManageAcc'
import OpenBookAccount from './components/account/OpenBookAccount'

// TOKENS

// USER INFO

// AUTH IMPORTS
import Login from './components/auth/account/Login'
import Register from './components/auth/account/Register'
import ForgotPassword from './components/auth/account/ForgotPassword'

import ProfilePic from './components/user/account/ProfilePic'


// ERROR IMPORTS
import ErrorPage from './pages/ErrorPage'
import TabTheme from './components/theme/UI-setting/TabTheme'
import ManageTicket from './components/balance/ManageTicket'
import ManageUserAccount from './components/account/ManageUserAccount'

const App = () => {
  return (
    <>
    <TabTheme />
        <BrowserRouter>
      <Routes>
      {/* GLOBAL PAGES */}
      <Route path='*' element={<ErrorPage />} />
      <Route path='/docs.dfms/user manual' element={<UserManual />} />
      <Route path='/theme' exact element={<Theme />} />
      <Route path='/dash' element={<Dashboard />} />
      <Route path='/mod' element={<ModalWindow />} />
      <Route path='/' element={<Loading />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/help' element={<Help />} />
      
      {/* USER ROUTES */}
      <Route path='/pnlat/dashboard' element={<UserDashboard />} />
      <Route path='/pnlat/balance' element={<AccountBalance />} />
      <Route path='/pnlat/tokens' element={<Tokens/>} />
      <Route path='/pnlat/user' element={<UserInfomation />} />
      <Route path='/pnlat/manage user account' element={<ManageUserAccount />} />
      <Route path='/pnlat/manage account/:id' element={<ManageAcc />} />
      <Route path='/pnlat/manage-ticket/:id' element={<ManageTicket />} />
      <Route path='/pnlat/open book account' element={<OpenBookAccount />} />
      <Route path='/pnlat/settings' element={<UserSettings />} />
      <Route path='/pnlat/log' element={<Log />} />
      <Route path='/pnlat/select-account' element={<SelectAccount />} />
      <Route path='/pnlat/select-ticket' element={<SelectTicket />} />

      {/* breed ROUTES crud(s) */}
      <Route path='/pnlat/user/admin/admin breed create' element={<AdminBreedCreate/>} />
      <Route path='/pnlat/user/admin/admin breed view' element={<AdminBreedView/>} />
      <Route path='/pnlat/user/admin/admin breed read/:id' element={<AdminBreedRead/>} />
      {/* milk ROUTES crud(s) */}
      <Route path='/pnlat/user/admin/admin milk add' element={<AdminMilkAdd/>} />
      <Route path='/pnlat/user/admin/admin milk view' element={<AdminMilkView/>} />
      <Route path='/pnlat/user/admin/admin milk read/:id' element={<AdminMilkRead/>} />

          {/* PAYMENT ROUTES */}
          <Route path='/pnlat/payment/paypal' element={<PayPalPayment />} />
          <Route path='/pnlat/payment/bitcoin' element={<BitcoinPayment />} />

      {/* SYSTEM ROUTES */}
      <Route path='/pnlat/system/backup' element={<Backup />} />
      <Route path='/pnlat/system schema' element={<SchemaPdfView />} />

      {/* AUTH ROUTES */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/password-reset' element={<ForgotPassword />} />

      {/* AUTH ROUTES */}
      <Route path='/pnlat/user profilepic' element={<ProfilePic />} />
 
      {/* ERROR PAGES */}
      <Route path='*' element={<ErrorPage />} />
 
     </Routes>
    </BrowserRouter>

    </>
 
  )
}

export default App
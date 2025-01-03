"use client"

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from 'next/image'
import Layout from '@/components/dashboard/Layout'
import EditIcon from '../../../../public/edit.svg'
import BankIcon from '../../../../public/bank-icon.svg'
import banks from '@/components/dashboard/banks'
import axios from 'axios'
import { useUser } from '@/context/UserContext'




const paymentHistory = [
    { icon: BankIcon, bank: 'Catalog Bank', accountNumber: '0123456789', status: 'Successful', amount: '$200', date: '4th Feb, 2024', time: '2:15pm' },
    { icon: BankIcon, bank: 'Catalog Bank', accountNumber: '0123456789', status: 'Successful', amount: '$200', date: '4th Feb, 2024', time: '2:15pm' },
    { icon: BankIcon, bank: 'Catalog Bank', accountNumber: '0123456789', status: 'Successful', amount: '$200', date: '4th Feb, 2024', time: '2:15pm' },
    { icon: BankIcon, bank: 'Catalog Bank', accountNumber: '0123456789', status: 'Successful', amount: '$200', date: '4th Feb, 2024', time: '2:15pm' },
  ]


export default function PaymentSettings() {

  // Zod schemas
const fiatSchema = z.object({
  bankName: z.string().nonempty("Bank name is required"),
  accountNumber: z.string().regex(/^\d{10}$/, "Account number must be 10 digits"),
  accountName: z.string().min(2, "Account name must be at least 2 characters"),
})

const cryptoSchema = z.object({
  walletAddress: z.string().regex(/^T[1-9A-HJ-NP-Za-km-z]{33}$/, "Invalid TRC-20 wallet address"),
})



  const [paymentMethod, setPaymentMethod] = useState('Fiat')
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState({});

  const [fiatDetails, setFiatDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountName: ''
  })
  
  const [cryptoDetails, setCryptoDetails] = useState({
    walletAddress: 'TLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  })
  const [payments, setPayments] = useState([]);

  // Form setup
  const fiatForm = useForm({
    resolver: zodResolver(fiatSchema),
    defaultValues: fiatDetails,
  })

  const { reset } = fiatForm;

  const cryptoForm = useForm({
    resolver: zodResolver(cryptoSchema),
    defaultValues: cryptoDetails,
  })

  const { reset: reset_crypto } = cryptoForm;


  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = (data) => {
    // setIsEditing(false)
    console.log("Form submitted", data)
    setLoading(true)
    // Handle backend updates

    if (paymentMethod === 'Fiat') {
      console.log(data)
        submit_fiat(data)
        // Update fiatDetails with new data
      } else if (paymentMethod === 'Crypto') {
        submit_crypto(data) // Update cryptoDetails with new data
      }
  }

  const submit_fiat = async (data) => {

    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('type', "fiat");
    formData.append('bank', data.bankName);
    formData.append('number', data.accountNumber);
    formData.append('name', data.accountName);


    try {
      const response = await axios.post(`/api/payments/update`, formData);

  setLoading(false)
  setFiatDetails(data);
  setIsEditing(false)
    } catch (error) {
      setLoading(false);
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  const submit_crypto = async (data) => {

    setLoading(true);
    const formData = new FormData();

    // Append form fields to FormData
    formData.append('type', "crypto");
    formData.append('address', data.walletAddress);


    try {
      const response = await axios.post(`/api/payments/update`, formData);

  setLoading(false)
  setCryptoDetails(data);
  setIsEditing(false)
    } catch (error) {
      setLoading(false);
      const apiError = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred.';
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form values if needed
  }

  useEffect(() => {
   
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/api/payments/list");
        setPayments(response.data.data);
        setUser(response.data.user)
        var usr = response.data.user;
        console.log(usr)
        if(usr){
          if(usr.pay_type == "fiat"){
            setPaymentMethod("Fiat")
            if(usr.bank_name && usr.account_name && usr.account_number){
              setFiatDetails({
                bankName: usr.bank_name,
                accountNumber: usr.account_number,
                accountName: usr.account_name
              })
            }else{
              setFiatDetails({
                bankName: "",
                accountNumber: "",
                accountName: ""
              })
            }
          }
    
          if(usr.pay_type == "crypto"){
            setPaymentMethod("Crypto")
            if(usr.wallet_address){
              setCryptoDetails({
                walletAddress: usr.wallet_address
              })
            }else{
              setCryptoDetails({
                walletAddress: 'TLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              })
            }
          }
        }
        setLoad(false)
      } catch (err) {
        setError("Failed to fetch dashboard data");
      }
    };

    fetchPayments();
  }, []);
  useEffect(() => {
    if (paymentMethod === "Fiat") {
      reset(fiatDetails);
    } else {
      reset_crypto(cryptoDetails);
    }
  }, [fiatDetails, cryptoDetails, paymentMethod]);
  if (load)
    return (
      <div className="w-full h-screen items-center justify-center bg-white">
        <div className="flex flex-auto h-full flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
          <div className="custom-loader"></div>
          </div>
        </div>


      </div>
    );

  return (
    <Layout>
      <div className="text-[#101828]">
        <h1 className="text-2xl font-medium mb-6">Payment</h1>

        <div className="flex flex-col lg:flex-row sm:flex items-start justify-between gap-8 mb-8">
          
          {/* Payment preference switch */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-medium mb-4">Payment preference</h2>
            <div className="inline-flex rounded-full p-1 bg-gray-100 mb-4">
              {['Fiat', 'Crypto'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    paymentMethod === method
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Payment form */}
          <div className="flex-1">
            {paymentMethod === 'Fiat' ? (
              <div className="bg-white p-4 rounded-lg border relative">
                {!isEditing && (
                  <Button onClick={handleEdit} variant="ghost" size="sm" className="absolute top-2 right-2 text-grayscale-placeholder">
                    <Image src={EditIcon} alt='Edit Icon Image' className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
                {isEditing ? (
                  <form onSubmit={fiatForm.handleSubmit(handleSave)} className="space-y-4">
                    <div>
                      <Label htmlFor="bankName">Bank name</Label>
                      <Select {...fiatForm.register("bankName")} defaultValue={fiatDetails.bankName} onValueChange={(value) => fiatForm.setValue("bankName", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a bank" />
                        </SelectTrigger>
                        <SelectContent className="bg-grayscale-background text-[#101828]">
                          {banks.map((bank, id) => <SelectItem key={bank.bankName} value={bank.bankName}>{bank.bankName}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {fiatForm.formState.errors.bankName && (
                        <p className="mt-1 text-sm text-red-600">{fiatForm.formState.errors.bankName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account number</Label>
                      <Input
                        id="accountNumber"
                        {...fiatForm.register("accountNumber")}
                        className="mt-1"
                      />
                      {fiatForm.formState.errors.accountNumber && (
                        <p className="mt-1 text-sm text-red-600">{fiatForm.formState.errors.accountNumber.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="accountName">Account name</Label>
                      <Input
                        id="accountName"
                        {...fiatForm.register("accountName")}
                        className="mt-1"
                      />
                      {fiatForm.formState.errors.accountName && (
                        <p className="mt-1 text-sm text-red-600">{fiatForm.formState.errors.accountName.message}</p>
                      )}
                    </div>
                    {error && (
            <div className='text-red-500 mt-2'>
              {error}
            </div>
          )}
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button className="rounded-full" onClick={handleCancel} variant="outline">Cancel</Button>
                      <Button className="rounded-full" type="submit" disabled={loading}>
                      {loading ? (<div className='spinner'></div>) : "Save" }
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-2">
                    <p><strong>Bank name:</strong> {fiatDetails.bankName}</p>
                    <p><strong>Account number:</strong> {fiatDetails.accountNumber}</p>
                    <p><strong>Account name:</strong> {fiatDetails.accountName}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg border relative">
                {!isEditing && (
                  <Button onClick={handleEdit} variant="ghost" size="sm" className="absolute top-2 right-2 text-grayscale-placeholder">
                    <Image src={EditIcon} alt='Edit Icon Image' className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
                {isEditing ? (
                  <form onSubmit={cryptoForm.handleSubmit(handleSave)}>
                    <div>
                      <Label htmlFor="walletAddress">USDT Wallet address (TRC-20)</Label>
                      <Input
                        id="walletAddress"
                        {...cryptoForm.register("walletAddress")}
                        className="mt-1"
                      />
                      {cryptoForm.formState.errors.walletAddress && (
                        <p className="mt-1 text-sm text-red-600">{cryptoForm.formState.errors.walletAddress.message}</p>
                      )}
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button className="rounded-full" onClick={handleCancel} variant="outline">Cancel</Button>
                      <Button className="rounded-full" type="submit" disabled={loading}>
                        {loading? <div className='spinner'></div> : "Save"}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <p className='mb-4'><strong>USDT Wallet address (TRC-20):</strong></p>
                    <p>{cryptoDetails.walletAddress}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Payment notification */}
          <div className="p-4 border rounded-2xl bg-grayscale-white max-w-xs">
            <p className='text-2xl'>💸</p>
            <p className="text-xs text-grayscale-header whitespace-normal break-words">Payment will be made to the account you have provided at the end of every month.</p>
          </div>

        </div>

        {/* Payment history */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment history</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bank</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, idx) => (
                <TableRow key={idx}>
                     <TableCell className="flex items-center space-x-2">
        {/* <Image src={payment.icon} alt={`${payment.bank} icon`} width={24} height={24} /> */}
        <span>{payment.type == "crypto"? "Wallet Address" : "Bank Account"}</span>
      </TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>{payment.amount} usd</TableCell>
                  <TableCell> {new Date(payment.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}</TableCell>
                  <TableCell>{new Date(payment.created_at).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true // For 12-hour format; set to false for 24-hour format
                              })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}

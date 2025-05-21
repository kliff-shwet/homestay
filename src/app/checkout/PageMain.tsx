// 'use client'

// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
// import { PencilSquareIcon } from '@heroicons/react/24/outline'
// import React, { FC, Fragment, useId, useState } from 'react'
// import visaPng from '@/images/vis.png'
// import mastercardPng from '@/images/mastercard.svg'
// import Input from '@/shared/Input'
// import Label from '@/components/Label'
// import Textarea from '@/shared/Textarea'
// import ButtonPrimary from '@/shared/ButtonPrimary'
// import StartRating from '@/components/StartRating'
// import NcModal from '@/shared/NcModal'
// import ModalSelectDate from '@/components/ModalSelectDate'
// import converSelectedDateToString from '@/utils/converSelectedDateToString'
// import ModalSelectGuests from '@/components/ModalSelectGuests'
// import Image from 'next/image'
// import { GuestsObject } from '../(client-components)/type'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import CustomCard from '@/components/CustomCard'
// import { useImages } from '../contextApi/ImageContext'


// export interface CheckOutPagePageMainProps {
// 	className?: string,
// 	startDate?: any,
// 	endDate?: any,
// 	guestAdultsInputValue?: any,
// 	guestChildrenInputValue?: any,
// 	guestInfantsInputValue?: any,
// 	currentroomPrice?: any,
// 	numberOfRoomSelected?: any,
// 	daysToStay?: any,
// 	workationDiscount?: any,
// 	surgedPrice?: any,
// 	extraGuest?: any,
// 	currentActiveRoom?: any,
// 	convenienceFee?: any,
// 	gst?: any,
// 	roomPrice?: any,
// 	totalPrice?: any,
// 	result?: any,
// }

// const CheckOutPagePageMain: FC<CheckOutPagePageMainProps> = ({
// 	className = '', endDate, startDate, guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue,
// 	currentroomPrice, numberOfRoomSelected, daysToStay,
// 	workationDiscount, surgedPrice, extraGuest, currentActiveRoom, convenienceFee, gst, roomPrice, totalPrice, result
// }) => {
// 	const [starttDate, setStartDate] = useState<Date | null>(
// 		// new Date('2023/02/06'),
// 		startDate
// 	)
// 	const [enddDate, setEndDate] = useState<Date | null>(
// 		// new Date('2023/02/23')
// 		endDate
// 	)

// 		const {token, setToken, loggedUser, setLoggedUser} = useImages()
	
// 	const [showBookingPage, setShowBookingPage] = useState<boolean>(false)

// 	const [guests, setGuests] = useState<GuestsObject>({
// 		guestAdults: guestAdultsInputValue,
// 		guestChildren: guestChildrenInputValue,
// 		guestInfants: guestInfantsInputValue,
// 	})

// 	const totleguests=guestAdultsInputValue + guestChildrenInputValue+guestInfantsInputValue

	
// const roomsid = JSON.parse(localStorage.getItem("selectedRoom") || "null");

// // console.log(roomsid.room_id,"hhhhhhhhhhhhhhh")



// 	 const [formData, setFormData] = useState({
// 			first_name: '',
// 			last_name: '',
// 			email: '',
// 			phone: '',
// 			message: '',
// 			checkin:startDate,
// 			checkout:endDate,
// 			booking_type:result?.booking_type,
// 			user_id:loggedUser?.id,
// 			//name: result?.host_name,
// 			property_id: result?.property_type.id,
// 			currency_code: "INR",
// 			booking_status: "Pending",
// 			per_night_price: result?.min_room_price,
// 			total_night: daysToStay,
// 			convenience_fees: convenienceFee,
// 			gst: gst,
// 			total: totalPrice,
// 			rooms_id: roomsid ? [{ room_id: roomsid.room_id }] : [],	
// 			number_of_guests:totleguests,
// 			room_price:result?.room_price,
// 			space_type:currentActiveRoom,
// 			// extraGuest:extraGuest,
// 			totalrooms:roomsid?.count,

// 			});



// 			let handleChange = (e) => {
// 				let { name, value } = e.target;
// 				setFormData(formData => ({ ...formData, [name]: value }));
// 			};

	
// 	const renderSidebar = () => {
// 		return (
// 			<div className="flex w-full flex-col space-y-6 border-neutral-200 px-0 dark:border-neutral-700 sm:space-y-8 sm:rounded-2xl sm:p-6 lg:border xl:p-8">
// 				<div className="flex flex-col sm:flex-row sm:items-center">
// 					<div className="w-full flex-shrink-0 sm:w-40">
// 						<div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-2xl sm:aspect-h-4">
// 							<Image
// 								alt=""
// 								fill
// 								sizes="200px"
// 								src={result?.cover_photo}
// 							/>
// 						</div>
// 					</div>
// 					<div className="space-y-3 py-5 sm:px-5">
// 						<div>
// 							{/* <span className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">
// 								Hotel room in Tokyo, Jappan
// 							</span> */}
// 							<span className="mt-1 block text-base font-medium">
// 								{result?.name}
// 							</span>
// 						</div>
// 						<span className="block text-sm text-neutral-500 dark:text-neutral-400">
// 							{result?.bedrooms} beds · {result?.bathrooms} baths
// 						</span>
// 						<div className="w-10 border-b border-neutral-200 dark:border-neutral-700"></div>
// 						<StartRating point={result?.overall_rating} reviewCount={result?.reviews_count} />
// 					</div>
// 				</div>
// 				<div className="z-10 mt-6 flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200 dark:divide-neutral-700 dark:border-neutral-700 sm:divide-x sm:divide-y-0">
// 						<ModalSelectDate
// 							renderChildren={({ openModal }) => (
// 								<button
// 									// onClick={openModal}
// 									className="flex flex-1 border-b justify-between space-x-5 px-5 py-2 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
// 									type="button"
// 								>
// 									<div className="flex flex-col">
// 										<span className="text-sm text-neutral-400">Date</span>
// 										<span className="mt-1.5 text-lg font-semibold">
// 											{converSelectedDateToString([starttDate, enddDate])}
// 										</span>
// 									</div>
// 									{/* <PencilSquareIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" /> */}
// 								</button>
// 							)}
// 						/>

// 						<ModalSelectGuests
// 							renderChildren={({ openModal }) => (
// 								<button
// 									type="button"
// 									// onClick={openModal}
// 									className="flex flex-1 justify-between space-x-5 px-5 py-2 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
// 								>
// 									<div className="flex flex-col">
// 										<span className="text-sm text-neutral-400">Guests</span>
// 										<span className="mt-1.5 text-lg font-semibold">
// 											<span className="line-clamp-1">
// 												{`${(guests.guestAdults || 0)} Adult, ${(guests.guestChildren || 0)} Children, ${guests.guestInfants || 0} Infant`}
// 											</span>
// 										</span>
// 									</div>
// 									{/* <PencilSquareIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" /> */}
// 								</button>
// 							)}
// 						/>
// 					</div>
// 				<div className="flex flex-col space-y-4">
// 					<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 						<span>
// 							{/* <div>₹ {roomPrice} x {daysToStay} night</div> */}
// 							<div>₹ {currentroomPrice}<span className='text-xs'>/night</span>  ({numberOfRoomSelected} <span className='text-xs'>room</span> x {daysToStay.toFixed(0)} <span className='text-xs'>day</span>)</div>
// 							{workationDiscount > 0 && <div className='text-xs text-red-500'>{`Discount: ${workationDiscount}%`}</div>}
// 						</span>
// 						<span>
// 							<div>₹ {surgedPrice - (extraGuest * currentActiveRoom?.guest_fee)}</div>
// 							{workationDiscount > 0 && <span className='text-xs line-through'>₹ {roomPrice * daysToStay.toFixed(2)}</span>}
// 						</span>
// 					</div>
// 					{extraGuest > 0 &&
// 						<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 							<span>Extra Guest ({extraGuest} x ₹{currentActiveRoom?.guest_fee})</span>
// 							<span>₹ {extraGuest * currentActiveRoom?.guest_fee}</span>
// 						</div>}
// 					<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 						<span>Convenience Fee ({convenienceFee}%)</span>
// 						<span>₹ {((convenienceFee / 100) * surgedPrice).toFixed(2)}</span>
// 					</div>
// 					<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 						<span>GST ({gst}%)</span>
// 						<span>₹ {((surgedPrice + ((convenienceFee / 100) * surgedPrice)) * (gst / 100)).toFixed(2)}</span>
// 					</div>
// 					<div className="border-b border-neutral-200 dark:border-neutral-700"></div>
// 					<div className="flex justify-between font-semibold">
// 						<span>Total</span>
// 						<span className='flex'>₹{totalPrice}</span>
// 					</div>
// 				</div>
// 				{/* <div className="flex flex-col space-y-4">
// 					<h3 className="text-2xl font-semibold">Price detail</h3>
// 					<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 						<span>$19 x 3 day</span>
// 						<span>$57</span>
// 					</div>
// 					<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 						<span>Service charge</span>
// 						<span>$0</span>
// 					</div>

// 					<div className="border-b border-neutral-200 dark:border-neutral-700"></div>
// 					<div className="flex justify-between font-semibold">
// 						<span>Total</span>
// 						<span>$57</span>
// 					</div>
// 				</div> */}
// 			</div>
// 		)
// 	}

// 			const renderMain = () => {

// 			const handleSubmit = async (e) => {
// 			e.preventDefault();

// 			try {

// 			const res = await axios.post('https://homestay.kliffhost.in/api/payments/booking',formData,{
// 			headers: {
// 			'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY
// 			},
// 			}

// 			);
// 			console.log('Server response (Success):', res.data);
// 			if (res.data.message === 'email already exits') {
// 			toast.error('Email already exists. Please use a different email.');
// 			return; // Exit early, do not proceed
// 			}
// 			toast.success('Reservation submitted successfully!');

// 			} catch (error) {
// 				console.error('Error (Failure):', error.response?.data?.message || error.message);
// 			}
// 			};


// 			return (
// 			<div className="flex w-full flex-col space-y-8 border-neutral-200 px-0 dark:border-neutral-700 sm:rounded-2xl sm:border sm:p-6 xl:p-8">
				
// 				<div>
// 					<div>
// 						<h3 className="text-2xl font-semibold">Your trip</h3>
// 						<NcModal
// 							renderTrigger={(openModal) => (
// 								<span
// 									onClick={() => openModal()}
// 									className="mt-1 block cursor-pointer underline lg:hidden"
// 								>
// 									View booking details
// 								</span>
// 							)}
// 							renderContent={renderSidebar}
// 							modalTitle="Booking details"
// 						/>
// 					</div>
// 					{/* <div className="z-10 mt-6 flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200 dark:divide-neutral-700 dark:border-neutral-700 sm:flex-row sm:divide-x sm:divide-y-0">
// 						<ModalSelectDate
// 							renderChildren={({ openModal }) => (
// 								<button
// 									onClick={openModal}
// 									className="flex flex-1 justify-between space-x-5 p-5 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
// 									type="button"
// 								>
// 									<div className="flex flex-col">
// 										<span className="text-sm text-neutral-400">Date</span>
// 										<span className="mt-1.5 text-lg font-semibold">
// 											{converSelectedDateToString([starttDate, enddDate])}
// 										</span>
// 									</div>
// 									<PencilSquareIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
// 								</button>
// 							)}
// 						/>

// 						<ModalSelectGuests
// 							renderChildren={({ openModal }) => (
// 								<button
// 									type="button"
// 									onClick={openModal}
// 									className="flex flex-1 justify-between space-x-5 p-5 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
// 								>
// 									<div className="flex flex-col">
// 										<span className="text-sm text-neutral-400">Guests</span>
// 										<span className="mt-1.5 text-lg font-semibold">
// 											<span className="line-clamp-1">
// 												{`${(guests.guestAdults || 0)} Adult, ${(guests.guestChildren || 0)} Children, ${guests.guestInfants || 0} Infant`}
// 											</span>
// 										</span>
// 									</div>
// 									<PencilSquareIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
// 								</button>
// 							)}
// 						/>
// 					</div> */}
// 				</div>

// 				<div>
// 					{/* <h3 className="text-2xl font-semibold">Details</h3>
// 					<div className="my-5 w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}

// 					<div className="mt-6">
// 						{/* <TabGroup>
// 							<TabList className="my-5 flex gap-1">
// 								<Tab as={Fragment}>
// 									{({ selected }) => (
// 										<button
// 											className={`rounded-full px-4 py-1.5 focus:outline-none sm:px-6 sm:py-2.5 ${
// 												selected
// 													? 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900'
// 													: 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
// 											}`}
// 										>
// 											Paypal
// 										</button>
// 									)}
// 								</Tab>
// 								<Tab as={Fragment}>
// 									{({ selected }) => (
// 										<button
// 											className={`flex items-center justify-center rounded-full px-4 py-1.5 focus:outline-none sm:px-6 sm:py-2.5 ${
// 												selected
// 													? 'bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900'
// 													: 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
// 											}`}
// 										>
// 											<span className="mr-2.5">Credit card</span>
// 											<Image className="w-8" src={visaPng} alt="visa" />
// 											<Image
// 												className="w-8"
// 												src={mastercardPng}
// 												alt="mastercard"
// 											/>
// 										</button>
// 									)}
// 								</Tab>
// 							</TabList>

// 							<TabPanels>
// 								<TabPanel className="space-y-5">
// 									<div className="space-y-1">
// 										<Label>Card number </Label>
// 										<Input defaultValue="111 112 222 999" />
// 									</div>
// 									<div className="space-y-1">
// 										<Label>Card holder </Label>
// 										<Input defaultValue="JOHN DOE" />
// 									</div>
// 									<div className="flex space-x-5">
// 										<div className="flex-1 space-y-1">
// 											<Label>Expiration date </Label>
// 											<Input type="date" defaultValue="MM/YY" />
// 										</div>
// 										<div className="flex-1 space-y-1">
// 											<Label>CVC </Label>
// 											<Input />
// 										</div>
// 									</div>
// 									<div className="space-y-1">
// 										<Label>Messager for author </Label>
// 										<Textarea placeholder="..." />
// 										<span className="block text-sm text-neutral-500">
// 											Write a few sentences about yourself.
// 										</span>
// 									</div>
// 								</TabPanel>
// 								<TabPanel className="space-y-5">
// 									<div className="space-y-1">
// 										<Label>Email </Label>
// 										<Input type="email" defaultValue="example@gmail.com" />
// 									</div>
// 									<div className="space-y-1">
// 										<Label>Password </Label>
// 										<Input type="password" defaultValue="***" />
// 									</div>
// 									<div className="space-y-1">
// 										<Label>Messager for author </Label>
// 										<Textarea placeholder="..." />
// 										<span className="block text-sm text-neutral-500">
// 											Write a few sentences about yourself.
// 										</span>
// 									</div>
// 								</TabPanel>
// 							</TabPanels>
// 						</TabGroup> */}
                
// 					<form onSubmit={handleSubmit}>
// 							<div className="space-y-1">
// 								<Label>First Name</Label>
// 								<input
// 								type="text"
// 								name="first_name"
// 								placeholder="First Name"
// 								value={formData.first_name || ""}
// 								onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
// 								className="rounded-lg py-3 dark:focus:ring-primary-600 block w-full border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-opacity-25"
// 								required
// 								/>
// 							</div>
// 							<div className="space-y-1">
// 								<Label>Last Name</Label>
// 								<input
// 								type="text"
// 								name="last_name"
// 								placeholder="Last Name"
// 								value={formData.last_name || ""}
// 								onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
// 								className="rounded-lg py-3 dark:focus:ring-primary-600 block w-full border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-opacity-25"
// 								required
// 								/>
// 							</div>
// 							<div className="space-y-1">
// 								<Label>Email</Label>
// 								<input
// 								type="email"
// 								name="email"
// 								placeholder="example@gmail.com"
// 								value={formData.email || ""}
// 								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// 								className="rounded-lg py-3 dark:focus:ring-primary-600 block w-full border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-opacity-25"
// 								required
// 								/>
// 							</div>

// 							<div className="space-y-1">
// 								<Label>Phone</Label>
// 								<input
// 								type="tel"
// 								name="phone"
// 								placeholder="***"
// 								value={formData.phone || ""}
// 								onChange={handleChange}
// 								className="rounded-lg py-3 dark:focus:ring-primary-600 block w-full border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-opacity-25"
// 								required
// 								/>
// 							</div>

// 							<div className="space-y-1 mt-5">
// 								<Label>Message for author</Label>
// 								<textarea
// 								name="message"
// 								placeholder="..."
// 								value={formData.message || ""}
// 								onChange={handleChange}
// 								className="rounded-lg py-3 dark:focus:ring-primary-600 block w-full border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-opacity-25"
// 								required
// 								/>
// 							</div>

// 							<ButtonPrimary type="submit" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg">
// 								Confirm and reserve
// 							</ButtonPrimary>
// 						</form>
						
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}

// 	const renderBookingPage = () => {
// 		return (
// 			<div className="flex w-full flex-col space-y-5 px-0 sm:rounded-2xl sm:p-6 xl:p-8">
// 				<h2 className="text-3xl font-semibold lg:text-4xl">
// 					Congratulation 🎉
// 				</h2>

// 				<div className="border-b border-neutral-200 dark:border-neutral-700"></div>

// 				{/* ------------------------ */}
// 				<div className="space-y-6">
// 					<h3 className="text-2xl font-semibold">Your booking</h3>
// 					<div className="flex flex-col sm:flex-row sm:items-center">
// 						<div className="w-full flex-shrink-0 sm:w-40">
// 							<div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-2xl sm:aspect-h-4">
// 								<Image
// 									alt=""
// 									fill
// 									sizes="200px"
// 									src={result?.cover_photo}
// 								/>
// 							</div>
// 						</div>
// 						<div className="space-y-3 py-5 sm:px-5">
// 							<div>
// 								{/* <span className="line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">
// 								Hotel room in Tokyo, Jappan
// 							</span> */}
// 								<span className="mt-1 block text-base font-medium">
// 									{result?.name}
// 								</span>
// 							</div>
// 							<span className="block text-sm text-neutral-500 dark:text-neutral-400">
// 								{result?.bedrooms} bedss · {result?.bathrooms} baths
// 							</span>
// 							<div className="w-10 border-b border-neutral-200 dark:border-neutral-700"></div>
// 							<StartRating point={result?.overall_rating} reviewCount={result?.reviews_count} />
// 						</div>
// 					</div>
// 					<div className="mt-6 flex flex-col divide-y divide-neutral-200 rounded-3xl border border-neutral-200 dark:divide-neutral-700 dark:border-neutral-700 sm:flex-row sm:divide-x sm:divide-y-0">
// 						<div className="flex flex-1 space-x-4 p-5">
// 							<svg
// 								className="h-8 w-8 text-neutral-300 dark:text-neutral-600"
// 								viewBox="0 0 28 28"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path
// 									d="M9.33333 8.16667V3.5M18.6667 8.16667V3.5M8.16667 12.8333H19.8333M5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V8.16667C24.5 6.878 23.4553 5.83333 22.1667 5.83333H5.83333C4.54467 5.83333 3.5 6.878 3.5 8.16667V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5Z"
// 									stroke="#D1D5DB"
// 									strokeWidth="1.5"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>

// 							<div className="flex flex-col">
// 								<span className="text-sm text-neutral-400">Date</span>
// 								<span className="mt-1.5 text-lg font-semibold">
// 									{converSelectedDateToString([starttDate, enddDate])}
// 								</span>
// 							</div>
// 						</div>
// 						<div className="flex flex-1 space-x-4 p-5">
// 							<svg
// 								className="h-8 w-8 text-neutral-300 dark:text-neutral-600"
// 								viewBox="0 0 28 28"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg"
// 							>
// 								<path
// 									d="M14 5.07987C14.8551 4.11105 16.1062 3.5 17.5 3.5C20.0773 3.5 22.1667 5.58934 22.1667 8.16667C22.1667 10.744 20.0773 12.8333 17.5 12.8333C16.1062 12.8333 14.8551 12.2223 14 11.2535M17.5 24.5H3.5V23.3333C3.5 19.4673 6.63401 16.3333 10.5 16.3333C14.366 16.3333 17.5 19.4673 17.5 23.3333V24.5ZM17.5 24.5H24.5V23.3333C24.5 19.4673 21.366 16.3333 17.5 16.3333C16.225 16.3333 15.0296 16.6742 14 17.2698M15.1667 8.16667C15.1667 10.744 13.0773 12.8333 10.5 12.8333C7.92267 12.8333 5.83333 10.744 5.83333 8.16667C5.83333 5.58934 7.92267 3.5 10.5 3.5C13.0773 3.5 15.1667 5.58934 15.1667 8.16667Z"
// 									stroke="#D1D5DB"
// 									strokeWidth="1.5"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>

// 							<div className="flex flex-col">
// 								<span className="text-sm text-neutral-400">Guests</span>
// 								<span className="mt-1.5 text-lg font-semibold">{`${(guests.guestAdults || 0)} Adult, ${(guests.guestChildren || 0)} Children, ${guests.guestInfants || 0} Infant`}</span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* ------------------------ */}
// 				<div className="space-y-6">
// 					<h3 className="text-2xl font-semibold">Booking detail</h3>
// 					<div className="flex flex-col space-y-4">
// 						<div className="flex text-neutral-600 dark:text-neutral-300">
// 							<span className="flex-1">Booking code</span>
// 							<span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
// 								#222-333-111
// 							</span>
// 						</div>
// 						<div className="flex text-neutral-600 dark:text-neutral-300">
// 							<span className="flex-1">Date</span>
// 							<span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
// 								{/* 12 Aug, 2021 */}
// 								{new Date().toLocaleDateString('en-GB', {
// 									day: '2-digit',
// 									month: 'short',
// 									year: 'numeric',
// 								})}
// 							</span>
// 						</div>
// 						<div className="flex text-neutral-600 dark:text-neutral-300">
// 							<span className="flex-1">Total</span>
// 							<span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
// 								Rs {totalPrice}
// 							</span>
// 						</div>
// 						<div className="flex justify-between text-neutral-600 dark:text-neutral-300">
// 							<span className="flex-1">Payment method</span>
// 							<span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
// 								Credit card
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div>
// 					<ButtonPrimary href="/">Explore more stays</ButtonPrimary>
// 				</div>
// 			</div>
// 		)
// 	}

// 	return (
// 		<div className={`nc-CheckOutPagePageMain ${className}`}>
// 			{
// 				showBookingPage === false ?
// 					(
// 						<main className="container mb-24 mt-2 flex flex-col-reverse lg:mb-32 lg:flex-row">
// 							<div className="w-full lg:w-3/5 lg:pr-10 xl:w-2/3">{renderMain()}</div>
// 							<div className="hidden flex-grow lg:block">{renderSidebar()}</div>
// 						</main>
// 					) :
// 					(
// 						<main className="container mb-24 mt-0 lg:mb-32">
// 							<div className="mx-auto max-w-4xl">{renderBookingPage()}</div>
// 						</main>
// 					)

// 			}

// 		</div>
// 	)
// }



// export default CheckOutPagePageMain








'use client'

import React, { FC, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'

import { GuestsObject } from '../(client-components)/type'
import { useImages } from '../contextApi/ImageContext'

import ModalSelectDate from '@/components/ModalSelectDate'
import ModalSelectGuests from '@/components/ModalSelectGuests'
import StartRating from '@/components/StartRating'
import Label from '@/components/Label'
import ButtonPrimary from '@/shared/ButtonPrimary'
import NcModal from '@/shared/NcModal'

import converSelectedDateToString from '@/utils/converSelectedDateToString'

export interface CheckOutPagePageMainProps {
  className?: string
  startDate?: Date | null
  endDate?: Date | null
  guestAdultsInputValue?: number
  guestChildrenInputValue?: number
  guestInfantsInputValue?: number
  currentroomPrice?: number
  numberOfRoomSelected?: number
  daysToStay?: number
  workationDiscount?: number
  surgedPrice?: number
  extraGuest?: number
  currentActiveRoom?: {
    guest_fee: number
  }
  convenienceFee?: number
  gst?: number
  roomPrice?: number
  totalPrice?: number
  result?: any
}

const CheckOutPagePageMain: FC<CheckOutPagePageMainProps> = ({
  className = '',
  startDate,
  endDate,
  guestAdultsInputValue = 0,
  guestChildrenInputValue = 0,
  guestInfantsInputValue = 0,
  currentroomPrice = 0,
  numberOfRoomSelected = 0,
  daysToStay = 1,
  workationDiscount = 0,
  surgedPrice = 0,
  extraGuest = 0,
  currentActiveRoom = { guest_fee: 0 },
  convenienceFee = 0,
  gst = 0,
  roomPrice = 0,
  totalPrice = 0,
  result = {},
}) => {
  const [starttDate, setStartDate] = useState<Date | null>(startDate || null)
  const [enddDate, setEndDate] = useState<Date | null>(endDate || null)

  const { loggedUser } = useImages()

  const [guests, setGuests] = useState<GuestsObject>({
    guestAdults: guestAdultsInputValue,
    guestChildren: guestChildrenInputValue,
    guestInfants: guestInfantsInputValue,
  })

  const totleguests = guestAdultsInputValue + guestChildrenInputValue + guestInfantsInputValue

  const roomsid = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('selectedRoom') || 'null') : null

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    checkin: startDate,
    checkout: endDate,
    booking_type: result?.booking_type,
    user_id: loggedUser?.id,
    property_id: result?.property_type?.id,
    currency_code: 'INR',
    booking_status: 'Pending',
    per_night_price: result?.min_room_price,
    total_night: daysToStay,
    convenience_fees: convenienceFee,
    gst: gst,
    total: totalPrice,
    rooms_id: roomsid ? [{ room_id: roomsid.room_id }] : [],
    number_of_guests: totleguests,
    room_price: result?.room_price,
    space_type: currentActiveRoom,
    totalrooms: roomsid?.count || 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const renderSidebar = () => (
    <div className="flex w-full flex-col space-y-6 border-neutral-200 px-0 dark:border-neutral-700 sm:space-y-8 sm:rounded-2xl sm:p-6 lg:border xl:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="w-full flex-shrink-0 sm:w-40">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-2xl sm:aspect-h-4">
            <Image alt="" fill sizes="200px" src={result?.cover_photo} />
          </div>
        </div>
        <div className="space-y-3 py-5 sm:px-5">
          <div>
            <span className="mt-1 block text-base font-medium">{result?.name}</span>
          </div>
          <span className="block text-sm text-neutral-500 dark:text-neutral-400">
            {result?.bedrooms} beds · {result?.bathrooms} baths
          </span>
          <div className="w-10 border-b border-neutral-200 dark:border-neutral-700"></div>
          <StartRating point={result?.overall_rating} reviewCount={result?.reviews_count} />
        </div>
      </div>
      <div className="z-10 mt-6 flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200 dark:divide-neutral-700 dark:border-neutral-700 sm:divide-x sm:divide-y-0">
        <ModalSelectDate
          renderChildren={({ openModal }) => (
            <button
              onClick={openModal}
              className="flex flex-1 border-b justify-between space-x-5 px-5 py-2 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
              type="button"
            >
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Date</span>
                <span className="mt-1.5 text-lg font-semibold">{converSelectedDateToString([starttDate, enddDate])}</span>
              </div>
            </button>
          )}
        />

        <ModalSelectGuests
          renderChildren={({ openModal }) => (
            <button
              type="button"
              onClick={openModal}
              className="flex flex-1 justify-between space-x-5 px-5 py-2 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">Guests</span>
                <span className="mt-1.5 text-lg font-semibold">
                  {`${guests.guestAdults || 0} Adult, ${guests.guestChildren || 0} Children, ${guests.guestInfants || 0} Infant`}
                </span>
              </div>
            </button>
          )}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
          <span>
            <div>
              ₹ {currentroomPrice}
              <span className="text-xs">/night</span> ({numberOfRoomSelected}{' '}
              <span className="text-xs">room</span> x {daysToStay.toFixed(0)}{' '}
              <span className="text-xs">day</span>)
            </div>
            {workationDiscount > 0 && (
              <div className="text-xs text-red-500">{`Discount: ${workationDiscount}%`}</div>
            )}
          </span>
          <span>
            <div>₹ {surgedPrice - extraGuest * (currentActiveRoom?.guest_fee || 0)}</div>
            {workationDiscount > 0 && (
              <span className="text-xs line-through">₹ {(roomPrice * daysToStay).toFixed(2)}</span>
            )}
          </span>
        </div>
        {extraGuest > 0 && (
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
            <span>
              Extra Guest ({extraGuest} x ₹{currentActiveRoom?.guest_fee})
            </span>
            <span>₹ {extraGuest * (currentActiveRoom?.guest_fee || 0)}</span>
          </div>
        )}
        <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
          <span>Convenience Fee ({convenienceFee}%)</span>
          <span>₹ {((convenienceFee / 100) * surgedPrice).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
          <span>GST ({gst}%)</span>
          <span>
            ₹
            {(
              (surgedPrice + (convenienceFee / 100) * surgedPrice) *
              (gst / 100)
            ).toFixed(2)}
          </span>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="flex">₹{totalPrice}</span>
        </div>
      </div>
    </div>
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Here you might want to update formData with latest state info
    // E.g. updating checkin/checkout, guest count, rooms, etc.

    try {
      const res = await axios.post('https://jap.digisole.in/api/booking/booking', formData)
      if (res.status === 201) {
        toast.success('Booking Successful!')
        // Optionally reset form here or do other success handling
      } else {
        toast.error('Booking failed. Please try again.')
      }
    } catch (error) {
      toast.error('Booking failed. Please try again.')
      console.error(error)
    }
  }

  return (
    <div className={`nc-CheckOutPagePageMain ${className}`} data-nc-id="CheckOutPagePageMain">
      <div className="container my-14 lg:my-20">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8 lg:flex-row lg:space-x-10 lg:space-y-0">
          {/* Left Section: Form */}
          <div className="w-full max-w-2xl flex-grow rounded-3xl border border-neutral-200 bg-white p-10 shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
            <div className="mb-10 text-3xl font-semibold">Your Booking Information</div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Label >First Name</Label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="input-bordered input w-full"
              />

              <Label >Last Name</Label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="input-bordered input w-full"
              />

              <Label >Email</Label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-bordered input w-full"
              />

              <Label>Phone</Label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-bordered input w-full"
              />
            </div>

            <div className="mt-6">
              <Label >Message (optional)</Label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-bordered input w-full resize-none"
                placeholder="Anything you want to tell us?"
              />
            </div>

            <div className="mt-10 flex justify-end">
              <ButtonPrimary type="submit">Confirm Booking</ButtonPrimary>
            </div>
          </div>

          {/* Right Section: Sidebar Summary */}
          <div className="w-full max-w-md">{renderSidebar()}</div>
        </form>
      </div>
    </div>
  )
}

export default CheckOutPagePageMain

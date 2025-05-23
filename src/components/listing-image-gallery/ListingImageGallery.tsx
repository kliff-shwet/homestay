// 'use client'

// import './styles/index.css'
// import Image from 'next/image'
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { FC, Fragment, Suspense, useEffect, useRef, useState } from 'react'
// import Modal from './components/Modal'
// import type { ListingGalleryImage } from './utils/types'
// import { useLastViewedPhoto } from './utils/useLastViewedPhoto'
// import { ArrowLeftIcon } from '@heroicons/react/24/outline'
// import {
// 	Dialog,
// 	DialogPanel,
// 	Transition,
// 	TransitionChild,
// } from '@headlessui/react'
// import LikeSaveBtns from '../LikeSaveBtns'
// import { Route } from 'next'
// import { useImages } from '@/app/contextApi/ImageContext'
// import Logo from '@/shared/Logo'

// const PHOTOS: string[] = [
// 	'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
// 	'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// ]

// export const DEMO_IMAGE: ListingGalleryImage[] = [...PHOTOS].map(
// 	(item, index): ListingGalleryImage => {
// 		return {
// 			id: index,
// 			url: item,
// 		}
// 	},
// )

// export const getNewParam = ({
// 	paramName = 'photoId',
// 	value,
// }: {
// 	paramName?: string
// 	value: string | number
// }) => {
// 	let params = new URLSearchParams(document.location.search)
// 	params.set(paramName, String(value))
// 	return params.toString()
// }

// interface Props {
// 	images?: ListingGalleryImage[]
// }

// const ListingImageGallery: FC<Props> = ({ images = DEMO_IMAGE }) => {
// 	const searchParams = useSearchParams()
// 	const photoId = searchParams?.get('photoId')
// 	const modal = searchParams?.get('modal')
// 	const isShowModal = modal === 'PHOTO_TOUR_SCROLLABLE'
// 	const router = useRouter()
// 	const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

// 	const lastViewedPhotoRef = useRef<HTMLDivElement>(null)
// 	const thisPathname = usePathname()
// 	useEffect(() => {
// 		// This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
// 		if (lastViewedPhoto && !photoId) {
// 			lastViewedPhotoRef.current?.scrollIntoView({ block: 'center' })
// 			setLastViewedPhoto(null)
// 		}
// 	}, [photoId, lastViewedPhoto, setLastViewedPhoto])

// 	const handleClose = () => {
// 		let params = new URLSearchParams(document.location.search)
// 		params.delete('modal')
// 		router.push(`${thisPathname}/?${params.toString()}` as Route)
// 	}

// 	const {imagess} = useImages()
// 	console.log(imagess,"kjkjhkjkjkjhkjhjhk")
// 	const updatedImages = [...imagess].map(
// 		(item, index): ListingGalleryImage => {
// 			return {
// 				id: index,
// 				url: item,
// 			}
// 		},
// 	)
// console.log(updatedImages,"jkadlsjl")


// 	const renderContent = () => {
// 		const [selectedImage, setSelectedImage] = useState<ListingGalleryImage | null>(null)

// 	useEffect(() => {
// 		if (photoId) {
// 			const found = updatedImages.find((img) => img.id === Number(photoId))
// 			if (found) setSelectedImage(found)
// 		}
// 	}, [photoId])

// 	if (!selectedImage) return null
// 		return (
// 			<div className=" ">
// 				{photoId && (
// 			<div className="flex flex-col w-full max-h-[90vh] overflow-hidden">
// 			{/* Top: Text + Big Image (responsive layout) */}
// 			<div className="flex flex-col lg:flex-row gap-4 w-full flex-1 overflow-hidden">
			  
// 			  {/* Left: Text Content */}
// 			  <div className="w-full lg:w-5/12 p-4 overflow-y-auto">
// 			  <Logo/>
// 				<h2 className="text-2xl font-semibold mb-4">Image Information</h2>
// 				<p className="text-sm text-gray-700 mb-2">
// 				  This is the description or details related to the image. You can place room details,
// 				  captions, features, pricing, or anything else here.
// 				</p>
// 				<p className="text-sm text-gray-600">
// 				  Add as much content as needed — this section will scroll independently if needed.
// 				</p>
// 			  </div>
		  
// 			  {/* Right: Big Image */}
// 			  <div className="w-full lg:w-7/12 flex items-center justify-center overflow-hidden">
// 				<Image
// 				  alt="Selected large"
// 				  src={selectedImage.url}
// 				  width={1000}
// 				  height={800}
// 				  className="rounded-lg object-contain w-full max-h-[80vh]"
// 				/>
// 			  </div>
// 			</div>
		  
// 			{/* Bottom: Scrollable Thumbnails */}
// 			<div className="w-full mt-4 overflow-x-auto flex space-x-2 pb-2 px-4">
// 			  {updatedImages.map((img) => (
// 				<div
// 				  key={img.id}
// 				  onClick={() => setSelectedImage(img)}
// 				  className={`cursor-pointer min-w-[100px] border-2 rounded-lg overflow-hidden ${
// 					selectedImage.id === img.id ? 'border-blue-500' : 'border-transparent'
// 				  }`}
// 				>
// 				  <Image
// 					alt="Thumbnail"
// 					src={img.url}
// 					width={120}
// 					height={80}
// 					className="object-cover w-full h-24"
// 				  />
// 				</div>
// 			  ))}
// 			</div>
// 		  </div>
		  
		  
		  
// 				)}
// {!photoId && (
// 				<div className="columns-1 gap-4 sm:columns-2 xl:columns-4">
// 					{updatedImages?.map(({ id, url }) => (
// 						<div
// 							key={id}
// 							onClick={() => {
// 								const newPathname = getNewParam({ value: id })
// 								router.push(`${thisPathname}/?${newPathname}` as Route)
// 							}}
// 							ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
// 							className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg focus:outline-none"
// 						>
// 							<Image
// 								alt="chisfis listing gallery "
// 								className="transform rounded-lg brightness-90 transition will-change-auto focus:outline-none group-hover:brightness-110"
// 								style={{
// 									transform: 'translate3d(0, 0, 0)',
// 								}}
// 								src={url}
// 								width={720}
// 								height={480}
// 								sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 350px"
// 							/>
// 							<h1></h1>
// 						</div>
// 					))}
// 				</div>)}
// 			</div>
// 		)
// 	}

// 	return (
// 		<>
// 			<Transition appear show={isShowModal} as={Fragment}>
// 				<Dialog as="div" className="relative z-40" onClose={handleClose}>
// 					<TransitionChild
// 						as={Fragment}
// 						enter="ease-out duration-300"
// 						enterFrom="opacity-0"
// 						enterTo="opacity-100"
// 						leave="ease-in duration-200"
// 						leaveFrom="opacity-100"
// 						leaveTo="opacity-0"
// 					>
// 						<div className="fixed inset-0 bg-white" />
// 					</TransitionChild>

// 					<div className="fixed inset-0 overflow-y-auto">
// 						<div className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 xl:px-10">
// 							<button
// 								className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-0"
// 								onClick={handleClose}
// 							>
// 								<ArrowLeftIcon className="h-6 w-6" />
// 							</button>
// 							{/* <LikeSaveBtns /> */}
// 						</div>

// 						<div className="flex min-h-full items-center justify-center pt-0 text-center sm:p-4">
// 							<TransitionChild
// 								as={Fragment}
// 								enter="ease-out duration-300"
// 								enterFrom="opacity-0 translate-y-5"
// 								enterTo="opacity-100 translate-y-0"
// 								leave="ease-in duration-200"
// 								leaveFrom="opacity-100 translate-y-0"
// 								leaveTo="opacity-0 translate-y-5"
// 							>
// 								<DialogPanel className="mx-auto w-full max-w-screen-lg transform p-4 pt-0 text-left transition-all">
// 									{renderContent()}
// 								</DialogPanel>
// 							</TransitionChild>
// 						</div>
// 					</div>
// 				</Dialog>
// 			</Transition>
// 		</>
// 	)
// }

// export default ListingImageGallery





"use client"

import './styles/index.css'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, Fragment, useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import Logo from '@/shared/Logo'
import { useImages } from '@/app/contextApi/ImageContext'
import { useLastViewedPhoto } from './utils/useLastViewedPhoto'
import type { ListingGalleryImage } from './utils/types'

const DEMO_IMAGE: ListingGalleryImage[] = [
  'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
  'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg',
  'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg',
].map((url, index) => ({ id: index, url }))

const getNewParam = ({
  paramName = 'photoId',
  value,
}: {
  paramName?: string
  value: string | number
}) => {
  const params = new URLSearchParams(document.location.search)
  params.set(paramName, String(value))
  return params.toString()
}

interface Props {
  images?: ListingGalleryImage[]
}

const ListingImageGallery: FC<Props> = ({ images = DEMO_IMAGE }) => {
  const searchParams = useSearchParams()
  const photoId = searchParams?.get('photoId')
  const modal = searchParams?.get('modal')
  const isShowModal = modal === 'PHOTO_TOUR_SCROLLABLE'
  const router = useRouter()
  const pathname = usePathname()
  const { imagess } = useImages()
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const lastViewedPhotoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isShowModal])

  const updatedImages: ListingGalleryImage[] = (imagess.length ? imagess : images).map(
    (url, index) => ({ id: index, url })
  )

  const handleClose = () => {
    const params = new URLSearchParams(document.location.search)
    params.delete('modal')
    params.delete('photoId')
    router.push(`${pathname}/?${params.toString()}` as any)
  }

  const selectedImage = updatedImages.find((img) => img.id === Number(photoId))

  return (
    <>
      {/* Modal View */}
      <Transition appear show={isShowModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={handleClose}>
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
          <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
            <div className="relative w-full max-w-screen-2xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 " style={{marginTop: '3rem'}}
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>

              {selectedImage && (
                <div className="flex flex-col lg:flex-row gap-4 max-h-[80vh] pt-5">
                  {/* Left: Text */}
                  <div className="w-full lg:w-5/12 p-4 overflow-y-auto listing_p" style={{ paddingLeft: '3rem'}}>
                    <Logo />
                    {/* <h2 className="text-2xl font-semibold mb-4">HomeStays</h2> */}
                    <p className="text-sm text-gray-700 mb-2">
					Where Families Find Comfort, and Every Stay Feels Like Home.
                    </p>
					<p  className="text-sm text-gray-700 mb-2">Home Stay is more than a place to sleep — it's where families gather, laughter echoes through the halls, and every stay feels like coming home.</p>
                  </div>

                  {/* Right: Large Image */}
                  <div className="w-full lg:w-7/12 flex items-center justify-center image_details">
                    <Image
                      alt="Selected"
                      src={selectedImage.url}
                      width={1000}
                      height={800}
                      className="rounded-lg object-contain w-full max-h-[80vh]"
                    />
                  </div>
                </div>
              )}

              {/* Thumbnails */}
              <div className="w-full mt-4 overflow-x-auto flex space-x-2 pb-2 px-4">
                {updatedImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => router.push(`${pathname}/?${getNewParam({ value: img.id })}&modal=PHOTO_TOUR_SCROLLABLE` as any)}
                    className={`cursor-pointer min-w-[100px] border-2 rounded-lg overflow-hidden ${
                      selectedImage?.id === img.id ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <Image
                      alt="Thumbnail"
                      src={img.url}
                      width={120}
                      height={80}
                      className="object-cover w-full h-24"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Grid View */}
      {/* {!isShowModal && (
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-4">
          {updatedImages.map(({ id, url }) => (
            <div
              key={id}
              onClick={() => router.push(`${pathname}/?${getNewParam({ value: id })}&modal=PHOTO_TOUR_SCROLLABLE` as any)}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              className="group relative mb-5 block w-full cursor-pointer"
            >
              <Image
                alt="Gallery image"
                src={url}
                width={720}
                height={480}
                className="rounded-lg transition duration-200 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      )} */}
    </>
  )
}

export default ListingImageGallery;

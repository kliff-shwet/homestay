import React, { FC } from 'react'
import Heading from '@/shared/Heading'
import { DEMO_POSTS } from '@/data/posts'
import { PostDataType } from '@/data/types'
import Pagination from '@/shared/Pagination'
import ButtonPrimary from '@/shared/ButtonPrimary'
import WidgetTags from './WidgetTags'
import WidgetCategories from './WidgetCategories'
import WidgetPosts from './WidgetPosts'
import Image from 'next/image'
import Link from 'next/link'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon'
import PostCardMeta from '@/components/PostCardMeta'
import CategoryBadgeList from '@/components/CategoryBadgeList'


// THIS IS DEMO FOR MAIN DEMO
// OTHER DEMO WILL PASS PROPS
const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 14)
//
export interface SectionLatestPostsProps {
	posts?: PostDataType[]
	className?: string
	postCardName?: 'card3'
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
	posts = postsDemo,
	postCardName = 'card3',
	className = '',
}) => {


	return (
		<div className={`nc-SectionLatestPosts relative ${className}`}>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
					<Heading>Latest Blogs 🎈</Heading>
					<div className={`grid grid-cols-1 gap-6 md:gap-8`}>
						{posts.map((post) => {
							const { id, title, href, featuredImage, desc, categories, postType } = post;
							return (
								<div
									key={id}
									className={`nc-Card3 group relative flex flex-col-reverse rounded-[40px] sm:flex-row sm:items-center`}
								>
									<div className="flex flex-grow flex-col">
										<div className="mb-4 space-y-5">
											<CategoryBadgeList categories={categories} />
											<div>
												<h2 className="nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100">
													<Link href={href} className="line-clamp-2" title={title}>
														{title}
													</Link>
												</h2>
												<div className="hidden sm:mt-2 sm:block">
													<span className="line-clamp-1 text-base text-neutral-500 dark:text-neutral-400">
														{desc}
													</span>
												</div>
											</div>
											<PostCardMeta meta={post} />
										</div>
									</div>

									<div className="mb-5 block flex-shrink-0 overflow-hidden rounded-3xl sm:mb-0 sm:ml-6 sm:w-56">
										<Link href={href} className="aspect-h-9 aspect-w-16 block h-0 w-full sm:aspect-h-16">
											<Image
												fill
												src={featuredImage}
												alt={title}
												sizes="(max-width: 768px) 100vw, 400px"
											/>
											<span>
												<PostTypeFeaturedIcon
													className="absolute bottom-2 left-2"
													postType={postType}
													wrapSize="w-8 h-8"
													iconSize="w-4 h-4"
												/>
											</span>
										</Link>
									</div>
								</div>
							);
						})}

					</div>
					<div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 md:mt-20">
						<Pagination />
						<ButtonPrimary loading>Show me more</ButtonPrimary>
					</div>
				</div>
				<div className="mt-24 w-full space-y-7 lg:mt-0 lg:w-2/5 lg:pl-10 xl:w-1/3 xl:pl-0">
					<WidgetTags />
					{/* <WidgetCategories />
					<WidgetPosts /> */}
				</div>
			</div>
		</div>
	)
}

export default SectionLatestPosts

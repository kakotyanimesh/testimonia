"use client";
import { motion } from "motion/react";
import { GlowingComponent } from "../ui/glowingdiv";
import { GradientText } from "../ui/gradienteText";
import { TextReviewOne } from "../ui/testimonialscomponents/textreviewone";
import { LinkTag } from "../ui/Link";

export const LandingHeader = () => {
	const headLine = "Build Testimonial Pages";

	const initial = {
		filter: "blur(2px)",
		opacity: 0,
		y: 12,
	};

	const animate = {
		filter: "blur(0)",
		opacity: 1,
		y: 0,
	};
	return (
		<div className="flex justify-center md:my-48 mt-30 mb-20 items-center text-center flex-col md:gap-5 gap-3 relative">
			<h1 className="md:text-6xl text-3xl">
				{headLine.split(" ").map((w, index) => (
					<motion.span
						initial={initial}
						animate={animate}
						transition={{
							duration: 0.8,
							delay: 0.2 * index,
							ease: "easeIn",
						}}
						key={index}
						className="mr-3"
					>
						{w}
					</motion.span>
				))}
				<br />
				<GradientText
					initial={initial}
					animate={animate}
					className="relative"
					transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
				>
					in minutes
					<GlowingComponent
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{
							duration: 1,
							delay: 0.4,
							ease: "easeOut",
						}}
						className="left-1/2 -translate-x-1/2 -mt-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] md:w-64 w-40 rounded-4xl h-[2px] to-transparent"
					/>
				</GradientText>
			</h1>
			<motion.p
				initial={{...initial, filter : "blur(5px)"}}
				animate={animate}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="max-w-md mx-auto px-4 text-sm"
			>
				Transform happy customers into powerful testimonials. Create
				stunning forms, collect video reviews, and showcase them with
				style across all your platforms
			</motion.p>
			<motion.div
				initial={initial}
				animate={animate}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
				className="space-x-5"
			>
				<LinkTag href={"/signin"} sizes={"md"} variants={"secondary"}>
					Start building for Free
				</LinkTag>
				<LinkTag
					href={"/signin"}
					className="md:px-10"
					variants={"tertiary"}
					sizes={"md"}
				>
					Watch Demo
				</LinkTag>
			</motion.div>
			<TextReviewOne
				className="w-60 md:w-96 xl:w-80 rotate-6 shadow-[5px_5px_12px_0px_#38b2ac] xl:absolute xl:translate-x-6/4 md:mt-20 mt-10 xl:-bottom-44"
				initial={{ opacity: 0, y: 20 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					damping: 20,
					stiffness: 100,
					delay: 0.5,
					duration: 0.9,
				}}
				textreviewid={1}
				customerCompany="Embriefy"
				customerName="Animesh kakoty"
				stars={5}
				imageSrc="https://i.pinimg.com/736x/22/c9/fd/22c9fd09af9b520ca3678e441be77723.jpg"
				textReview="Vouchly transformed how we collect and display testimonials. Our conversion rate increased by 30% after adding their vouchly wall to our landing page."
			/>
			{/* <GlowingComponent className="left-1/2 bottom-1  from-teal-400/20 to-emerald-400/15"/> */}
			{/* <GlowingComponent className="left-1/2  bottom-20 -translate-x-1/2 from-teal-400/20 to-emerald-400/15 rounded-tl-4xl w-full rounded-tr-4xl "/> */}
		</div>
	);
};

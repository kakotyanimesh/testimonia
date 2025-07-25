import { cn } from "@/utils/lib/cn";
import { Card } from "./card";
import {
	DashboardCardProps,
	RecentelyActiveProps,
} from "@/utils/types/user_types";
import React from "react";
import Link from "next/link";
import { StatusColor } from "@/utils/lib/tailwind_switch";

type DashboardProps = React.HTMLAttributes<HTMLDivElement> & DashboardCardProps;

export const DashboardCard: React.FC<DashboardProps> = ({
	className,
	title,
	data,
	desc,
	...props
}) => {
	return (
		<Card
			className={cn(
				"bg-gradient-to-br from-[hsl(var(--primary))]/60 to-[hsl(var(--tertiary))]/60 px-7 py-6 border-0 transition-colors ease-linear duration-200",
				className,
			)}
			{...props}
		>
			<h1 className="text-[--pure-white] font-semibold">Total {title}</h1>
			<h1 className="text-4xl font-bold">{data} </h1>
			<p className="text-sm text-[hsl(var(--pure-white))]">
				{desc}
			</p>
		</Card>
	);
};

type RecentlyActiveCardProps = React.HTMLAttributes<HTMLAnchorElement> &
	RecentelyActiveProps;

export const RecentlyActiveCard: React.FC<RecentlyActiveCardProps> = ({
	className,
	time,
	Name,
	position,
	src,
	status,
	...props
}) => {
	return (
		<Link
			href={src}
			className={cn(
				"flex flex-row justify-between rounded-none border-b first:rounded-t-md last:rounded-b-md transition-colors duration-200 ease-linear last:border-b-0 px-10 pt-6 pb-3 cursor-pointer text-xs border-[hsl(var(--card-bg-one))] ",
				className,
			)}
			{...props}
		>
			<div>
				<h1 className="text-sm">{Name}</h1>
				<p className="text-[hsl(var(--card-foreground))]/70">
					{position}
				</p>
			</div>
			<div className="text-right">
				<h1
					className={cn(
						"px-3 py-0.5 rounded-full border",
						StatusColor(status),
					)}
				>
					{status}
				</h1>
				<p>{time} ago</p>
			</div>
		</Link>
	);
};
